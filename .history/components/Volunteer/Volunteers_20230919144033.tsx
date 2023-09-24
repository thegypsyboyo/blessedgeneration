import React from 'react'

import { TeamMember, TeamProps } from '@/typings'

import Image from 'next/image'
import { BsPlus } from 'react-icons/bs'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import urlFor from '@/lib/urlFor';
import Layout from '../Home/Layout';

type Props = {
  teamMember: TeamMember[]
}


const Volunteers =({teamMember}:Props) => {
    return (
        <section className="w-full h-full py-[120px] pt-[60px] bg-transparent">
          <Layout >
            <div className="w-full h-full flex flex-wrap">
              <div className="relative flex ml-auto mr-auto w-full h-full">
                <div className="flex flex-wrap w-full h-full items-center justify-between ">
                  <div className="w-full h-full flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col w-full h-full text-center">
                      <span className='text-redDark font-cav text-[20px] font-[500]'>Our volunteers</span>
                      <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Meet Some of our volunteers</h2>
                      <p className="text-[16px] leading-[28px] font-nun text-dark max-w-[500px] text-center flex items-center ">This is how you get to become a volunteer to the Blessed Generation Charitable Institution.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full mt-5">
                    <div className='flex flex-wrap w-full h-full !bg-white '>
                        {teamMember?.map((item, index) => (
                            <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] py-[10px] px-[10px] relative !bg-white'>
                                <div className='single w-full h-full relative block group'>
                                    <div className="relative block overflow-hidden !bg-white  z-[1] h-full">
                                      <div className="memebr"/>
                                      <Link href={`/team/team-details/${item.slug.current}`}>
                                          <Image src={urlFor(item.image).url()} alt='image-data' width={800} height={800}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-12 h-full md:h-[400px] lg:h-[400px] w-full '/>
                                      </Link>
                                      <div className="absolute flex flex-col top-0 left-0 transition-all duration-500  ">
                                        <span className="text-[12px] transition-all duration-500 relative bg-yellowColor w-[40px] h-[40px] leading-[40px] text-white text-center pointer-events-auto flex items-center justify-center">
                                        <BsPlus className="text-white block items-center justify-center text-[25px] font-bold" />
                                        </span>
                                        <ul className="max-w-[40px] flex-col transition-all duration-500 h-full transform translate-y-[-300px] flex justify-center group-hover:translate-y-[0px]">
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
                                      <div className="absolute left-0 bottom-0  w-full bg-whitepx-[15px] pb-0 flex flex-col items-center">
                                        <Link href={`/team/team-details/${item.slug.current}`}  className="text-white font-bold text-[20px] leading-[25px] pb-[10px]  ">{item.name}</Link>
                                        <p className="text-[16px] text-white font-[500] font-nan pb-[22px]">{item.position}</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
              </div>
            </div>
          </Layout>
        </section>
      )
}

export default Volunteers