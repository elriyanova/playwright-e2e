import { test, expect } from '@playwright/test';

const clientId = '7e29e2facf83359855f746fc490443e6';
const clientSecret = 'e5NNajm6jNAzrWsKoAdr41WfDiMeS1l6IcGdhmbb';

let accessToken: string;
const quantity = 6;
const package_id = 'merhaba-7days-1gb';

// Obtain OAuth2 token
async function getOAuthToken(request: any) {
  const response = await request.post('https://sandbox-partners-api.airalo.com/v2/token', {
    data: {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    },
  });

  expect(response.status()).toBe(200);
  
  const responseData = await response.json();
  accessToken = responseData.data.access_token;
}

// Create an order for 6 'merhaba-7days-1gb' eSIMs
async function createOrder(request: any) {
  const response = await request.post('https://sandbox-partners-api.airalo.com/v2/orders', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      package_id: package_id,
      quantity: quantity,
    },
  });

  expect(response.status()).toBe(200);

  const orderData = await response.json();
  return orderData;
}

// GET a list of eSIMs. Ensure the list contains 6 eSIMs, and that all of them have the 'merhaba-7days-1gb' package slug
async function getEsimsList(request: any, orderData: any) {
  const createdAtDate = orderData.data.created_at.split(' ')[0];
  const orderId = orderData.data.id;

  const response = await request.get(`https://sandbox-partners-api.airalo.com/v2/sims?include=order&filter[created_at]=${createdAtDate} - ${createdAtDate}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      limit: 10,
      page: 1,
    },
  });

  expect(response.status()).toBe(200);

  const simsList = (await response.json()).data.filter((sim: any) => sim.simable.id === orderId);
  expect(simsList.length).toBe(quantity);
  simsList.forEach((sim: any) => {
    expect(sim.simable.package_id).toBe(package_id);
  });
}

test('Create order and verify matching eSIMs in list', async ({ request }) => {
  await test.step('Get OAuth token', async () => {
    await getOAuthToken(request);
  });

  const orderData = await test.step('Create new order', async () => {
    return await createOrder(request);
  });

  await test.step('Validate eSIMs list for created order', async () => {
    await getEsimsList(request, orderData);
  });
});
