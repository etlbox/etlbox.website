const https = require('https');

// List of NuGet packages
const packages = [
  'ETLBox',
  'ETLBox.Analysis',
  'ETLBox.AnalysisServices',
  'ETLBox.Apache.Kafka',
  'ETLBox.Azure.CosmosDb',
  'ETLBox.Azure.ServiceBus',
  'ETLBox.Azure.Tables',
  'ETLBox.Couchbase',
  'ETLBox.Csv',
  'ETLBox.Db2',
  'ETLBox.DbExtensions',
  'ETLBox.EntityFramework',
  'ETLBox.Excel',
  'ETLBox.Json',
  'ETLBox.Logging',
  'ETLBox.MariaDb',
  'ETLBox.MongoDb',
  'ETLBox.MySql',
  'ETLBox.Neo4j',
  'ETLBox.Odbc',
  'ETLBox.OleDb',
  'ETLBox.Oracle',
  'ETLBox.Parquet',
  'ETLBox.Postgres',
  'ETLBox.Redis',
  'ETLBox.Sap.Ase',
  'ETLBox.Sap.Hana',
  'ETLBox.Snowflake',
  'ETLBox.SQLite',
  'ETLBox.SqlServer',
  'ETLBox.Xml'
];

// Cache variable and expiration time (e.g., 12 hours)
let cache = { downloads: 0, packageCount: 0, timestamp: 0 };
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
        body: JSON.stringify({
          totalDownloads: cache.downloads,
          packageCount: cache.packageCount
        }),
      };
    }

    // Fetch data again if the cache has expired
    const totalDownloads = await fetchTotalDownloads(packages);

    // Update the cache
    cache = {
      downloads: totalDownloads,
      packageCount: packages.length,
      timestamp: Date.now(),
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': allowOrigin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalDownloads: totalDownloads,
        packageCount: packages.length
      }),
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
