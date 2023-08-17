"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'

import { loadStripe, Stripe } from '@stripe/stripe-js';


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


const Blog:React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState<FormState>(defaultFormState);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'stripe' | 'mpesa'>('stripe');

    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);


    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };

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
      };
    
      const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, phoneNumber: event.target.value });
      };
    
      const handleStripeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
    
        // Save the form data to session storage before redirecting
        sessionStorage.setItem('donationFormData', JSON.stringify(formState));
    
        const stripe: Stripe | null = await stripePromise;
        if (stripe) {
          // Implement Stripe payment submission logic
          // Use formState for payment details
        } else {
          console.error('Stripe has not yet loaded.');
          setIsLoading(false);
        }
    
        setIsLoading(false);
      };
    
      const handleMpesaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
    
        // Save the form data to session storage before processing
        sessionStorage.setItem('donationFormData', JSON.stringify(formState));
    
        // Implement M-Pesa payment submission logic using Safaricom Daraja API
        // Use formState for payment details
    
        setIsLoading(false);
    };
    
    
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full justify-between">
                <div className="w-full xl:max-w-[58.333333%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative -mt-2 flex w-full">
                        <div>
                            <div className="flex items-center">
                                <div className="flex ">
                                        <button onClick={() => handlePaymentMethodChange('stripe')}>Credit Card</button>
                                </div>
                                <div className="ml-4">
                                    <button onClick={() => handlePaymentMethodChange('mpesa')} className={`relative flex items-center align-middle space-between appearance-none outline-none white text-darkblue text-[14px] font-[800] uppercase tracking-[0]  py-[15px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px]`}>
                                    <span className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    <Image src="/images/mpesa.png" alt="mpesa" width={100} height={100} className='w-[40px] h-[40px] object-contain'/>
                                        M-Pesa
                                    </button>
                                </div>
                            </div>
                            {selectedPaymentMethod === "stripe" ? (
                                <form onSubmit={handleStripeSubmit}>
                                    <div className="relative block mt-12 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3>
                                        <div className="relative block ">
                                            <div className="absolute w-auto left-5 top-0 ">
                                                <select name="" id="" className='bg-primaryBase h-[130px] w-[120px] outline-none rounded-3xl border-0 p-0 m-0 text-white text-5xl font-extrabold'>
                                                    <option value="">€</option>
                                                    <option value="">$</option>
                                                </select>
                                            </div>
                                            <input 
                                            type='text ' 
                                            name='donation-money' 
                                            value={formState.donationAmount}
                                            onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                            className='h-[130px] w-full border-none outline-none bg-primaryBase rounded-3xl pl-[150px] pr-[30px] text-5xl text-right font-extrabold tracking-tighter text-white z-[1]' />
                                        </div>
                                    </div>
                                    <div className="relative block mt-12 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3>
                                        <div className="relative block ">
                                                <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(25)}
                                                    className={`${formState.donationAmount === 25 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  cursor-pointer  px-7  hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        25
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(50)}
                                                    className={`${formState.donationAmount === 50 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        50
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(100)}
                                                    className={`${formState.donationAmount === 100 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        100
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
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
                                                <input typeof="text"
                                                required
                                                placeholder="First name" name="firstName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input typeof="text" required placeholder="Last name" name="lastName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input typeof="email"
                                                required
                                                placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                                </div>
                                            </div>
                                            <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                                <div className="relative block mb-[20px] ">
                                                <input typeof="text" required placeholder="Your Phone" name="phone" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button  className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0] rounded-[30px] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `}>
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    donate now
                                </button>
                                </form>

                            ):(
                                <form className="donate" onSubmit={handleMpesaSubmit}>
                                {/* Common form fields */}
                                <div className="relative block mt-12 mb-12">
                                        <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Enter your donation</h3>
                                        <div className="relative block ">
                                            <div className="absolute w-auto left-5 top-0 ">
                                                <select name="" id="" className='bg-primaryBase h-[130px] w-[120px] outline-none rounded-3xl border-0 p-0 m-0 text-white text-5xl font-extrabold'>
                                                    <option value="">Ksh</option>
                                                </select>
                                            </div>
                                            <input 
                                            type='text ' 
                                            name='donation-money' 
                                            value={formState.donationAmount}
                                            onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                            className='h-[130px] w-full border-none outline-none bg-primaryBase rounded-3xl pl-[150px] pr-[30px] text-5xl text-right font-extrabold tracking-tighter text-white z-[1]' />
                                        </div>
                                </div>
                                <div className="relative block mt-12 mb-12">
                                    <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg pl-7 mb-6 font-extrabold tracking-tighter text-darkBlue">Select an amount</h3>
                                    <div className="relative block ">
                                            <div className="flex flex-wrap ">
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(250)}
                                                    className={`${formState.donationAmount === 250 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  cursor-pointer  px-7  hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        ksh.250
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        500 
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(100)}
                                                    className={`${formState.donationAmount === 100 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        100
                                                    </span>
                                                    <span  
                                                    onClick={() => handleDonationAmountChange(500)}
                                                    className={`${formState.donationAmount === 500 ? "bg-orangeDefault text-white" : ""} h-[65px] rounded-[10px] bgbg-white shadow-custom leading-[65px] text-[2] transition-all duration-500 font-bold  px-7 cursor-pointer hover:bg-orangeDefault  hover:text-white text-darkBlue mr-[20px] mb-[15px]`}
                                                    >
                                                        500
                                                    </span>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                <div className="form-group">

                                  <label htmlFor="phoneNumber" className="mb-5 text-darkBlue font-semibold text-[20px]">Phone Number</label>
                                  <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0">
                                    <div className="relative block mb-[20px] ">
                                        <input 
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formState.phoneNumber}
                                        placeholder="Your phone number ..."
                                        onChange={handlePhoneNumberChange}
                                        required
                                        className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '
                                        />
                                    </div>
                                </div>
                                </div>
                                {/* Donation amount selection */}
                                {/* Submit button */}
                                <button  className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0] rounded-[30px] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] `}>
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] `}/>
                                    donate now
                                </button>
                              </form>
                            )}
                        </div>
                    </div>
                </div>
                  <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] lg:pr-[15px] lg:pl-[15px] flex-shrink-0">

                  <div className="relative block mb-[30px]">
                            <div className="relative block rounded-tl-[20px] rounded-tr-[20px] overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] rounded-tl-[20px] rounded-tr-[20px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/blog/img-3.jpg" alt='main-image' width={400} height={400} className='w-full h-full object-cover transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
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
                                <div className="relative block w-full pt-[49px] px-[29px] pb-[20px] bg-borderColor rounded-[20px] border-solid border-borderColor z-[1]">
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
                  <div className="relative flex bg-lightBlue rounded-[20px] pt-[50px] pb-[41px] px-[50px] overflow-hidden">
                    <div className="relative block">
                        <Image src="/images/blog/img-3.jpg" alt='main-image' width={400} height={400} className='w-[70px] h-[70px] object-cover transform scale-[1] transition duration-500 ease rounded-full'/>
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

export default Blog