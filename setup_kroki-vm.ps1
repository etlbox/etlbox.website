# -----------------------------------------
# CONFIG
# -----------------------------------------
$ResourceGroup  = "etlbox.kroki"
$Location       = "westeurope"
$VmName         = "kroki-vm"
$AdminUser      = "azureuser"


# -----------------------------------------
# CREATE VM 
# -----------------------------------------
az group create `
  --name etlbox.kroki `
  --location westeurope

az vm create `
  --resource-group etlbox.kroki `
  --name kroki-vm `
  --image Ubuntu2204 `
  --admin-username azureuser `
  --generate-ssh-keys `
  --size Standard_B1s `
  
az network nsg rule create `
  --resource-group etlbox.kroki `
  --nsg-name kroki-vmNSG `
  --name AllowHTTP `
  --priority 100 `
  --access Allow `
  --protocol Tcp `
  --direction Inbound `
  --destination-port-ranges 80

  az network nsg rule create `
  --resource-group etlbox.kroki `
  --nsg-name kroki-vmNSG `
  --name AllowHTTPS `
  --priority 110 `
  --access Allow `
  --protocol Tcp `
  --direction Inbound `
  --destination-port-ranges 443


  az vm show -d -g etlbox.kroki -n kroki-vm --query publicIps -o tsv



  # -----------------------------------------
# Anleitung: A-Record bei Namecheap setzen
# -----------------------------------------
# 1. Bei Namecheap einloggen
#    https://ap.www.namecheap.com/
#
# 2. In der linken Navigation "Domain List" auswählen
#
# 3. Bei der Domain (z.B. etlbox.dev) auf "Manage" klicken
#
# 4. Reiter "Advanced DNS" öffnen
#
# 5. Unter "Host Records" folgende Einträge setzen:
#
#    Typ: A Record
#    Host: kroki
#    Value: <PUBLIC-IP-ADDRESS-DER-VM>
#    TTL: Automatic
#
#    Beispiel:
#      Host: kroki
#      Value: 104.45.55.164
#
# 6. WICHTIG: Alte CNAME- oder A-Records entfernen, damit
#    ausschließlich EIN A-Record auf die VM-IP zeigt.
#
# 7. Änderungen speichern
#
# 8. DNS-Propagation dauert meist 1–3 Minuten,
#    kann aber bis zu 30 Minuten dauern.
#
# 9. Testen:
#      nslookup kroki.etlbox.dev
#      ping kroki.etlbox.dev
#
#    Beide sollten die Azure-VM-Public-IP zurückgeben.





  ####IMPORTANT: NEXT COMMAND ARE BASH COMMANDS AND NEED TO BE EXECUTED IN THE VM!
  ## Login mit ssh azureuser@<IP-ADRESS>
  #Dann ausführen unter ssh:
  
  <#
sudo apt update -y
sudo apt upgrade -y

# Docker installieren
sudo apt install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null

sudo apt update -y
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $AdminUser

# Kroki-Compose
sudo mkdir -p /opt/kroki
cat <<EOF | sudo tee /opt/kroki/docker-compose.yml
version: "3.8"

services:
  kroki:
    image: yuzutech/kroki:0.28.0
    environment:
      KROKI_MERMAID_HOST: kroki-mermaid
    depends_on:
      - kroki-mermaid
    ports:
      - "8000:8000"
    tmpfs:
      - /tmp:exec
    restart: always

  kroki-mermaid:
    image: yuzutech/kroki-mermaid:0.28.0
    environment:
      XDG_CONFIG_HOME: /tmp/config
      XDG_CACHE_HOME: /tmp/cache
    tmpfs:
      - /tmp:exec
    restart: always
EOF

cd /opt/kroki
sudo docker compose up -d

# Nginx + Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

cat <<EOF | sudo tee /etc/nginx/sites-available/kroki.conf
server {
    listen 80;
    server_name kroki.etlbox.dev

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/kroki.conf /etc/nginx/sites-enabled/kroki.conf
sudo rm -f /etc/nginx/sites-enabled/default

sudo nginx -t
sudo systemctl restart nginx

sudo certbot --nginx -d kroki.etlbox.dev --non-interactive --agree-tos -m kroki@etlbox.dev

#>

##Anschließend testen:

$body = "graph TD;A-->B;"

Invoke-RestMethod `
  -Uri "https://kroki.etlbox.dev/mermaid/svg" `
  -Method Post `
  -ContentType "text/plain" `
  -Body $body `
  -OutFile "kroki-output.svg"