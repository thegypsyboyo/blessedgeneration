"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'

import { loadStripe, Stripe } from '@stripe/stripe-js';
import axios from 'axios'
import { BsClockHistory, BsFolder2 } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faQuestion } from '@fortawesome/free-solid-svg-icons'


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
        image: "/images/testing/gallery-1.jpg",
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

const DonateNow:React.FC<DonationFormProps>  = ({isOpen, onClose}) =>  {
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


      
  if (!isOpen) {
    return null; // Render nothing if isOpen is false
  }


  return (
    <>
       <div className="w-full h-full ">
      <div className={`fixed overflow-y-auto w-full p-[20px] pt-[120px] h-full block text-white  bg-black opacity-[0.7] top-0 left-0 transition-all duration-500 z-[9999]`} />

        <div className={`fixed overflow-y-auto w-full p-[0px] pt-[60px] h-full block text-white bg-transaprent top-0 mx-auto shadow-md transition-all duration-500 z-[9999] ${isOpen ? "transform translate-x-[0px] transition-all duration-[1200ms] ease-in":"transform translate-x-[500px]"}`}>
            <button
                  onClick={onClose}
                  className="relative   text-white  focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              </button>
            <Layout>
            <div className="flex flex-wrap w-full items-center justify-center">
                <div className="w-full lg:max-w-[66.667%] mb-[30px] flex-shrink-0">
                    <div className="relative -mt-2 flex w-full bg-white shadow-main p-[30px] rounded-[5px]">
                        <div className="absolute right-0 top-0 w-[30px] h-[30px] text-[20px] font-light text-white bg-black pb-[50x] pl-[5px] rounded-bl-[30px] flex items-center ">x</div>
                        <div>
                            <div className="flex items-start flex-col w-full">
                                <div className="text-[16px] font-bold border-b-borderColor mt-3 mb-4 mx-0 text-darkBlue">Select payment method</div>
                                {/* <div className="flex lg:max-w-[50%] w-full ">
                                <button onClick={() => handlePaymentMethodChange('stripe')} className={`${selectedPaymentMethod === "stripe" ? "bg-yellowColor text-white": ""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 rounded-[5px]  group z-[1]  hover:text-white mt-[4px] h-[70px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor  group-hover:-top-[40%] `}/>
                                    <Image src="/images/visa.png" alt="mpesa" width={100} height={100} className='w-auto h-auto object-contain mr-5 ' priority/>
                                        with card 
                                    </button>
                                </div>
                                <div className="lg:pl-4 w-full lg:mt-0 mt-5 lg:max-w-[50%]">
                                    <button onClick={() => handlePaymentMethodChange('mpesa')} className={`${selectedPaymentMethod === "mpesa" ? "bg-yellowColor text-white":""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 group rounded-[5px] z-[1] hover:text-white mt-[4px]  h-[70px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor  group-hover:-top-[40%] `}

                                    />
                                    <Image src="/images/saf.png" alt="mpesa" width={100} height={100} className='w-auto h-auto  object-contain mr-5 ' priority/>
                                        M-Pesa
                                    </button>
                                </div> */}
                                <div className="w-full h-full">
                                    <ul className="">
                                        {/* <li className="inline-block ml-0 mr-4 relative" onClick={() => handlePaymentMethodChange('stripe')}>
                                            <input type="radio" name='payment mode' />
                                            <label htmlFor="give gateway" className={`${selectedPaymentMethod === "stripe" ? " text-redDark":""}  text-[#002866] text-[14px font-normal leading-[24px] pl-[20px] transition-all duration-300`}>
                                                Test Donation
                                            </label>
                                        </li> */}
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
                                        {/* <div className="relative block bg-white">
                                            <div className="absolute w-auto left-5 top-0 ">
                                                <select name="" id="" className='bg-transparent text-white h-[100px] w-[70px] outline-none border-0 p-0 m-0 text-[30px] rounded-[5px] font-extrabold '
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
                                            className='h-[100px] w-full border-none outline-none bg-yellowColor shadow-custom  pl-[150px] pr-[30px] text-5xl rounded-[5px]  text-right font-extrabold tracking-tighter text-white z-[1]' />
                                        </div> */}
                                    </div>
                                    <div className="relative block mt-12 mb-12">
                                        {/* <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3> */}
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
                                        {/* <div className="relative block ">
                                                <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(25)}
                                                    className={`${formState.donationAmount === 25 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-white shadow-custom leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        25
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(50)}
                                                    className={`${formState.donationAmount === 50 ? "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px] text-darkBlue transition-all duration-500 font-bold  px-11 cursor-pointer rounded-[5px] hover:bg-yellowColor  hover:text-white mr-[20px] mb-[15px]`}
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
                                        </div> */}
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

                                    <button   className={`relative inline-block align-middle appearance-none outline-none bg-yellowColor text-white text-[14px] font-[800] uppercase tracking-[0] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `} type='submit' disabled={isLoading} >
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    {isLoading ? 'Processing ...' : 'Donate'}</button>
                                </form>

                            ):(
                                <form className="donate" onSubmit={handleMpesaSubmit}>
                                {/* Common form fields */}
                                <div className="relative block mt-7 mb-12">
                                        {/* <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-1 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3>
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
                                        </div> */}
                                        <div className="flex my-[30px] relative w-full">
                                        <span className="bg-[#002866] text-white text-center h-[60px] flex items-center justify-center w-[60px]">kes</span>
                                        <input type='text'
                                        value={formState.donationAmount}
                                        // defaultValue="100"
                                        onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}

                                        className="text-[#002866] text-[24px] font-[600] px-[20px] border-2  border-borderColor text-end shadow-main w-full"/>
                                        </div>
                                </div>
                                <div className="relative block mt-12 mb-12">
                                    {/* <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg pl-0 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3> */}
                                    <ul className="flex w-full h-full flex-wrap mb-[20px]">
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
                                            <li className="ml-3  flex-shrink-0  flex-grow-0 ">
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
                                        </ul>
                                    {/* <div className="relative block ">
                                            <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(250)}
                                                    className={`${formState.donationAmount === 250 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-light bg-shadow leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white rounded-lg text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        250
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-light bg-shadow leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor rounded-lg   hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        500 
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(1000)}
                                                    className={`${formState.donationAmount === 1000 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-light bg-shadow leading-[65px]  transition-all duration-500 font-bold  rounded-lg cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        1000
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(1500)}
                                                    className={`${formState.donationAmount === 1500 ? "bg-yellowColor  text-white" : ""} h-[65px]  bg-light bg-shadow leading-[65px]  transition-all duration-500 font-bold  cursor-pointer  px-11  hover:bg-yellowColor  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        1500
                                                    </span>
                                                   
                                                </div>
                                        </div> */}
                                    </div>
                                    <div className="relative block">
                                        {/* <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Personal Information</h3>
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
                                        </div> */}
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
      </div>
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full justify-between">
                <div className="w-full lg:max-w-[66.667%] mb-[30px] flex-shrink-0">
                    <div className="relative -mt-2 flex w-full bg-white shadow-custom  p-[30px] rounded-[5px]">
                        <div>
                            <div className="flex items-center flex-wrap w-full">
                                <div className="flex lg:max-w-[50%] w-full ">
                                <button onClick={() => handlePaymentMethodChange('stripe')} className={`${selectedPaymentMethod === "stripe" ? "bg-yellowColor text-white": ""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 rounded-[5px]  group z-[1]  hover:text-white mt-[4px] h-[70px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-yellowColor  group-hover:-top-[40%] `}/>
                                    <Image src="/images/visa.png" alt="mpesa" width={100} height={100} className='w-auto h-auto object-contain mr-5 ' priority/>
                                        with card 
                                    </button>
                                </div>
                                <div className="lg:pl-4 w-full lg:mt-0 mt-5 lg:max-w-[50%]">
                                    <button onClick={() => handlePaymentMethodChange('mpesa')} className={`${selectedPaymentMethod === "mpesa" ? "bg-yellowColor text-white":""} relative flex items-center align-middle justify-between shadow-custom  appearance-none w-full  outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[30px] overflow-hidden transition-all ease-linear duration-500 group rounded-[5px] z-[1] hover:text-white mt-[4px]  h-[70px]`}>
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
                                                <select name="" id="" className='bg-transparent text-white h-[100px] w-[70px] outline-none border-0 p-0 m-0 text-[30px] rounded-[5px] font-extrabold '
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
                                            className='h-[100px] w-full border-none outline-none bg-yellowColor shadow-custom  pl-[150px] pr-[30px] text-5xl rounded-[5px]  text-right font-extrabold tracking-tighter text-white z-[1]' />
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
                                                    className={`${formState.donationAmount === 50 ? "bg-yellowColor  text-white" : ""} h-[65px] bg-white shadow-custom leading-[65px] text-darkBlue transition-all duration-500 font-bold  px-11 cursor-pointer rounded-[5px] hover:bg-yellowColor  hover:text-white mr-[20px] mb-[15px]`}
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

                                    <button   className={`relative inline-block align-middle appearance-none outline-none bg-yellowColor text-white text-[14px] font-[800] uppercase tracking-[0] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `} type='submit' disabled={isLoading} >
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    {isLoading ? 'Processing ...' : 'Donate'}</button>
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
            </div>
        </Layout>
    </section>
    </>
  )
}

export default DonateNow