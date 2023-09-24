"use client"

import React, { useState } from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCheck, faComment, faDonate, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import AnimatedButton from '@/constants/AnimatedButton'
import { CausesItem } from '@/typings'
import urlFor from '@/lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponent } from '@/constants/RichTextComponent'
import DonateNow from './DonateNow'



type Props = {
    singlecause: CausesItem
}

const Blog = ({singlecause}:Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
  return (
    <>
    <DonateNow 
        isOpen={isModalOpen}
        onClose={closeModal}
    />
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full justify-between">
                  <div className="w-full xl:max-w-[58.333333%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" >
                              <div className="relative block -[20px]">
                                    <Image src={urlFor(singlecause.image).url()} alt='main-image' width={800} height={800} className='w-full h-full sm:h-[600px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{new Date(singlecause._createdAt).toLocaleDateString("en-Us", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}</p>
                                    </div>
                                </div>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <h3 className='text-[22px] leading-[22px] font-[800] uppercase text-darkBlue break-words block -tracking-[0.04] font-nun mb-[10px]'>{singlecause.title}</h3>
                                    <div className="mb-4 overflow-hidden block relative  ">
                                      
                                    </div>

                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>
                                    <PortableText value={singlecause.body} components={RichTextComponent}/>
                                </div>
                                <div className='relative flex flex-wrap bg-borderColor border-solid border-borderColor rounded-[20px] items-center justify-between py-[36px] px-[39px] overflow-hidden mt-12 mb-12 z-[1]'>
                                <div className="relative block mb-5">
                                  <ul className='relative flex items-center space-x-10'>
                                    <li className="flex relative items-center">
                                      <div className="relative flex items-center">
                                        <span className="relative inline-block xl:text-5xl lg:text-3xl text-2xl text-primaryBase">
                                          <FontAwesomeIcon icon={faDonate}/>
                                        </span>
                                      </div>
                                      <div className="ml-5">
                                        <span className="xl:text-xl lg:text-lg text-base font-normal  text-primaryText">Raised</span>
                                        <p className='xl:text-xl lg:text-lg text-base text-primaryDark font-bold leading-6'>Ksh.40,000</p>
                                      </div>
                                    </li>
                                    <li className="flex relative items-center">
                                      <div className="relative flex items-center">
                                        <span className="relative inline-block xl:text-5xl lg:text-3xl text-2xl text-primaryBase">
                                          <FontAwesomeIcon icon={faBullseye}/>
                                        </span>
                                      </div>
                                      <div className="ml-5">
                                        <span className="xl:text-xl lg:text-lg text-base font-normal  text-primaryText">Goal</span>
                                        <p className='xl:text-xl lg:text-lg text-base text-primaryDark font-bold leading-6'>Ksh.140,000</p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="relative block">
                                    {/* <div className="" onClick={openModal}>Donate now</div> */}
                                  <AnimatedButton className='' link='/donate-now'  text='donate now' style='bg-redLight !mt-0 '/>
                                </div>
                              </div>
                              <div className="relative block mt-[32px] ">
                            <h3 className="text-[30px] font-[900] leading-[40px] -tracking-[0.04em] text-primaryDark">Summery</h3>
                            {/* <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p>
                            <ul className="relative block pl-0 list-none ">
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Lorem Ipsum is not simply free text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p> */}
                              </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                      <div className="w-full xl:max-w-[41.666666%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div className='relative block  bg-[#f4f5f8] p-10 rounded-lg '>
                            <form action="#" className='relative'>
                                <input type="text" placeholder='Search & hit enter'  className='block outline-none bg-white text-primaryText border border-solid border-[#f2f2f2] text-[16px] font-[400] pl-[50px] h-[50px] w-full pr-[80px]'/>
                                <button typeof='submit ' className='bg-transparent text-white text-[22px] absolute top-0 right-[17px] bottom-0 outline-none border-none flex items-center p-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-orangeDefault'/>
                                </button>
                            </form>
                        </div>
                        {/* <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='relative block  bg-[#f4f5f8] p-10 rounded-lg'>
                            <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                Latest Posts
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full  pr-[18px] transition-all duration-500 '>
                                        <div className="relative top-[-1] ">
                                            <h3 className='flex flex-col leading-[20px] ml-0 p-0 text-[#454545] font-semibold text-sm'>
                                                <Link href={`/blog/blog-info/${item.slug}`} className=" transition-all duration-500 pl-0 hover:text-orangeDefault py-3 border-b-2  border-[#e7e7e7] ">
                                                    {item.title}
                                                </Link>
                                            </h3>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div> */}

                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='relative block  bg-[#f4f5f8] p-10 rounded-lg'>
                           <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                Category
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className='m-0 pl-0 list-none'>
                                {singlecause.categories.map((item, index) => (
                                <li key={index}>
                                    <Link href="#" 
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px] font-[500]  hover:text-primaryDark mt-[10px] hover:border-b-orangeDefault border-b border-b-[#e7e7e7] `}>
                                        {item.title}
                                        <span className={`group-hover:text-orangeDefault group-hover:transform group-hover:-translate-y-[50%] group-hover:scale-[1] absolute top-[50%] right-[30px] transform -tranlate-y-[50%] scale-0 text-center flex items-center justify-center` }>
                                            <FontAwesomeIcon icon={faArrowRight} className="h-[10px] w-[10px]"/>
                                        </span>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='relative block  bg-[#f4f5f8] p-10 rounded-lg'>
                       <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                               Tags
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                        <div className="mt-4 ">
                            {singlecause.tags?.map((item, index) => (
                                <Link href="#" key={23* index + "wxxx"} className='text-[10px] text-primaryDark transition-all duration-500 bg-white inline-block py-[12px] px-[30px] uppercase rounded-[17px] ml-[5px] font-[800] mb-[10px] hover:text-white hover:bg-orangeDefault '>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
    </>
  )
}

export default Blog