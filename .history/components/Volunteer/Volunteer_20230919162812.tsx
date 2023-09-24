"use client"

import React, { useRef } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { SiWechat } from 'react-icons/si'
import Link from 'next/link'

interface FormValues {
    username: string;
    email: string;
    message: string;
    // subject: string;
    phone: string;
    occupation: string;
    address: string;
    dob: string;
}


const Volunteer = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const subjectRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const dobRef = useRef<HTMLInputElement | null>(null);
    const occupationRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        // Getting the values from their useRef hooks
        let username: string, phone:string, email: string, occupation: string,dob:string, address: string,  message: string;

        username = usernameRef.current!.value;
        email = emailRef.current!.value;
        message = messageRef.current!.value;
        phone = phoneRef.current!.value;
        address = addressRef.current!.value;
        dob = dobRef.current!.value;
        occupation = occupationRef.current!.value;
      
        // Some form validation
        if (!username || !dob || !address || !occupation || !email || !phone || !message) {
          alert("Failed: Ensure to fill all form inputs");
          return;
        }
      
        // Clear the form inputs after submit
        usernameRef.current!.value = '';
        emailRef.current!.value = '';
        messageRef.current!.value = '';
        phoneRef.current!.value = '';
        occupationRef.current!.value = '';
        dobRef.current!.value = '';
        addressRef.current!.value = '';
      
        // TODO: Send the form values to an API route
        const formValues: FormValues = { username,phone, email, message, address, dob, occupation };
        let result;
        try {
          const data = await fetch('/api/volunteer', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          result = await data.json();
        } catch (error:any) {
          result = { message: `Failed: ${error.message}` };
        }
        alert(result.message); // Gives the user some sort of feedback after the form has been processed
      }
  return (
    <section className='py-[60px] relative block h-full w-full'>
        <Layout className='flex flex-col'>
            <div className='relative -mt-[40px] mb-[100px] flex flex-col items-center justify-center w-full'>
                <span className="text-redDark font-cav text-[20px] font-[500]">Register yourself with us</span>
                <h2 className="text-[33px] leading-[43px] font-nun text-redDark max-w-[500px] text-center flex items-center mx-auto">
                    Join our community & become a volunteer
                </h2>
                <p className="text-[16px] leading-[28px] font-nun text-dark max-w-[500px] text-center flex items-center mx-auto">This is how you get to become a volunteer to the Blessed Generation Charitable Institution.</p>
            </div>

            <div className="flex flex-wrap mx-auto mt-auto w-full h-full">
                <div className="h-full flex-shrink-0 flex-grow-0 xl:max-w-[50%] w-full lg:max-w-[50%]">
                    <div className="relative block bg-borderColor ld:rounded-tl-lg  lg:rounded-tr-0 rounded-tl-lg rounded-tr-lg lg:py-[60px] p-[30px] lg:px-[60px]">
                        <div className="relative block ">
                            <Image src={"/images/testing/gallery-1.jpg"} alt='main-image' width={800} height={800} className="w-full h-full object-fit rounded-lg"/>
                        </div>
                        <div className="relative block mt-[32px] ">
                            <h3 className="text-[30px] font-[900] leading-[40px] -tracking-[0.04em] text-primaryDark">Requirements</h3>
                            <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p>
                            <ul className="relative block pl-0 list-none ">
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Lorem Ipsum is not simply free text</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex items-center border-t-primaryText border-t pt-[30px] mt-[50px] ">
                            <div className='relative flex items-center justify-center h-[65px] w-[65px] bg-yellowColor rounded-[50%] text-[35px] text-white'>
                                <SiWechat/>
                            </div>
                            <div className='relative -top-[2px] ml-[20px]'>
                                <span className='text-[18px] text-primaryBase font-[700] leading-[18px] font-cav'>Call Anytime</span>
                                <p className="text-[20px] font-[800] leading-[20px]"><Link href="tel:980009630" className='text-darkBlue transition-all duration-500 hover:text-primaryBase'>+98 (000) - 9630</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 xl:max-w-[50%] w-full lg:max-w-[50%]">
                    <div className="relative block bg-white bg-shadow border-borderColor border-solid lg:rounded-tr-[20px] rounded-br-[20px] p-[60px] h-full">
                        <form action="#" onSubmit={submitForm}  className='relative block w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" required placeholder="Your Name" name="name"
                                    ref={usernameRef}

                                    className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input type="email"
                                    ref={emailRef}

                                     required
                                     placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg  font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input type="tel" required placeholder="Your Phone" ref={phoneRef} 

                                    name="name" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Address" name="name" required
                                    ref={addressRef}
                                    className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg  font-[400] '/>
                                    </div>
                                </div>

                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Date of Birth" required 
                                    ref={dobRef}
                                    name="name" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg  font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Your Occupation" name="name" required
                                    ref={occupationRef}
                                     className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-lg  font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <textarea typeof="text"ref={messageRef} placeholder="Write your message" name="message"
                                    required
                                    className='h-[150px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] pt-[18px] px-[30px] pb-[30px] rounded-lg  font-[400] '/>
                                    </div>
                                    <div className="bt">
                                        <button typeof='submit' className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0] rounded-lg py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[0px]`}>
                                            <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%]`}/>
                                            send messege
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Volunteer