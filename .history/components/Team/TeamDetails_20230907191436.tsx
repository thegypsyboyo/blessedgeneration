"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {BsArrowLeft, BsArrowRight, BsChatDots, BsChatFill, BsFacebook, BsInstagram, BsPhone, BsPhoneFill, BsTwitter, BsYoutube} from "react-icons/bs"

import { TeamDetailsProps } from '../../typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'




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
                <div className="flex-grow-0 flex-shrink-0 w-full px-[15px]">
                    <div className="flex flex-wrap w-full h-full relative z-[1] pb-[67px] bg-white ">
                        <div className="flex-grow-0 flex-shrink-0 w-full md:w-[33.333%] mb-[20px]">
                            <div className="lg:max-w-[480px] ">
                                <Image src={item.image}  alt='team-member' priority width={500} height={500} className='w-full h-full md:h-[400px] object-cover'/>
                            </div>
                            <div className="mt-5 flex items-start mb-3">
                                <span className="text-[15px] flex items-center w-[40px] justify-center h-[40px] p-[10px] bg-[#dcb161] rounded-full text-white">
                                    <FontAwesomeIcon icon={faPhoneAlt}/>
                                </span>
                                <div className="ml-3">
                                    <h2 className='uppercase text-[17px] text-dark font-semibold'>Phone</h2>
                                    <p className=""> 1-800-111-2222</p>
                                </div>
                            </div>
                            <div className="mt-5 flex items-start mb-3">
                                <span className="text-[15px] flex items-center w-[40px] justify-center h-[40px] p-[10px] bg-[#dcb161] rounded-full text-white">
                                    <FontAwesomeIcon icon={faMailForward}/>
                                </span>
                                <div className="ml-3">
                                    <h2 className='uppercase text-[17px] text-dark font-semibold'>Email</h2>
                                    <p className=""> example@email.com</p>
                                </div>
                            </div>
                            <div className="mt-5 flex items-start mb-3">
                                <span className="text-[15px] flex items-center w-[40px] justify-center h-[40px] p-[10px] bg-[#dcb161] rounded-full text-white">
                                    <FontAwesomeIcon icon={faPhoneAlt}/>
                                </span>
                                <div className="ml-3">
                                    <h2 className='uppercase text-[17px] text-dark font-semibold'>Phone</h2>
                                    <p className=""> 1-800-111-2222</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 flex-shrink-0 w-full md:w-[66.6667%] flex-col md:pl-[30px]">
                            <span className="text-[#dcb161] text-[15px] font-[500] tracking-tighter inline-block relative">
                                Senior Partner
                                <span className='content-[] absolute w-full h-[1px] bg-[#dcb161] left-0 bottom-[-3px]'/>
                            </span>
                            <h2 className="relative text-[3rem] text-[#000] font-semibold">{item.name}</h2>

                            {/* <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Expertise :</h5>
                                <span className="inline font-[500] pl-2 ">{item.specialization}</span>
                            </div>
                            <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Email :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.email}</span>
                            </div>
                            <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Phone :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.phone}</span>
                            </div>
                            <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Expertise :</h5>
                                <span className="inline font-[500] pl-2 ">{item.specialization}</span>
                            </div>
                            <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Email :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.email}</span>
                            </div>
                            <div className="mb-3 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Phone :</h5>
                                <span className="inline font-[500]  pl-2 ">{item.phone}</span>
                            </div> */}
                            <div className="">
                            <ul className="w-full h-full flex mt-2">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className="mr-2 w-[50px] h-[50px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "!bg-blue-800":""} ${social.platform === "instagram" ? "!bg-[#F56040] ":""}  ${social.platform === "linkedin" ? "!bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600":"bg-blue-600"}  ${social.platform === "youtube" ? "!bg-[#c4302b]":""} ${social.platform === "twitch" ? "!bg-[#6441A4]":""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[1]`}>
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

                            <p className='mt-[20px] text-[16px] text-dark'>Utinam maiestatis quo cu. Id libris patrioque eos, pro soluta dignissim splendide ei, vim in iudico facilis. Usu te liber repudiare. Mea option apeirian periculis et, ex vis graece intellegam, option omittam id quo.</p>

                            <p className='mt-[20px] text-[16px] text-dark'>Ius doctus voluptua referrentur at. Eu iudico causae facilisi qui, his ex tale inciderint, his augue ocurreret eloquentiam an. Est ex augue vitae scriptorem. Ad quando invidunt assueverit his, enim consulatu est ne. Mel salutatus laboramus ad, vel te adhuc doctus. Te eripuit omittam eligendi vix, oratio facete torquatos vel ea, ex illud accusamus eam.</p>


                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-full px-[15px] mt-7 lg:max-w-[full]">
                    <h2 className="text-[30px] font-[700] ">About me</h2>
                    <p className="text-[16px] font-[400] leading-[35px] text-primaryText">{item.bio}</p>
                </div>
            </div>
            ))}
        </Layout>
    </section>
  )
}

export default TeamDetails