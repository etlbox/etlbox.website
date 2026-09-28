'use strict';

const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes
const POLL_INTERVAL_MS = 10 * 1000; // 10 seconds

const AZURE_MANAGEMENT_RESOURCE = 'https://management.azure.com/';
const AZURE_API_VERSION = '2023-07-01';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAzureToken() {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      'Missing Azure credentials. Please set AZURE_TENANT_ID, AZURE_CLIENT_ID and AZURE_CLIENT_SECRET as environment variables in Netlify.'
    );
  }

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    resource: AZURE_MANAGEMENT_RESOURCE,
  });

  const response = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Failed to obtain Azure access token: ${response.status} ${response.statusText} - ${text}`
    );
  }

  const data = await response.json();
  if (!data.access_token) {
    throw new Error('Azure token response did not contain access_token.');
  }

  return data.access_token;
}

function getAzureVmConfig() {
  const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
  const resourceGroup = process.env.AZURE_RESOURCE_GROUP;
  const vmName = process.env.AZURE_VM_NAME;

  if (!subscriptionId || !resourceGroup || !vmName) {
    throw new Error(
      'Missing Azure VM configuration. Please set AZURE_SUBSCRIPTION_ID, AZURE_RESOURCE_GROUP and AZURE_VM_NAME as environment variables in Netlify.'
    );
  }

  return { subscriptionId, resourceGroup, vmName };
}

async function callAzureVmOperation(token, operation, utils) {
  const { subscriptionId, resourceGroup, vmName } = getAzureVmConfig();

  const baseUrl = `${AZURE_MANAGEMENT_RESOURCE}subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.Compute/virtualMachines/${vmName}`;
  const operationPath = operation === 'start' ? 'start' : 'deallocate';
  const url = `${baseUrl}/${operationPath}?api-version=${AZURE_API_VERSION}`;

  utils.status.show({
    title: `Azure VM ${operation}`,
    summary: `Calling ${url}`,
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Azure may return 202 (Accepted) or 204 (No Content) for async operations.
  if (!response.ok && response.status !== 202 && response.status !== 204) {
    const text = await response.text();
    throw new Error(
      `Azure VM ${operation} failed: ${response.status} ${response.statusText} - ${text}`
    );
  }
}

async function waitForKroki(krokiUrl, utils) {
  const timeoutMs = DEFAULT_TIMEOUT_MS;
  const start = Date.now();

  utils.status.show({
    title: 'Waiting for Kroki endpoint',
    summary: `Polling ${krokiUrl} for up to ${Math.round(
      timeoutMs / 1000
    )} seconds`,
  });

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(krokiUrl, { method: 'GET' });
      if (response.ok) {
        utils.status.show({
          title: 'Kroki endpoint is ready',
          summary: `Received HTTP ${response.status}`,
        });
        return;
      }
    } catch {
      // Ignore errors and keep polling
    }

    await sleep(POLL_INTERVAL_MS);
  }

  throw new Error(
    `Kroki endpoint ${krokiUrl} did not become ready within ${Math.round(
      timeoutMs / 1000
    )} seconds`
  );
}

// According to Netlify docs, the plugin should export only event handlers.
// See: https://docs.netlify.com/extend/develop-and-share/develop-build-plugins/#anatomy-of-a-plugin
module.exports = {
  /**
   * Runs before `npm run build`.
   *  1. Starts the Azure VM
   *  2. Waits until the Kroki endpoint responds successfully
   */
  onPreBuild: async ({ utils, inputs }) => {
    const krokiUrl = (inputs && inputs.krokiUrl) || 'https://kroki.etlbox.dev/';

    try {
      if (typeof fetch !== 'function') {
        throw new Error(
          'Global fetch API is not available. Netlify build environment must support fetch (Node 18+).'
        );
      }

      const token = await getAzureToken();
      await callAzureVmOperation(token, 'start', utils);
      await waitForKroki(krokiUrl, utils);
    } catch (error) {
      utils.build.failBuild(
        `Failed to prepare Azure Kroki VM before build: ${error.message}`
      );
    }
  },

  /**
   * Runs after the deploy stage completes, regardless of success or failure.
   *  1. Stops (deallocates) the Azure VM to avoid unnecessary costs.
   */
  onEnd: async ({ utils }) => {
    try {
      if (typeof fetch !== 'function') {
        utils.status.show({
          title: 'Azure VM stop skipped',
          summary:
            'Global fetch API not available in onEnd, cannot call Azure management API.',
        });
        return;
      }

      const token = await getAzureToken();
      await callAzureVmOperation(token, 'deallocate', utils);

      utils.status.show({
        title: 'Azure VM deallocated',
        summary: 'Kroki VM has been stopped after Netlify build.',
      });
    } catch (error) {
      // Do not fail the build at this late stage, but log the problem.
      utils.status.show({
        title: 'Failed to stop Azure VM',
        summary: error.message,
      });
    }
  },
};

