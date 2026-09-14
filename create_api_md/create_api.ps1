#Preparations could be (untested)
# dotnet tool update -g docfx
# copy docfx.json into docfx_project folder
# dotnet build DocFxToHugoMD

Set-Location $PSScriptRoot

function Remove-FolderIfExists([string]$path) {
    if (Test-Path $path) {
        Write-Host "Removing folder $path"
        Remove-Item $path -Recurse -Force
    }
}

# We need to clean up the bin/obj folders (we also need to docfx cache folder stored there)
# in order to make sure that the xdoc folders used by docfx are removed from the obj/bin folders, otherwise cached data is used which
# can lead to incorrect result

# Approach 1 using dotnet clean
#dotnet clean ..\..\etlbox.tests --configuration Debug
#dotnet clean ..\..\etlbox.tests --configuration Release
#dotnet clean ..\..\etlbox.tests --configuration DebNoLic
#dotnet clean ..\..\etlbox.tests --configuration RelNoLic

#dotnet clean does not always clean up properly, so let's do it the hard way
$dir = Get-ChildItem ..\..\etlbox.source | Where-Object { $_.PSIsContainer }
foreach ($d in $dir) {
    $binPath = Join-Path -Path $d.FullName -ChildPath bin
    $objPath = Join-Path -Path $d.FullName -ChildPath obj
    Remove-FolderIfExists $binPath
    Remove-FolderIfExists $objPath
}

#The _site and some obj folder created by docfx may contain some cached date, so we remove it as well
#remove-item ./obj -Recurse
Remove-FolderIfExists (Join-Path $PSScriptRoot "docfx_project\obj")
Remove-FolderIfExists (Join-Path $PSScriptRoot "docfx_project\_site")

#Then run the API migration (tested, should work like this)
dotnet build ..\..\etlbox.tests --configuration Debug
if ($LASTEXITCODE -ne 0) { throw "dotnet build etlbox.tests failed" }

dotnet build apitransform\DocFxToHugoMD --configuration Debug
if ($LASTEXITCODE -ne 0) { throw "dotnet build DocFxToHugoMD failed" }

docfx docfx_project/docfx.json
if ($LASTEXITCODE -ne 0) { throw "docfx failed" }

./apitransform/DocFxToHugoMD/bin/Debug/net8.0/DocFxToHugoMD.exe

$websiteApi = Join-Path $PSScriptRoot "..\doks_v1.8\content\api"
Remove-FolderIfExists $websiteApi
Move-Item './Output/api' $websiteApi

$dbExtApi = Join-Path $PSScriptRoot "..\doks_v1.8\dbextensions\content\api\etlbox.dbextensions"
Remove-FolderIfExists $dbExtApi
Copy-Item (Join-Path $websiteApi "etlbox.dbextensions") $dbExtApi -Recurse
pause
