"use client"
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'
import { AnimatedText } from '@/constants/AnimatedText'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EventsProps, SliderData } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import urlFor from '@/lib/urlFor'


type Props = {
  eventdata:EventsProps[]
}
const Events = ({eventdata}:Props) => {

  const selectedEvents = eventdata.filter((event, index) => {
    // Here, you can define a condition to select the objects you want.
    // For example, let's say you want the first two objects:
    return index === 0 || index === 1;
  });

  console.log("SELECETED EVENTS",selectedEvents.length)

  console.log("Two events: ", selectedEvents)
  return (
    <section className="py-[120px] pb-[240px] mt-0 relative block bg-[#fe0] z-[1] h-full w-full">
        <Layout className="h-full">
            <div className="flex flex-wrap items-center justify-center w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.333333%] mb-8 h-full">
                    <div className='relative z-[3] block w-full h-full'>
                        <div className="relative mb-[28px] block -mt-[4px] w-full">
                        <span className="text-[24px] w-full text-darkBlue font-normal leading-[24px] mb-[10px] font-man">Upcoming events</span>
                        <h2 className="m-0 text-darkBlue text-[40px] leading-[55px] font-bold  mt-[6px] capitalize font-man">
                            {/* <AnimatedText text={"Latest upcoming events"} className={""} /> */}
                            Multiple Events & Conference 
                        </h2>
                        </div>
                        <p className="text-[16px] mr-[33px] text-darkBlue ">There are many variations of passages of lorem ipsum available but the majority have suffered</p>
                        <AnimatedButton style='!bg-darkBlue !rounded-[8px] !mt-4' text="discover more" link="/events" className="!bg-redDark" />
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 w-full lg:max-w-[66.66666667%] h-full">
                        
                        <div className="w-full h-full flex flex-col space-y-[20px]">
                          {selectedEvents.map((item, index) => (
                          <div className="bg-redhref={`/events/event-details/${item.slug.current}`}Light w-full  h-full" key={index}>
                            <div className="bg-white overflow-hidden border border-[#e8e7e7] flex items-center transition-all duration-300 md:h-[200px] lg:h-[150px] h-full w-full group flex-wrap ">
                              <div className="w-full h-full lg:h-[150px] md:w-[150px] flex-grow-0 flex-shrink-0 bg-yellowColor md:full ">
                                <div className='relative  bg-[#e7e6e4] w-full h-full'>
                                  <Image src={urlFor(item.image).url()} 
                                  alt='gallery' 
                                  width={800} height={800}
                                  className=' w-full h-[230px] lg:h-[150px] md:h-[200px] object-cover transform scale-[1.01] transition-all duration-150'/>
                                  <Link className="absolute top-[50%] left-[50%] inline-block text-[13px] font-bold leading-[20px] uppercase text-darkBlue bg-[#fe0] py-[6px] px-[15px] opacity-0 mt-[20px] transition-all duration-500 transform translate-x-[-50%] translate-y-[50%]   group-hover:opacity-[1] group-hover:translate-y-[-60%]" href={`/events/event-details/${item.slug.current}`} >view</Link>
                                </div>
                              </div>
                              <div className="w-full md:w-[calc(100%-150px)] h-full flex items-center flex-grow-0 flex-shrink-0 ">
                                <div className="w-full h-full flex flex-wrap">
                                  <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[60%] py-[20px] px-[40px]">
                                    <h3 className="text-[22px] font-semibold leading-[30px] mb-[12px] text-darkBlue w-full">
                                      <Link href={`/events/event-details/${item.slug.current}`} className='w-full h-full'>
                                       {item.title}
                                    </Link></h3>
                                    <div className="text-[14px] font-normal leading-[25px] uppercase text-[#4d6995] w-full">
                                    <span className="">{item.startDate}</span>
                                    <span className=""> {item.endDate}</span>
                                    </div>
                                  </div>
                                  <div className="relative lg:w-[40%] flex-grow-0 flex-shrink-0 py-[20px] px-[40px] w-full h-full my-auto">
                                    <div className="content-[] absolute top-[50%] left-0 w-[1px] h-[50px] bg-[#7889a4] mt-[-25px] lg:block hidden "/>
                                    <h3 className="text-[16px] font-semibold leading-[25px]text-darkBlue mb-[8px] w-full">Events Location:</h3>
                                    <span className="text-[14px] font-normal leading-[24px] text-darkBlue">
                                        <span className="">{item.address}</span><span className="">,</span>
                                  </span>
                                  </div>
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

export default Events