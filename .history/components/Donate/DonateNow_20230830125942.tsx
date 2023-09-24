"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'

import { loadStripe, Stripe } from '@stripe/stripe-js';
import axios from 'axios'


interface BlopProps {
    image: string,
    author: string,
    title: string,
    decription: string,
    slug: string,
    date: string,
}
interface Cat {
    title: string,
    id: number,
}
interface Tag {
    title: string,
    id: number,
}
const data:BlopProps[] = [
    {
        author: "Lewmeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage. ",
        image: "/images/slider/slide-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
    },
]
const category:Cat[] = [
    {
        id: 1,
        title: "Donations",
    },
    {
        id: 2,
        title: "Charity",
    },
    {
        id: 3,
        title: "Food & Water",
    },
    {
        id: 4,
        title: "Kids Education",
    },
]
const tags:Tag[] = [
    {
        title: "kids",
        id: 1,
    },
    {
        title: "donation",
        id: 2,
    },
    {
        title: "water",
        id: 6,
    },
    {
        title: "charity",
        id: 7,
    },
    {
        title: "fundraising",
        id: 8,
    },

]


type DonationPeriod = 'monthly' | 'one-time';

type FormState = {
    donationAmount: number;
    donationPeriod: DonationPeriod;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };

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

const DonateNow = () =>  {
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
      
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full justify-between">
                <div className="w-full xl:max-w-[58.333333%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative -mt-2 flex w-full">
                        <div>
                            <div className="flex items-center flex-wrap w-full">
                                <div className="flex lg:max-w-[50%] w-full mb-1">
                                <button onClick={() => handlePaymentMethodChange('stripe')} className={`${selectedPaymentMethod === "stripe" ? "bg-yellowColor text-white": ""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 group z-[1]  hover:text-white mt-[4px] h-[70px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor  group-hover:-top-[40%] `}/>
                                    <Image src="/images/visa.png" alt="mpesa" width={100} height={100} className='w-auto h-auto object-contain mr-5 ' priority/>
                                        with card 
                                    </button>
                                </div>
                                <div className="lg:pl-4 w-full lg:max-w-[50%]">
                                    <button onClick={() => handlePaymentMethodChange('mpesa')} className={`${selectedPaymentMethod === "mpesa" ? "bg-yellowColor text-white":""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[4px]  h-[70px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor  group-hover:-top-[40%] `}

                                    />
                                    <Image src="/images/saf.png" alt="mpesa" width={100} height={100} className='w-auto h-auto  object-contain mr-5 ' priority/>
                                        M-Pesa
                                    </button>
                                </div>
                            </div>
                            {selectedPaymentMethod === "stripe" ? (
                                <form onSubmit={handleStripeSubmit}>
                                    <div className="relative block mt-0 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3>
                                        <div className="relative block bg-white">
                                            <div className="absolute w-auto left-5 top-0 ">
                                                <select name="" id="" className='bg-transparent text-white h-[100px] w-[70px] outline-none border-0 p-0 m-0 text-[30px] font-extrabold '
                                                value={selectedPaymentMethod}
                                                onChange={(event) => setSelectedPaymentMethod(event.target.value as "stripe" | "mpesa")}
                                                >
                                               {selectedPaymentMethod === 'stripe' && (
                                                    <>
                                                    <option value="stripe">$</option>
                                                    <option value="stripe">€</option>
                                                    </>
                                                )}
                                                </select>
                                            </div>
                                            <input 
                                            type='text ' 
                                            name='donation-money' 
                                            value={formState.donationAmount}
                                            onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                            className='h-[100px] w-full border-none outline-none bg-yellowColor shadow-custom  pl-[150px] pr-[30px] text-5xl text-right font-extrabold tracking-tighter text-white z-[1]' />
                                        </div>
                                    </div>
                                    <div className="relative block mt-12 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3>
                                        <div className="relative block ">
                                                <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(25)}
                                                    className={`${formState.donationAmount === 25 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        25
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(50)}
                                                    className={`${formState.donationAmount === 50 ? "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px] text-darkBlue transition-all duration-500 font-bold  px-11 cursor-pointer hover:bg-yellowColor  hover:text-white mr-[20px] mb-[15px]`}
                                                    >
                                                        50
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(100)}
                                                    className={`${formState.donationAmount === 100 ?  "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px] text-darkBlue transition-all duration-500 font-bold  px-11 cursor-pointer hover:bg-yellowColor  hover:text-white  mr-[20px] mb-[15px]`}
                                                    >
                                                        100
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ?  "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  px-11 cursor-pointer hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        500
                                                    </span>
                                                   
                                                </div>
                                        </div>
                                    </div>

                                    <div className="relative block">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Personal Information</h3>
                                        <div className="flex flex-wrap w-full">
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                typeof="text"
                                                required
                                                value={formState.firstName}
                                                onChange={handleFirstNameChange}
                                                placeholder="First name" name="firstName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                value={formState.lastName}
                                                onChange={handleLastNameChange}
                                                typeof="text" required placeholder="Last name" name="lastName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input typeof="email"
                                                value={formState.email}
                                                 onChange={handleEmailChange}
                                                required
                                                placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formState.phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                placeholder="Your phone number ..."
                                                required
                                                className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button   className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0] rounded-[30px] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `} type='submit' disabled={isLoading} >
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    {isLoading ? 'Processing...' : 'Donate'}              </button>
                                </form>

                            ):(
                                <form className="donate" onSubmit={handleMpesaSubmit}>
                                {/* Common form fields */}
                                <div className="relative block mt-7 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-1 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3>
                                        <div className="relative block ">
                                            <div className="absolute w-auto left-5 top-0 ">
                                                <select name="" id="" className='bg-transparent text-white h-[100px] w-[70px] outline-none border-0 p-0 m-0 text-[30px] font-extrabold'>
                                                {selectedPaymentMethod === 'mpesa' && <option value="">Ksh</option>}
                                                </select>
                                            </div>
                                            <input 
                                            type='text ' 
                                            name='donation-money' 
                                            value={formState.donationAmount}
                                            onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                            className='h-[100px] w-full border-none outline-none bg-yellowColor shadow-custom  pl-[150px] pr-[30px] text-5xl text-right font-extrabold tracking-tighter text-white z-[1]' />
                                        </div>
                                </div>
                                <div className="relative block mt-12 mb-12">
                                    <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg pl-0 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3>
                                    <div className="relative block ">
                                            <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(250)}
                                                    className={`${formState.donationAmount === 250 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        250
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        500 
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(1000)}
                                                    className={`${formState.donationAmount === 1000 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        1000
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(1500)}
                                                    className={`${formState.donationAmount === 1500 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        1500
                                                    </span>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                    <div className="relative block">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Personal Information</h3>
                                        <div className="flex flex-wrap w-full">
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                typeof="text"
                                                required
                                                value={formState.firstName}
                                                onChange={handleFirstNameChange}
                                                placeholder="First name" name="firstName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                value={formState.lastName}
                                                onChange={handleLastNameChange}
                                                typeof="text" required placeholder="Last name" name="lastName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input typeof="email"
                                                value={formState.email}
                                                 onChange={handleEmailChange}
                                                required
                                                placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input 
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formState.phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                placeholder="Your phone number ..."
                                                required
                                                className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px]  font-[400] '
                                                />
                                                </div>
                                            </div>
                                        </div>
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
                  <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] lg:pr-[15px] lg:pl-[15px] flex-shrink-0">

                  <div className="relative block mb-[30px]">
                            <div className="relative block rounded-tl-[20px] rounded-tr-[20px] overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] rounded-tl-[20px] rounded-tr-[20px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src={"/images/test/gallery-1.jpg"} alt='main-image' width={400} height={400} className='w-full h-full object-cover transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                    food
                                    </p>
                                </div>
                            </div>
                            <div className="relative block bg-white shadow-custom rounded-bl-[20px] rounded-br-[20px] border-solid border-borderColor pt-[22px] pb-[30px] px-[30px] border-t-0">
                                <h3 className="text-[26px] leading-[26px] font-[800] -tracking-[0.04em] ">
                                    <Link href=""  className='text-primaryDark transition-all duration-500 hover:text-redLight'>Let’s educate children get good life</Link>
                                </h3>
                                <p className="pt-[11px] pb-[21px] text-primaryText">There are many of lorem, but majori have suffered alteration in some form.</p>
                                <div className="relative block w-full pt-[49px] px-[29px] pb-[20px] bg-borderColor  border-solid border-borderColor z-[1]">
                                    <div className="relative w-full h-[7%] bg-white rounded-[5px] mb-[3px]">
                                        <div className="relative block h-[7px] rounded-[5px] bg-redLight transition-all duration-[1500ms] " style={{width: "60%"}}>
                                            <div className="absolute right-0 bottom-[11px] text-redLight leading-[20px] text-[12px] text-center font-[700] transition-all duration-500 ease-in">
                                                <div className='absolute left-[12px] top-[24px] h-[6px] w-[6px] bg-white rounded-[50%] z-[1] content-[]'/>
                                               60%
                                                <div className='content-[]  absolute left-[5px] top-[17px] h-[20px] w-[20px] bg-redLight rounded-[50%]'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center flex-wrap">
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.1200</span>
                                            Raised
                                        </p>
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.23000</span>
                                            Goal
                                        </p>
                                    </div>
                                </div>
                            </div>
                  </div>
                  <div className="relative flex bg-lightBlue  pt-[50px] pb-[41px] px-[50px] overflow-hidden">
                    <div className="relative block">
                        <Image src="/images/test/gallery-2.jpg" alt='main-image' width={400} height={400} className='w-[70px] h-[70px] object-cover transform scale-[1] transition duration-500 ease rounded-full'/>
                    </div>
                    <div className="ml-[20px] mt-[-4px] ">
                        <p className="text-[14px] font-normal font-man text-orangeDefault">Created 20 april, 2022</p>
                        <p className="font-semibold text-[18px] mt-[2px] text-darkBlue">Organizer: <span className='font-extrabold text-redDark text-[14px]'>Wyckliffe Okello</span></p>
                        <ul className="ml-[10px] relative block mt-[11px] list-disc">
                            <li className="font-semibold text-darkBlue ">Education</li>
                            <li className="font-semibold text-darkBlue ">Water</li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default DonateNow