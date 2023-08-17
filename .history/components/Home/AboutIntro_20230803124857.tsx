"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCheck, faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

import { planetVariants, staggerContainer, fadeIn } from '@/utils/motion';
import { TypingText } from '@/constants/TypingText';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from './Layout';
import AnimatedButton from '@/constants/AnimatedButton';

const AboutIntro = () => {
  return (
    <section className='relative block py-[120px] px-0 z-[1] h-full overflow-hidden'>
        {/* <motion.div 
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.25}}
        className="row-about h-full flex flex-wrap justify-between"
        >
            <motion.div
             className='flex-shrink-0 w-full lg:w-[47%]  pr-2 pl-2 mb-20 lg:mb-0 block relative lg: mr-[40px] h-[500px]'
            //  variants={fadeIn("left", "tween", 0.2, 1)}
             variants={planetVariants("left")}
             >
                <div className='absolute top-0 left-[-40px] content-[] h-[100px] w-[30px] rounded-[15px] bg-background'/>
                <div className="relative block w-full h-[500px]">
                    <Image  src="/images/slider/slide-1.jpg" alt='child' fill priority className='w-full h-full object-cover rounded-[20px]'/>
                </div>
                <div className="absolute -left-[20px]  -bottom-[50px] w-[240px] h-[250px]">
                    <Image src="/images/slider/slide-2.jpg" alt='img-2' fill priority className='w-full h-full align-top object-cover rounded-[20px] object-center'/>
                </div>
                <div className="absolute left-[90px] -bottom-[30px] text-[60px] leading-[60px] text-yellowColor font-[700] font-cav">
                    <p className='font-[700] text-[50px] z-[1000]'>help us today</p>
                </div>
            </motion.div>
            <div 
            className='w-full lg:w-[47%]  flex-shrink-0 pr-2 pl-2 overflow-hidden'
    
            >
                <motion.div className='relative block'
                    variants={fadeIn("left", "tween", 0.2, 1)}
                >
                    <div className="mb-[28px]">
                        <span className='text-[18px] leading-[24px] font-[700] mb-[10px] text-primaryBase font-cav relative'>
                        <TypingText title="Get to Know About Blessed Generation" className="text-primaryBase font-nun ml-2"/></span>
                        <h2 className="mb-0 mt-[6px] text-[50px] font-[800] -tracking-[0.04em] text-primaryDark leading-[60px]"><AnimatedText text="Helping each other can make world better" className=""/></h2>
                    </div>
                    <p className="text-primaryDark">We help companies develop powerful corporate social
                    responsibility, grantmaking, and employee engagement strategies. Our impact is about
                    more than moving money to where it’s needed most.</p>

                    <ul className='flex items-center relative mt-[30px] mb-[30px] pl-0'>
                        <li className='relative flex justify-center items-start'>
                            <span className="relative inline-block text-[35px] text-primaryBase mr-6">
                                <FontAwesomeIcon icon={faBullseye} />
                            </span>
                            <div className="text">
                                <h4>Our Mission</h4>
                                <p>Nonprofits around the world apply and join us to access more funding.</p>
                            </div>
                        </li>
                        <li className='relative flex justify-center items-start'>
                            <span className="relative inline-block text-[35px] text-primaryBase mr-4">
                                <FontAwesomeIcon icon={faHeartCircleCheck} />
                            </span>
                            <div className="text">
                                <h4>Our story</h4>
                                <p>Nonprofits around the world apply and join us to access more funding.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="relative block w-full mb-[50px]">
                        <div className="relative block">
                            <h4 className="text-[20px] font-[900] leading-[28px] text-primaryDark bt-[6px] ">Donations</h4>
                            <div className="w-full h-[13px] bg-borderColor rounded-[7px] mb-[14px]">
                                <div className="relative block h-[13px] bg-yellowColor rounded-[7px]" style={{width: "86%"}}>
                                    <div className="absolute right-0 bottom-[21px] text-[#707876] leading-[24px] text-center font-[500]">86%</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative block">
                            <h4 className="text-[20px] font-[900] leading-[28px] text-primaryDark bt-[6px] ">Charity</h4>
                            <div className="w-full h-[13px] bg-borderColor rounded-[7px] mb-[14px]">
                                <div className="relative block h-[13px] bg-yellowColor rounded-[7px]" style={{width: "76%"}}>
                                    <div className="absolute right-0 bottom-[21px] text-[#707876] leading-[24px] text-center font-[500]">76%</div>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                    <Link href="/about" className='font-[800] bg-primaryBase text-white relative inline-block align-middle !outline-none !visited:outline-none rounded-[30px] py-[15px] px-[49px] hover:bg-transparent hover:border hover:border-solid hover:border-primaryBase transition-all duration-500 hover:text-primaryDark'>
                        <span>Discover more</span>
                    </Link>
                </motion.div>
            </div>
        </motion.div> */}
        <Layout className="">
            <div className="flex flex-wrap w-full mx-auto my-auto">
                <div className="w-full lg:max-w-[50%] pl-[15px] pr-[15px] flex-grow-0 flex-shrink-0 mb-[40px]">
                    <div className="relative block mt-[45px]">
                        <div className="mb-[28px] relative block -mt-[4px]">
                            <span className="text-[24px] text-primaryBase font-[700] leading-[24px] mb-[10px] font-cav">Join us and start donating</span>
                            <h2 className="m-0 text-primaryDark text-[50px] leading-[60px] font-[900] -tracking-[0.04em] mt-[6px]">We’re non-profit charity &amp; NGO organization</h2>
                        </div>
                        {/* <p className="text-[16px] mr-[5px] text-primaryText">With schools closed in NSW and Victoria, and childcare
                        restricted to authorized workers in Victoria, many children will be at home for the next
                        few weeks. And with their usual creative and physical outlets – libraries, sports,
                        playgroups, and other public places.</p> */}
                        <p className="text-[16px] pt-[32px] pb-[10px] text-primaryText">With schools closed in NSW and Victoria, and childcare
                        restricted to authorized workers in Victoria, many children will be at home for the next
                        few weeks. And with their usual creative and physical outlets – libraries, sports,
                        playgroups, and other public places.</p>

                        <AnimatedButton className='' link='/about' style='' text='discove more'/>
                    </div>
                </div>
                <div className="w-full lg:max-w-[50%] pl-[15px] pr-[15px] flex-grow-0 flex-shrink-0">
                    <div className="relative block mr-[40px] w-full h-full">
                        <div className="relative block h-full w-full">
                            <div className="1 relative block h-full w-full">
                                <Image src="/images/events/image-4.jpg" alt='main-image' width={400} height={400} className='object-cover rounded-full h-full w-full'/>
                            </div>
                            
                            <div className="absolute -bottom-[75px] -right-[95px]">
                                <Image src="/images/events/image-3.jpg" alt='main-image' width={200} height={200} className='w-full h-full object-cover rounded-full'/>
                            </div>
                            <div className='absolute -bottom-[118px] left-[92px] h-[205px] w-[290px] z-[1]'>
                                <div className='absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-center bg-cover ' style={{backgroundImage: `url(/images/shape-2.png)`}}/>
                                <div className="absolute top-[43px] left-[47px]">
                                    <div className="relative flex items-center">
                                        <h3 className='text-[50px] font-[900] leading-[50px] -tracking-[0.04] text-white'>
                                            280k
                                        </h3>
                                    </div>
                                    <p className="text-[20px] text-white font-[700] leading-[25px]">We’ve helped our <br /> poor children</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    </section>
  )
}

export default AboutIntro