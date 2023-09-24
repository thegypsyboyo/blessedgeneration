"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {BsArrowLeft, BsArrowRight, BsChatDots, BsChatFill, BsFacebook, BsInstagram, BsPhone, BsPhoneFill, BsTwitter, BsYoutube} from "react-icons/bs"

import { TeamDetailsProps } from '../../typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMailForward, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'




const data:TeamDetailsProps[] = [
    {
        image: "/images/testing/gallery-1.jpg",
        bio: "You should be able to find several indispensable facts of about After-Before Breast Enhancement in the following. If there’s at least one fact you didn’t know before, help toimagine the change difference it might make. The first place you think of when you are getting ready. Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence on life on planet Earth than it’s own satellite, the moon. Classifieds are usually the first place you think of when you are getting ready to make a purchase. Whether you want to purchase a vehicle, bed, or pet. The longer they have your catalog in their hands, the best more product.",
        email: "info@lewisonyango",
        location: "Nairobi, Kenya",
        name: "Lewis Meta",
        phone: "+33(456-345-333)",
        socials: [
            {
              platform: "facebook",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life"
            },
            {
              platform: "instagram",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
            },
            {
              platform: "linkedin",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
            },
        ],
        specialization: "Photo Editor",
    },
]

const TeamDetails:React.FC = () => {
    
  return (
    <section className='w-full h-full block py-[120px] pt-[120px] relative'>
        <Layout>
            {data.map((item, index) => (
            <div className="flex flex-wrap w-full h-full" key={index}>
                <div className="flex-grow-0 flex-shrink-0 md:max-w-[41.6666%] w-full h-full">
                    <div className="rounded-[10px] mb-0 w-full max-w-[520px] overflow-hidden relative mx-auto flex flex-col  items-center justify-center">
                        <Image src={item.image}
                        width={800} height={800} alt='profile-pic' className='w-full'/>
                        <div className="mt-[-45px] mb-[60px] inline-block relative bg-redDark p-[30px] text-white rounded-[10px] w-[80%]">
                            <ul className="w-full h-full">
                                <li className="border-b border-b-yellowColor  pb-[10px] mb-[10px]">
                                    <div className="flex gap-0">
                                        <div className='text-[18px] text-yellowColor min-w-[40px]'>
                                            <FontAwesomeIcon icon={faPhone} className=''/>
                                        </div>
                                        <p className='font-bold text-white uppercase text-[18px] leading-[26px]'>Tel: <a href="tel:+123-4561-5523" className="w-full h-full">+123-4561-5523</a></p>
                                    </div>
                                </li>
                                <li className="border-b border-b-yellowColor  pb-[10px] mb-[10px] h-full">
                                    <div className="flex gap-0">
                                        <div className='text-[18px] text-yellowColor min-w-[40px]'>
                                            <FontAwesomeIcon icon={faPhone} className=''/>
                                        </div>
                                        <p className='font-bold text-white uppercase text-[18px] leading-[26px]'>Email: <a href="tel:+123-4561-5523" className="w-[90%] h-full">example@email.com</a></p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 md:max-w-[58.33333%] w-full h-full">
                    <div className="md:pl-[70px] md:pr-[45px] mb-[60px] w-full h-full">
                        <span className="text-[16px] font-bold text-yellowColor uppercase">founder</span>
                        <h4 className="text-[30px] lg:text-[52px] font-bold mb-[20px] text-redDark uppercase">humble d. dow</h4>
                        <p className="mb-[20px] text-[16px] text-primaryText">Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.</p>
                        <p className="mb-[35px] text-primaryText text-[16px]">The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples, Gothic ruins, bridges, and other picturesque architecture, designed to recreate an idyllic pastoral landscape. Gardens are also thought of as an image of the soul and innocence.</p>
                        <div className="flex items-center gap-[20px] mt-[40px] mb-[40px]">
                            <h4 className="text-[20px] font-bold uppercase">follow me on</h4>
                            <div className="">
                            <ul className="w-full transition-all duration-500 h-full transform translate-y-[0px] flex justify-center group-hover:translate-y-[0px] gap-[4px]">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className=" w-[40px] h-[40px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "hover:bg-blue-800 bg-blue-800":""} ${social.platform === "instagram" ? "hover:bg-[#F56040] bg-[#F56040]":""}  ${social.platform === "linkedin" ? "hover:bg-blue-400 bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600 bg-blue-600":""}  ${social.platform === "youtube" ? "hover:bg-[#c4302b] bg-[#c4302b]":""} ${social.platform === "twitch" ? "hover:bg-[#6441A4] bg-[#6441A4]":""}  text-white cursor-pointer w-full h-full flex items-center justify-center z-[99999]`}>
                                              {social.platform === "facebook" && <FaFacebookF className=""/>}
                                              {social.platform === "instagram" && <FaInstagram/>}
                                              {social.platform === "linkedin" && <FaLinkedinIn/>}
                                              {social.platform === "twitter" && <FaTwitter/>}
                                              {social.platform === "twitch" && <FaTwitch/>}
                                              {social.platform === "youtube" && <FaYoutube/>}
                                          </Link>
                                          </li>
                                      ))}
                                    </ul>
                            </div>
                        </div>
                        <div className="mt-[35px] ">
                            <h4 className="mb-[10px]text-[20px] font-[700] uppercase">skillset</h4>
                            <p className="text-[16px] font-normal text-primaryText leading-[26px] mt-[20px]">The English garden usually included a lake, sweeps of gently rolling lawns set against groves of trees, and recreations of classical temples.</p>
                            <div className="flex flex-wrap gap-[45px] pb-[15px] overflow-hidden w-full">
                                <div className="w-[calc((100%-45px)/2)] overflow-x-clip my-[25px] mb-[10px] ">
                                    <div className="mb-[16px]flex justify-between items-center relative w-full">
                                        <h5 className="text-[14px] inline-block mb-0 font-bold uppercase ">soil making</h5>
                                        <span className='absolute top-0 right-0 text-[14px]font-bold text-darkRed leading-[26px]'>90%</span>
                                    </div>
                                    <div className="h-[6px] rounded-[10px] bg-[#f8f5f0] flex mt-[10px]">
                                        <div className="w-[90%] relative rounded-[10px] bg-redDark">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[calc((100%-45px)/2)] overflow-x-clip my-[25px]  ">
                                    <div className="mb-[16px]flex justify-between items-center relative w-full">
                                        <h5 className="text-[14px] inline-block mb-0 font-bold uppercase ">soil making</h5>
                                        <span className='absolute top-0 right-0 text-[14px]font-bold text-darkRed leading-[26px]'>90%</span>
                                    </div>
                                    <div className="h-[6px] rounded-[10px] bg-[#f8f5f0] flex mt-[10px]">
                                        <div className="w-[90%] relative rounded-[10px] bg-redDark">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[calc((100%-45px)/2)] overflow-x-clip my-[25px] ">
                                    <div className="mb-[16px]flex justify-between items-center relative w-full">
                                        <h5 className="text-[14px] inline-block mb-0 font-bold uppercase ">soil making</h5>
                                        <span className='absolute top-0 right-0 text-[14px]font-bold text-darkRed leading-[26px]'>90%</span>
                                    </div>
                                    <div className="h-[6px] rounded-[10px] bg-[#f8f5f0] flex mt-[10px]">
                                        <div className="w-[90%] relative rounded-[10px] bg-redDark">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Layout>
    </section>
  )
}

export default TeamDetails