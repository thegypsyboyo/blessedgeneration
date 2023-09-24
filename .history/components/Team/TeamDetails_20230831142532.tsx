"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"

import { TeamDetailsProps } from '../../typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'




const data:TeamDetailsProps[] = [
    {
        image: "/images/slider/slide-1.jpg",
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
                <div className="flex-grow-0 flex-shrink-0 w-full px-[15px]">
                    <div className="w-full h-full flex relative z-[1] pl-[60px] pb-[67px] bg-[#f8f5f0] ">
                        <div className="mt-[-70px] mb-[50px] pr-[57px]">
                            <div className="lg:max-w-[480px] ">
                                <Image src={item.image} alt='team-member' width={400} height={400} className='w-full h-full lg:max-h-[400px] object-cover'/>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow-1 pt-[78px] pb-[80px]">
                            <h2 className="relative z-[1] mb-[25px] text-[36px] leading-[43px] font-semibold">{item.name}</h2>

                            <div className="mb-1 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Expertise :</h5>
                                <span className="inline font-[500] pl-2 ">{item.specialization}</span>
                            </div>
                            <div className="mb-1 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Email :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.email}</span>
                            </div>
                            <div className="mb-1 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Phone :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.phone}</span>
                            </div>

                            <div className="">
                            <ul className="w-full h-full flex">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className=" w-[40px] h-[40px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "hover:bg-blue-800":""} ${social.platform === "instagram" ? "hover:bg-[#F56040] ":""}  ${social.platform === "linkedin" ? "hover:bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600":""}  ${social.platform === "youtube" ? "hover:bg-[#c4302b]":""} ${social.platform === "twitch" ? "hover:[#6441A4]":""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[99999]`}>
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
                    </div>
                </div>
                <div className=""></div>
            </div>
            ))}
        </Layout>
    </section>
  )
}

export default TeamDetails