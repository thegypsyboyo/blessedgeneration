import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import axios from "axios"
import "../app/main.scss"

import Link from 'next/link';
import Pageheader from '@/constants/Pageheader';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const SuccessPage = ({ customer }: { customer: Stripe.Customer }) => {
  const sendDonationConfirmationEmail = async () => {
    try {
      // Make an API call to the email endpoint to send the donation confirmation email
      await axios.post('/api/send-donation-email', {
        email: customer.metadata.email,
        firstName: customer.metadata.firstName,
        lastName: customer.metadata.lastName,
        donationAmount: customer.metadata.donationAmount,
      });
      console.log('Donation confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending donation confirmation email:', error);
    }
  };

  // Call the function to send the donation confirmation email
  sendDonationConfirmationEmail();
  return (
    <>
    {/* <Navbar/> */}
    <Pageheader title='Donation confirmation'/>
    <div className='container-info'>
      <div className="card">
        <div className='shape'>
          <i className="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p className='donor-name'>Thank you <span>{customer.metadata.firstName} {customer.metadata.lastName} </span> </p>
          <p>You donation amount of <span>$ {customer.metadata.donationAmount} </span> was successfully received</p>

          <p>A thank you message was sent to <span>{customer.metadata.email}</span> </p>
          <p>TREASURE TREES  says thank you!😊❤ </p>

          <Link className='button-name' href="/donate">GO Back</Link>
      </div>
    </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { session_id } = context.query;

  try {
    // Retrieve the checkout session from Stripe using the session_id
    const session = await stripe.checkout.sessions.retrieve(session_id as string);

    // Retrieve the customer from Stripe using the customer ID in the session
    const customer = await stripe.customers.retrieve(session.customer as string);

    return {
      props: {
        customer,
      },
    };
  } catch (error) {
    console.error('Error retrieving customer data:', error);
    // Handle error and display an appropriate error message
    return {
      props: {
        error: 'Failed to retrieve customer data',
      },
    };
  }
};

export default SuccessPage;
