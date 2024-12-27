const https = require('https');

// List of NuGet packages
const packages = ['ETLBox', 'ETLBox.SqlServer', 'ETLBox.Json'];

// Cache variable and expiration time (e.g., 12 hours)
let cache = { downloads: 0, timestamp: 0 };
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

exports.handler = async (event) => {
  try {
    // Get the origin of the request
    const allowedOrigins = ['http://localhost', 'http://localhost:1313', 'https://www.etlbox.net'];
    const origin = event.headers.origin;
    const allowOrigin = allowedOrigins.includes(origin) ? origin : '';

    // Check if the cache is still valid
    if (Date.now() - cache.timestamp < CACHE_DURATION) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': allowOrigin,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalDownloads: cache.downloads }),
      };
    }

    // Fetch data again if the cache has expired
    const totalDownloads = await fetchTotalDownloads(packages);

    // Update the cache
    cache = {
      downloads: totalDownloads,
      timestamp: Date.now(),
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': allowOrigin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalDownloads }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: error.message }),
    };
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
