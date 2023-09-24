"use client"

import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import AnimatedButton from '@/constants/AnimatedButton'
import { BsClockHistory, BsFolder2 } from 'react-icons/bs'

import { Post } from '@/typings'
import urlFor from '@/lib/urlFor'



type  Props = {
    posts: Post[];
}

const Blog = ({posts }: Props) => {
   

    //   console.log(posts)

      const relatedPost  = [ ...posts, ...posts] 
  
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            {posts.map((item, index) => (
            <div className="flex flex-wrap w-full justify-between" key={index}>
                <div className="w-full xl:max-w-[66.66666%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            <div 
                            className="relative block" >
                                <div className="relative block -[20px]">
                                    <Image src={urlFor(item.mainImage).url()} alt='main-image' width={500} height={500} className='w-full h-[500px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-redDark py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] rounded-[20px] text-white font-cav leading-[18px] font-[700]'> {new Date(item._createdAt).toLocaleDateString("en-Us", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <div className='relative block pt-8 overflow-hidden  bg-white shadow-custom  p-[30px] rounded-[5px] w-full z-[1]'>
                                    <h3>
                                        <Link href={`/blog/blog-info/${item.slug.current}`} className='text-[22px] leading-[22px] font-[800] uppercase break-words block -tracking-[0.04] font-nun mb-[10px]'><h3 className='font-extrabold font-nun '>{item.title}</h3></Link>
                                    </h3>
                                    <div className="mb-4 overflow-hidden block relative  ">
                                        {item.authors.map((author, index) => (
                                        <ul className='m-0 pl-0 list-none flex' key={index}>
                                            <li className="relative z-[1] text-xs uppercase pr-14 float-left flex items-center text-primaryText">
                                                {author.image ? (
                                                    <Image src={urlFor(author.image).url()} alt='person-icon' width={80} height={80} className='h-9 w-9 rounded-full mr-3 object-contain bg-[#e9ecef] p-1'/>
                                                ): (
                                                    <Image src={"/images/person.png" }alt='person-icon' width={80} height={80} className='h-9 w-9 rounded-full mr-3 object-contain bg-[#e9ecef] p-1'/>
                                                )}
                                                <span className="mr-2">by</span>
                                                <p className="uppercase font-bold text-black font-man">{author.name}</p>
                                                <span className='absolute right-4 top-1/2 content-[] h-0.5 w-8 bg-[#dddddd] -mt-0.5 '/>
                                            </li>
                                            <li className="relative z-[1] text-xs font-bold uppercase pr-14  flex items-center text-primaryText ">
                                                <span className="mr-2 font-semibold">In</span>
                                                <Link href="" className='mr-2'>Development & Solutions Proficiency</Link>
                                                <Link href="" className='ml-2'>Security</Link>
                                            </li>
                                        </ul>
                                        ))}
                                    </div>

                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">
                                        {item.description}
                                    </motion.p>
                                    <motion.div 
                                        variants={footerVariants}
                                        initial = "hidden"
                                        whileInView="show"
                                        className="flex items-center ">
                                        <AnimatedButton className='' link={`/blog/blog-info/${item.slug.current}`} text='read more' style='!mt-0 !rounded-[5px] !bg-redDark mb-[20px]'/>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:max-w-[33.333333%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Related Reads</span>
                          </div>
                          <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full">
                                <div className="w-full relative">
                                    {relatedPost.map((item, index) => (
                                    <div className="px-[15px] pb-[30px]" key={index}>
                                        <div className="flex items-center">
                                            <div className="pr-[15px]">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={urlFor(item.mainImage).url()}
                                                     alt='similar-post' width={150} height={150} className='max-w-[65px] rounded-1 h-full object-cover'/>
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
                                </div>
                            </div>
                          </div>
                        
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Add</span>
                            </div>
                            <div className="w-full">
                                <Link href={"/donate"} className='w-full h-full'>
                                    <Image src={"/images/testing/gallery-5.jpg"} alt='add' width={400} height={400} className='w-full h-full'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Categories</span>
                            </div>
                            <ul className="w-full">
                                {item.categories.map((item, index) => (
                                    <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                        <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-[#ffbb00] border-l border-l-[#ffbb00] transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                        <Link href={""} className='font-[400] mr-[3px] text-[#222222] transition-all duration-300 text-[15px] '>{item.title }</Link>
                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Tags</span>
                            </div>
                            <div className="w-full">
                                {item.tags.map((item, index) => (
                                    <Link href={""} className='bg-[#eaeaea] inline-block text-primaryText py-[5px] px-[11px] text-[0.7rem] font-[500] mt-0 mx-[3px] mb-[7px]' key={index}>
                                        {item.title}
                                    </Link>
                                ))}
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

export default Blog