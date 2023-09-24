import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import AnimatedIcon from '@/constants/AnimatedIcon'
import { BsFacebook } from 'react-icons/bs'

const Trip = () => {
  return (
    <section className='w-full h-full py-[120px]'>
        <Layout >
            <div className="w-full h-full flex justify-between flex-wrap ">
                <div className="flex-grow-0 flex-shrink-0 w-full mb-7 lg:max-w-[33.3333%] h-full lg:pr-[15px]">
                    <div className="w-full h-full">
                        <h1 className='text-[30px] text-redLight font-nun font-[700] leading-[40px]'>THE TOP 4 DAY TRIPS</h1>
                        <span className="text-[26px] leading-[37px] pb-4 font-[300]  text-primaryText">We are Backpack Traveler, Melissa and Johnatan (that’s us!)</span>
                        <p className="text-primaryText font-[400] leading-[32px] text-[18px] mt-4"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>

                        <div className="flex items-center space-x-3 mt-5">
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-primaryBase hover:text-white"  style="bg-darkBlue"/>
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-primaryBase hover:text-white"  style="bg-darkBlue"/>
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-primaryBase hover:text-white"  style="bg-darkBlue"/>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] w-full h-full lg:pl-[15px] ">
                    <div className='w-full h-full flex flex-wrap items-start justify-between '>
                        <div className="w-full  h-[250px] md:pl-2  mb-[8px] overflow-hidden md:max-w-[50%]
                        flex-grow-0 flex-shrink-0 group" >
                            <div className="w-full h-full relative flex flex-col items-center group ">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt="" width={200} height={200} className="w-full h-full object-cover"/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                        Napoleon city
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  h-[250px] md:pl-2  mb-[8px] overflow-hidden md:max-w-[50%]
                        flex-grow-0 flex-shrink-0 group" >
                            <div className="w-full h-full relative flex flex-col items-center group ">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt="" width={200} height={200} className="w-full h-full object-cover"/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                        Napoleon city
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  h-[250px] md:pl-2  mb-[8px] overflow-hidden md:max-w-[50%]
                        flex-grow-0 flex-shrink-0 group" >
                            <div className="w-full h-full relative flex flex-col items-center group ">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt="" width={200} height={200} className="w-full h-full object-cover"/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                        Napoleon city
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  h-[250px] md:pl-2  mb-[8px] overflow-hidden md:max-w-[50%]
                        flex-grow-0 flex-shrink-0 group" >
                            <div className="w-full h-full relative flex flex-col items-center group ">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt="" width={200} height={200} className="w-full h-full object-cover"/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                        Napoleon city
                                    </p>
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

export default Trip