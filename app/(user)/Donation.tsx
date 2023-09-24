"use client"

import React, { useState } from 'react'
import { loadStripe, Stripe } from '@stripe/stripe-js';
import Layout from '@/components/Home/Layout';
import Image from 'next/image';
import AnimatedButton from '@/constants/AnimatedButton';


type DonationPeriod = 'monthly' | 'one-time';

type FormState = {
    donationAmount: number;
    donationPeriod: DonationPeriod;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  interface DonationFormProps {
    isOpen: boolean; // New prop to control visibility
    onClose: () => void; // Function to close the modal
  }

const defaultFormState: FormState = {
    donationAmount: 5,
    donationPeriod: 'one-time',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
};


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

// const CONSUMER_KEY = process.env.DARAJA_CONSUMER_KEY!;
// const CONSUMER_SECRET = process.env.DARAJA_SECRET_KEY!;

const MPESA_API_URL = '/api/mpesa-payment'; // Update this if needed
const CONSUMER_KEY = 'ipc0WRp7XkEhBAVNmYUxX1Vemx6FdkTQ';
const CONSUMER_SECRET = 'Fg3sjLjoGpPH0lfb'; 

const Donation:React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState<FormState>(defaultFormState);
    // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'stripe' | 'mpesa'>('stripe');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"stripe" | "mpesa">("stripe");
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handlePaymentMethodChange = (method: 'stripe' | 'mpesa') => {
        setSelectedPaymentMethod(method);
    };
    
      const handleDonationAmountChange = (amount: number) => {
        setFormState({ ...formState, donationAmount: amount });
      };
    
      const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, firstName: event.target.value });
      };
    
      const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, lastName: event.target.value });
      };
    
      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, email: event.target.value });
      }
    
      const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, phoneNumber: event.target.value });
      };
    
      const handleMpesaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
    
        // Save the form data to session storage before processing
        sessionStorage.setItem('donationFormData', JSON.stringify(formState));
    
        try {
          // Step 1: Generate Access Token
          const auth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);
          const tokenResponse = await fetch("/api/mpesa-payment", {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${auth}`,
            },
          });
          const tokenData = await tokenResponse.json();
          const accessToken = tokenData.access_token;
    
          // Step 2: Initiate C2B Payment
          const paymentResponse = await fetch('/api/mpesa-payment', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              donationAmount: formState.donationAmount,
              phone: formState.phoneNumber,
            }),
          });
    
          const paymentData = await paymentResponse.json();
          console.log('M-Pesa Payment Response:', paymentResponse);
          console.log('M-Pesa Payment Data:', paymentData);
    
          // Handle the payment result accordingly
          // For example, show a success message to the user
    
        } catch (error) {
          console.error('Error processing M-Pesa payment:', error);
          // Handle error
          // For example, show an error message to the user
        }
    
        setIsLoading(false);
      };  
    const handleStripeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Set loading state to true while waiting for Stripe to load
        console.log(formState);

        // Save the form data to session storage before redirecting
        sessionStorage.setItem('donationFormData', JSON.stringify(formState));
        // const stripe = await stripePromise;
        const stripe: Stripe | null = await stripePromise;
        if (stripe) {
          const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formState,
                currency: selectedPaymentMethod === 'stripe' ? 'usd' : selectedPaymentMethod === 'mpesa' ? 'kes' : 'gbp',
            })
          });
        
          const session = await response.json();

        // Redirect to Stripe checkout page
          const result = await stripe.redirectToCheckout({
              sessionId: session.id
            });
            // Redirect to Stripe checkout page in a new tab
          // Handle any errors that occur during the redirect to Stripe checkout page
          if (result.error) {
            console.error(result.error);
            setIsLoading(false); // Set loading state back to false after the Stripe checkout has been opened
          }
        } else {
          console.error('Stripe has not yet loaded.');
          setIsLoading(false); // Set loading state back to false if Stripe fails to load
        }

        setIsLoading(false); // Set loading state back to false after Stripe has loaded or an error occurred
    };

    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
      setPopupVisible(true);
    };

    const closePopup = () => {
      setPopupVisible(false);
    };

  return (
    <>
      <section className='block py-[0px] pt-[-60px] relative mt-[-100px] z-[400]'>
          <Layout>
              <div className="w-full h-full relative flex flex-wrap items-start bg-white">
                  <div className="shadow-main bg-white flex flex-wrap w-full">
                      <div className="lg:w-[38%] bg-[#002886] py-[60px] px-[55px] w-full">
                          <h2 className="text-[32px] leading-[45px] text-white mb-3 ">We need donations</h2>
                          <p className="text-[16px] leading-[28px] text-white mb-[24px] font-normal">This is how you can help a child in need at this very moment</p>
                          <div className="text-[16px] leading-[28px] text-white mb-0 w-full h-full ">
                              <div className="flex flex-wrap justify-between mb-[16px] w-full ">
                                  <div className="flex text-left items-center">
                                      Raised
                                      <span className="text-[26px] font-bold leading-[45px] text-[#fe0] mt-1 pl-2">$1,200</span>
                                  </div>
                                  <div className="flex text-right items-center">
                                      our goal 
                                      <span className="text-[26px] font-bold leading-[45px] text-[#fe0] mt-1 pl-2">$5,200</span>
                                  </div>
                              </div>
                              <div className="relative block w-full bg-borderColor rounded-[20px] border-solid border-borderColor z-[1] mt-[50px]">
                                      <div className="relative w-full h-[7%] bg-white rounded-[5px] mb-[3px]">
                                          <div className="relative block h-[7px] rounded-[5px] bg-redLight transition-all duration-[1500ms] " style={{width: "40%"}}>
                                              <div className="absolute right-0 bottom-[11px] text-redLight leading-[20px] text-[12px] text-center font-[700] transition-all duration-500 ease-in">
                                                  <div className='absolute left-[12px] top-[24px] h-[6px] w-[6px] bg-white rounded-[50%] z-[1] content-[]'/>
                                                {"40%"}
                                                  <div className='content-[]  absolute left-[5px] top-[17px] h-[20px] w-[20px] bg-redLight rounded-[50%]'/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                      </div>
                      <div className="lg:w-[62%] text-left bg-white py-[60px] px-[50px] w-full">
                          <div className="lg:pr-[180px] pr-0">
                              <h3 className="text-[16px] leading-[28px] font-[500] text-[#002866]  mb-[4px] ">Please select </h3>
                              <h2 className="text-[30px] leading-[45px] text-[#002866] mb-[8px] uppercase font-bold">Amount to donate</h2>
                              <p className="text-[16px] leading-[28px] text-[#004d6995] mb-[32px] ">All donations are tax deductable</p>
                          </div>
                          <div className="w-full h-full">
                              <form action="" className='relative mb-0' onSubmit={handleMpesaSubmit}>
                                  <div className="lg:absolute relative   lg:top-[-120px] lg:right-[50px]">
                                      <div className="flex mb-[30px] relative w-full">
                                          <span className="bg-[#002866] text-white p-3">$</span>
                                          <input type='text'
                                            value={formState.donationAmount}
                                            // defaultValue="100"
                                            onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                            
                                          className="text-[#002866] text-[24px] font-[600] px-[20px] shadow-main lg:w-[100px] w-full"/>
                                      </div>
                                  </div>
                                  {/* <ul className="flex w-full h-full flex-wrap mb-[20px] space-y-2">
                                      <li className="flex-shrink-0  flex-grow-0 ">
                                          <button className={`outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 mr-3  rounded-[3px] w-[100px] ${formState.donationAmount === 50 ?  "bg-redDark  text-white" : ""}` } onClick={() => handleDonationAmountChange(50)}>$50</button>
                                      </li>
                                      <span  
                                        onClick={() => handleDonationAmountChange(100)}
                                        className={`${formState.donationAmount === 100 ?  "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px] text-darkBlue transition-all duration-500 font-bold  px-11 cursor-pointer hover:bg-yellowColor  hover:text-white  mr-[20px] mb-[15px]`}
                                      >
                                        100
                                      </span>
                                      <li className="mx-3  flex-shrink-0  flex-grow-0 ">
                                          <button className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[100px]">$100</button>
                                      </li>
                                      <li className="mx-3  flex-shrink-0  flex-grow-0 ">
                                          <button className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[100px]">$150</button>
                                      </li>
                                      <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                          <button className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[100px]">$200</button>
                                      </li>
                                      <li className="ml-0  flex-shrink-0  flex-grow-0 ">
                                          <button className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block px-[8px] shadow-main overflow-hidden transition-all duration-500  rounded-[3px] h-[50px] w-[100px]">Custom Amount</button>
                                      </li>
                                  </ul> */}
                                  {/* <ul className="flex w-full h-full flex-wrap mb-[20px]">
                                              <li className="flex-shrink-0  flex-grow-0 ">
                                                  <button 
                                                  onClick={() => handleDonationAmountChange(5000)}
                                                  className={`${formState.donationAmount === 5000 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[120px]`}>Ksh,5000</button>
                                              </li>
                                              <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                  <button 
                                                  onClick={() => handleDonationAmountChange(100)}
                                                  className={`${formState.donationAmount === 100 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[120px]`}>ksh,10000</button>
                                              </li>
                                              <li className="ml-3 mb-2 flex-shrink-0  flex-grow-0 ">
                                                  <button 
                                                  onClick={() => handleDonationAmountChange(20000)}
                                                  className={`${formState.donationAmount === 20000 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[120px]`}>Ksh,20,000</button>
                                              </li>
                                              <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                  <button 
                                                  onClick={() => handleDonationAmountChange(50000)}
                                                  className={`${formState.donationAmount === 50000 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] w-[120px]`}>Ksh,50000</button>
                                              </li>
                                              <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                  <button 
                                                  className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block px-[8px] shadow-main overflow-hidden transition-all duration-500 rounded-[3px] h-[50px] w-[120px]">Custom Amount</button>
                                              </li>
                                          </ul> */}
                                    <ul className="flex w-full h-full flex-wrap mb-[20px] mx-0">
                                            <li className="flex-shrink-0 pr-1  flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(50)}
                                                className={`${formState.donationAmount === 50 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 mb-3 rounded-[3px] w-[100px]`}>$50</button>
                                            </li>
                                            <li className="flex-shrink-0 px-1 flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(100)}
                                                className={`${formState.donationAmount === 100 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$100</button>
                                            </li>
                                            <li className="flex-shrink-0 px-1 flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(200)}
                                                className={`${formState.donationAmount === 200 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$200</button>
                                            </li>
                                            <li className="flex-shrink-0 px-1 flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(500)}
                                                className={`${formState.donationAmount === 500 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$500</button>
                                            </li>
                                            <li className="flex-shrink-0 px-1 flex-grow-0 ">
                                                <button
                                                onClick={() => handleDonationAmountChange(500)}
                                                className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] h-[50px] w-[100px]">Custom Amount</button>
                                            </li>
                                        </ul>
                                  <div className="relative block" onClick={openPopup}>
                                    <AnimatedButton className='' link='' text='donate now' style='bg-redLight !mt-0 !rounded-[8px] '/>
                                  </div>
                                
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </Layout>

      </section>

      {isPopupVisible && (
      <div className={`fixed overflow-y-auto w-full p-[0px] pt-[60px] h-full block text-white bg-transaprent top-0 mx-auto shadow-md transition-all duration-500 z-[9999] ${isPopupVisible ? "transform translate-x-[0px] transition-all duration-[1200ms] ease-in":"transform translate-x-[500px]"}`}>
            <Layout>
            <div className="flex flex-wrap w-full items-center justify-center">
                <div className="w-full lg:max-w-[66.667%] mb-[30px] flex-shrink-0">
                    <div className="relative -mt-2 flex w-full bg-white shadow-main p-[30px] rounded-[5px]">
                        <div className="absolute right-0 top-0 w-[30px] h-[30px] text-[20px] font-light text-white bg-black pb-[5px] pl-[5px] rounded-bl-[30px] flex items-center justify-center cursor-pointer" onClick={closePopup} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>

                        </div>
                        <div>
                            <div className="flex items-start flex-col w-full">
                                <div className="text-[16px] font-bold border-b-borderColor mt-3 mb-4 mx-0 text-darkBlue">Select payment method</div>
                               
                                <div className="w-full h-full">
                                    <ul className="">
                                        <li className="inline-block ml-0 mr-4 relative" onClick={() => handlePaymentMethodChange('stripe')}>
                                            <input type="radio" name='payment mode' />
                                            <label htmlFor="give gateway" className={`${selectedPaymentMethod === "stripe" ? " text-redDark":""}  text-[#002866] text-[14px font-normal leading-[24px] pl-[20px] transition-all duration-300`}>
                                                Stripe - Credit or Debit card
                                            </label>
                                        </li>
                                        <li className="inline-block ml-0 mr-4 relative" onClick={() => handlePaymentMethodChange('mpesa')}>
                                            <input type="radio" name='payment mode' />
                                            <label htmlFor="give gateway" className={`${selectedPaymentMethod === "mpesa" ? " text-redDark":""}  text-[#002866] text-[14px font-normal leading-[24px] pl-[20px] transition-all duration-300`}>
                                                M-pesa payment
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {selectedPaymentMethod === "stripe" ? (
                                <form onSubmit={handleStripeSubmit}>
                                    <div className="relative block mt-0 mb-12">
                                        {/* <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3> */}
                                        <div className="flex my-[30px] relative w-full">
                                        <span className="bg-[#002866] text-white text-center h-[60px] flex items-center justify-center w-[60px]">$</span>
                                        <input type='text'
                                        value={formState.donationAmount}
                                        // defaultValue="100"
                                        onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}

                                        className="text-[#002866] text-[24px] font-[600] px-[20px] border-2  border-borderColor text-end shadow-main w-full"/>
                                        </div>
                                    </div>
                                    {/* <div className="relative block mt-12 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3>
                                        <ul className="flex w-full h-full flex-wrap mb-[20px]">
                                            <li className="flex-shrink-0  flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(50)}
                                                className={`${formState.donationAmount === 50 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$50</button>
                                            </li>
                                            <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(100)}
                                                className={`${formState.donationAmount === 100 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$100</button>
                                            </li>
                                            <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(200)}
                                                className={`${formState.donationAmount === 200 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$200</button>
                                            </li>
                                            <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                <button 
                                                onClick={() => handleDonationAmountChange(500)}
                                                className={`${formState.donationAmount === 500 ? "bg-darkBlue  text-white" : ""} outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block py-[12px] px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] w-[100px]`}>$500</button>
                                            </li>
                                            <li className="ml-3  flex-shrink-0  flex-grow-0 ">
                                                <button 
                                                className="outline-none text-[#002866] bg-[#fe0] text-[16px] font-[600]  inline-block px-[8px] shadow-main overflow-hidden transition-all duration-500 rounde-[3px] h-[50px] w-[100px]">Custom Amount</button>
                                            </li>
                                        </ul>
                                        
                                    </div> */}

                                    <div className="relative block">
                                        <h3 className="text-[16px]  font-bold text-darkBlue">Personal Information</h3>
                                        <div className="flex flex-wrap w-full">
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    First name
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                typeof="text"
                                                required
                                                value={formState.firstName}
                                                onChange={handleFirstNameChange}
                                                placeholder="First name" name="firstName" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]'/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Last name
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                value={formState.lastName}
                                                onChange={handleLastNameChange}
                                                typeof="text" required placeholder="Last name" name="lastName" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                    <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Email
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input typeof="email"
                                                value={formState.email}
                                                 onChange={handleEmailChange}
                                                required
                                                placeholder="Your Email" name="email" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]  '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Phone 
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formState.phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                placeholder="Your phone "
                                                required
                                                className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]  '
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex my-[30px] relative w-full">
                                        <span className="bg-[#002866] text-white text-center h-[60px] flex items-center justify-center w-[260px]">Donation total: </span>
                                        <input type='text'
                                        value={formState.donationAmount}
                                        // defaultValue="100"
                                        onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}

                                        className="text-[#002866] text-[24px] font-[600] px-[20px] border-2  border-borderColor text-end shadow-main w-full"/>
                                        </div>

                                    <button   className={`relative inline-block align-middle appearance-none outline-none bg-darkBlue text-white text-[14px] font-[800] uppercase tracking-[0] py-[15px] px-[49px] overflow-hidden w-full  transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `} type='submit' disabled={isLoading} >
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor   group-hover:-top-[40%] `}/>
                                    {isLoading ? 'Processing ...' : 'Donate'}</button>
                                </form>

                            ):(
                                <form className="donate" onSubmit={handleMpesaSubmit}>
                                {/* Common form fields */}
                                <div className="relative block mt-7 mb-12">
                                        <div className="flex my-[30px] relative w-full">
                                        <span className="bg-[#002866] text-white text-center h-[60px] flex items-center justify-center w-[80px]">kes</span>
                                        <input type='text'
                                        value={formState.donationAmount}
                                        // defaultValue="100"
                                        onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}

                                        className="text-[#002866] text-[24px] font-[600] px-[20px] border-2  border-borderColor text-end shadow-main w-full"/>
                                        </div>
                                </div>
                                <div className="relative block mt-12 mb-12">
                                    </div>
                                    <div className="relative block">
                                      
                                        <h3 className="text-[16px]  font-bold text-darkBlue">Personal Information</h3>
                                        <div className="flex flex-wrap w-full">
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    First name
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                typeof="text"
                                                required
                                                value={formState.firstName}
                                                onChange={handleFirstNameChange}
                                                placeholder="First name" name="firstName" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]'/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Last name
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                value={formState.lastName}
                                                onChange={handleLastNameChange}
                                                typeof="text" required placeholder="Last name" name="lastName" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                    <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Email
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input typeof="email"
                                                value={formState.email}
                                                 onChange={handleEmailChange}
                                                required
                                                placeholder="Your Email" name="email" className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]  '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <label htmlFor="First name" className="text-[14px] font-normal leading-[24px] relative text-darkBlue">
                                                    Phone 
                                                    <span className="text-[#a00]  text-[14px] font-normal pl-1">*</span>
                                                </label>
                                                <input 
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formState.phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                placeholder="Your phone "
                                                required
                                                className='mt-2 min-h-[50px] px-[20px] py-[12px]  w-full border-none outline-none bg-borderColor text-primaryText] text-[16px] font-[400]  '
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex my-[30px] relative w-full">
                                        <span className="bg-[#002866] text-white text-center h-[60px] flex items-center justify-center w-[260px]">Donation total: </span>
                                        <input type='text'
                                        value={formState.donationAmount}
                                        // defaultValue="100"
                                        onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}

                                        className="text-[#002866] text-[24px] font-[600] px-[20px] border-2  border-borderColor text-end shadow-main w-full"/>
                                        </div>
                                {/* Donation amount selection */}
                                {/* Submit button */}
                                  <button   className={`relative inline-block align-middle appearance-none outline-none bg-yellowColor text-white text-[14px] font-[800] uppercase tracking-[0] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `} type='submit' disabled={isLoading} >
                                      <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                      {isLoading ? 'Processing ...' : 'Donate'}</button>
                              </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </div>
      )}
    </>

    // <section className="mt-[-165px]">
    // </section>
  )
}

export default Donation