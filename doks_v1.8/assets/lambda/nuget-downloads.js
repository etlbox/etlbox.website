const https = require('https');

// Liste der NuGet-Pakete
const packages = ['ETLBox', 'ETLBox.SqlServer', 'ETLBox.Json'];

// Cache-Variable und Ablaufzeit (z.B. 12 Stunden)
let cache = { downloads: 0, timestamp: 0 };
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 Stunden in Millisekunden

exports.handler = async () => {
  try {
    // Überprüfe, ob der Cache noch gültig ist
    if (Date.now() - cache.timestamp < CACHE_DURATION) {
      return {
        statusCode: 200,
        body: JSON.stringify({ totalDownloads: cache.downloads }),
      };
    }

    // Lade die Daten neu, wenn der Cache abgelaufen ist
    const totalDownloads = await fetchTotalDownloads(packages);

    // Cache aktualisieren
    cache = {
      downloads: totalDownloads,
      timestamp: Date.now(),
    };

    return {
      statusCode: 200,
      body: JSON.stringify({ totalDownloads }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

async function fetchTotalDownloads(packageNames) {
  let totalDownloads = 0;

  for (const packageName of packageNames) {
    const downloads = await fetchNugetDownloads(packageName);
    totalDownloads += downloads;
  }

  return totalDownloads;
}

function fetchNugetDownloads(packageName) {
  const url = `https://api-v2v3search-0.nuget.org/query?q=${packageName}&prerelease=false`;

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const result = JSON.parse(data);
        const packageInfo = result.data.find((pkg) => pkg.id.toLowerCase() === packageName.toLowerCase());
        if (packageInfo) {
          resolve(packageInfo.totalDownloads);
        } else {
          reject(new Error(`Package ${packageName} not found`));
        }
      });
    }).on('error', reject);
  });
}
