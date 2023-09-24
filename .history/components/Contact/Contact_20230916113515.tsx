"use client"
import React, { useRef } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'
import Image from 'next/image'
import Link from 'next/link'
import { ContactInfo } from '@/typings'

interface FormValues {
    username: string;
    email: string;
    message: string;
    subject: string;
    phone: string;
}

const Contact = () => {

    const contactInfo:ContactInfo[] = [
        {
            email: "blessedgeneration@info.com",
            link: "#",
            phone: "(+33 567 456 345)",
            title: "Malindi Children's,  Kenya",
            image: "/images/test/gallery-1.jpg"
        },
        {
            email: "blessedgeneration@info.com",
            link: "#",
            phone: "(+254) 5456 345)",
            title: "Nairobi Kenya, Highschool",
            image: "/images/test/gallery-2.jpg"

        },
        {
            email: "blessedgeneration@info.com",
            link: "#",
            phone: "(+254) 5456 345)",
            title: "Kisii Chidlren's Home",
            image: "/images/test/gallery-3.jpg"
        },

    ]

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const subjectRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        // Getting the values from their useRef hooks
        let username: string, phone:string, email: string, subject:string, message: string;

        username = usernameRef.current!.value;
        email = emailRef.current!.value;
        subject = subjectRef.current!.value;
        message = messageRef.current!.value;
        phone = phoneRef.current!.value;
      
        // Some form validation
        if (!username || !email || !subject || !phone || !message) {
          alert("Failed: Ensure to fill all form inputs");
          return;
        }
      
        // Clear the form inputs after submit
        usernameRef.current!.value = '';
        emailRef.current!.value = '';
        messageRef.current!.value = '';
        subjectRef.current!.value = '';
        phoneRef.current!.value = '';
      
        // TODO: Send the form values to an API route
        const formValues: FormValues = { username,phone, email, message, subject };
        let result;
        try {
          const data = await fetch('/api/contact', {
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
    <section className="py-[120px] relative">
        <Layout className="flex flex-col items-center justify-center">
            {/* <div className="flex flex-wrap items-center justify-center w-full h-full mb-[50px]">
                <div className="w-full lg:max-w-[66.66667%] flex-grow-0 flex-shrink-0 ">
                    <div className="text-center w-full">
                        <span className="mb-[9px] text-redDark inline-block font-extrabold text-[14px] tracking-[0.04em] font-cav ">CONTACT US</span>
                        <h3 className="text-[50px] lg:text-[40px] xl:text-[50px] font-semibold tracking-[-.04em] text-redDark mb-[25px] xl:leading-[60px] lg:leading-[50px] leading-[40px]">Get in touch with us for more information</h3>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-wrap  bg-white rounded-[0px] bg-shadow relative z-[1] w-full h-full border-0 ">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[64%] w-full lg:pt-[90px] lg:pb-[100px] lgpx-[100px] pt-[60px] pb-[70px] px-[70px]">
                    <div className="w-full">
                        <h3 className="font-semibold text-[30px] tracking-[-0.04em] text-darkBlue">Send a message</h3>

                        <form action="#" onSubmit={submitForm} className='w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pr-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name' required 
                                        typeof='text' placeholder='Enter your name' 
                                        ref={usernameRef}
                                        className='w-full h-[60px] border outline-0 bg-transparent px-[25px] py-0 text-darkBlue'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pl-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='email'  type='email' placeholder='Enter your email' 
                                        ref={emailRef}
                                        className='w-full h-[60px] border outline-0 bg-transparent px-[25px] py-0 text-dakrBlue'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pr-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='phone' required type='text' placeholder='Phone'
                                        ref={phoneRef} 
                                        className='w-full h-[60px] border outline-0 bg-transparent px-[25px] py-0 text-dakrBlue'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pl-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name'  typeof='text' required placeholder='Subject'
                                        ref={subjectRef}
                                        className='w-full h-[60px] border outline-0 bg-transparent px-[25px] py-0 text-dakrBlue'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 w-full mt-0">
                                    <div className="mt-[20px]">
                                        <textarea name='name'  typeof='text' placeholder='Your messege' required  
                                        ref={messageRef}
                                        className='w-full h-[160px] border outline-0 bg-transparent py-[23px] px-[25px] text-dakrBlue'/>
                                    </div>
                                </div>
                                <button className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px]`}>
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%]  -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%]`}/>
                                    send messege
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[36%] w-full">
                    <Image src={"/images/test/gallery-1.jpg"} alt='contact-image' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
            </div>

            <div className="flex flex-wrap w-full mt-[70px]">
                {contactInfo?.map((item, index) => (
                <div className="w-full md:max-w-[50%] lg:max-w-[33.333333%] flex-grow-0 flex-shrink-0 pl-[15px] pr-[15px]" key={index}>
                    <div className="bg-shadow px-[50px] py-[60px] bg-white mb-[30px] text-center rounded-[10px] flex flex-col items-center ">
                        <div className="h-[80px] w-[80px] flex items-center mt-auto overflow-hidden mb-3">
                            <Image src={item.image} alt="" width={200} height={200} className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div className="">
                            <h3 className="text-[22px] tracking-tighter text-primaryDark mb-[20px] pb-[23px] border-b border-b-[#eaeaef] font-bold">{item.title}</h3>
                            <div className="mb-[30px]">
                                <p className='text-[16px] tracking-tighter text-primaryDark hover:text-redDark transition-all duration-500'>
                                    <a href={`mailto:${item.email}`} className='outline-none'>{item.email}</a>
                                </p>
                                <p className='text-[16px] tracking-tighter text-primaryDark '>
                                    <a href="tel:(+33) 676 576 576" className='outline-none'>(+33)  576 686 675</a>
                                </p>
                            </div>
                            <div className="">
                                <AnimatedButton className='!text-[15px] !font-[500]' link={item.link} text='View Location' style='!rounded-[5px] !mt-0 !px-[36px]'/>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </Layout>
    </section>
  )
}

export default Contact