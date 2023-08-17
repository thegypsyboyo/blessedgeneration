import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CONSUMER_KEY = 'ipc0WRp7XkEhBAVNmYUxX1Vemx6FdkTQ';
const CONSUMER_SECRET = 'Fg3sjLjoGpPH0lfb';
const MPESA_API_URL = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Step 1: Generate Access Token
    const accessTokenResponse = await axios.get(MPESA_API_URL, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64')}`,
      },
    });
    const accessToken = accessTokenResponse.data.access_token;

    // Step 2: Initiate C2B Payment
    const paymentResponse = await axios.post(
      'https://api.safaricom.co.ke/mpesa/c2b/v1/simulate',
      {
        ShortCode: 'YOUR_BUSINESS_SHORTCODE', // Replace with your business shortcode
        CommandID: 'CustomerPayBillOnline',
        Amount: req.body.donationAmount,
        Msisdn: req.body.phone,
        BillRefNumber: 'Donation',
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const paymentData = paymentResponse.data;
    console.log('C2B Payment Response:', paymentData);

    res.status(200).json(paymentData);
  } catch (error) {
    console.error('Error processing C2B payment:', error);
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
}
