import { NextApiRequest, NextApiResponse } from 'next';

const CONSUMER_KEY = 'ipc0WRp7XkEhBAVNmYUxX1Vemx6FdkTQ';
const CONSUMER_SECRET = 'Fg3sjLjoGpPH0lfb';
const MPESA_API_URL = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Step 1: Generate Access Token
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
    const tokenResponse = await fetch(MPESA_API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
      },
    });
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Initiate C2B Payment
    const paymentResponse = await fetch(
      'https://api.safaricom.co.ke/mpesa/c2b/v1/simulate',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ShortCode: '303030', // Replace with your business shortcode
          CommandID: 'CustomerPayBillOnline',
          Amount: req.body.donationAmount,
          Msisdn: req.body.phone,
          BillRefNumber: 'Donation',
        }),
      }
    );
    const paymentData = await paymentResponse.json();
    console.log('C2B Payment Response:', paymentData);

    res.status(200).json(paymentData);
  } catch (error) {
    console.error('Error processing C2B payment:', error);
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
}
