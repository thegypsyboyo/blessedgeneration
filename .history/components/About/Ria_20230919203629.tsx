"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import { RiaProps, Socials } from '@/typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import urlFor from '@/lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponent } from '@/constants/RichTextComponent'


type Props = {
    aboutRia: RiaProps[]
}

const Ria = ({aboutRia}:Props) => {
    console.log("About ria fennema and festas",aboutRia)

  return (
    <section className='block py-[120px] pt-[120px] relative'>
        <Layout>
            {aboutRia.map((ria, index) => (
            <div className="flex flex-wrap-reverse flex-row-reverse  w-full justify-between" key={index}>
                <div className="relative w-full xl:max-w-[33.333%] lg:max-w-[33.333%] mb-[30px] lg:pl-[25px] flex-shrink-0">
                    <aside className="relative block">
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Related Reads</span>
                          </div>
                          <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full">
                                {/* <div className="w-full relative">
                                    {relatedPost.map((item, index) => (
                                    <div className="px-[15px] pb-[30px]" key={index}>
                                        <div className="flex items-center">
                                            <div className="pr-[15px]">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='max-w-[65px] rounded-1 h-[70px] object-cover'/>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="font-[600] text-[14px] mb-[10px] break-words ">
                                                    <Link href={""}>
                                                        Top 20 Events and Conference Countries
                                                    </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div> */}
                            </div>
                          </div>
                        
                        </div>
                        
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px] '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Categories</span>
                            </div>
                            <ul className="w-full">
                                {ria.categories.map((item, index) => (
                                    <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                        <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-[#ffbb00] border-l border-l-[#ffbb00] transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                        <Link href={""} className='font-[400] mr-[3px] text-[#222222] transition-all duration-300 text-[15px] '>{item.title }</Link>
                                    </li>
                                ))}
                            </ul>
                            
                        </div>

                        <div className="relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]">
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Instagram feeds</span>
                            </div>
                            {/* <div className="mb-5 relative  w-full h-full flex flex-wrap items-center ">
                                {imageArray.map((item, index) => (
                                <div className="w-[33%] text-center" key={index}>
                                    <div className="relative z-[1] m-1">
                                        <Link href={""} className='w-full h-full block'>
                                            <Image src={item.image} alt='thumb-1' width={150} height={150} className='max-w-full h-[80px] object-cover'/>
                                        </Link>
                                    </div>
                                </div>
                                ))}
                            </div> */}
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]'
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Tags</span>
                            </div>
                            <div className="w-full">
                                {ria.tags.map((item, index) => (
                                    <Link href={""} className='bg-[#eaeaea] inline-block text-primaryText py-[5px] px-[11px] text-[0.7rem] font-[500] mt-0 mx-[3px] mb-[7px]' key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]'
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Advertisement </span>
                            </div>
                            {/* <div className="w-full">
                                <Link href={"/donate"} className='w-full h-full'>
                                    <Image src={"/images/test/gallery-1.jpg"} alt='add' width={400} height={400} className='w-full h-full'/>
                                </Link>
                            </div> */}
                            
                        </div>
                      
                    </aside>
                </div>
                  <div className="w-full xl:max-w-[66.6667%] lg:max-w-[66.6667%] lg:pr-[10px] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {aboutRia?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                              <div className="relative block -[20px] lg:h-[500px]">
                                    <Image src={urlFor(item.mainImage).url()} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[400px] lg:max-h-[400px] object-cover rounded-tl-[10px] rounded-tr-[10px] '/>
                                </div>
                            
                                <div className="mt-[0px] relative block bg-white  pt-0 group rounded-[5px] w-full">
                                    <PortableText value={item.body} components={RichTextComponent}/>
                                </div>
                                {item.authors.map((author, index) => (
                                <div 
                                className='relative block  bg-white shadow-custom  mt-11 p-[30px] group rounded-[5px] w-full'
                                 key={index}>
                                 <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center" >
                                            <span className='mr-[10px]'>About the Author</span>
                                    </div>
                                    <div className="w-full flex h-full">
                                    <div className="max-w-[150px] pr-[25px]">
                                        <Image src={urlFor(author.image).url()} alt='author' width={200} height={200} className='w-full h-full object-cover'/>
                                    </div>
                                    <div className="">
                                        <div className="font-[600] mb-[5px] uppercase">
                                        <Link href={""}>
                                            {author.name}
                                        </Link>
                                        </div>
                                        <p className="text-primaryText">
                                        Introducing our esteemed guest blogger! With years of experience in the events industry, Venessa&apos;s insightful posts will provide valuable tips and inspiration for planning your next big event.
                                        </p>
                                        <ul className="w-full h-full flex mt-2">
                                        {author.socials?.map((social, index) => (       
                                            <li key={index} className="mr-2 w-[30px] h-[30px] flex ">
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
                                    </div>
                                </div>
                                ))}
                                <div 
                            className='relative block  bg-white shadow-custom  mt-11 p-[30px] group rounded-[5px] w-full '
                            >
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>Related posts</span>
                                </div>
                                <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full ">
                                <div className="w-full  h-full flex flex-wrap relative pb-[30px]">
                                    {/* {relatedPost.map((item, index) => (
                                    <div className="flex-grow-0 flex-shrink-0 md:w-[50%] w-full sm:w-[50%] h-full p-2" key={index}>
                                        <div className="w-full h-full flex flex-col items-center">
                                            <div className="w-full h-full">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='w-full  rounded-1 rounded-[5px] h-[240px] object-cover'/>
                                                </Link>
                                            </div>
                                            <div className="w-full ">
                                            <div className="w-full h-full font-[600] text-[14px] mb-[10px] break-words pt-2">
                                              <Link href={""} className='w-full'>
                                                  Top 20 Events and Conference Countries
                                              </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))} */}
                                </div>
                            </div>
                          </div>
                        
                            </div>
                            </motion.div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
            ))}
        </Layout>
    </section>
  )
}

export default Ria