"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EventsProps} from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsCalendar, BsClock, BsHourglass, BsPlus } from 'react-icons/bs'
import { BiMoney, BiSolidLocationPlus } from 'react-icons/bi'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Countdown from './CountDown';
import urlFor from '@/lib/urlFor';

type Props = {
  eventdata:EventsProps[]
}

const Events = ({eventdata}:Props) => {

  // const sampleData:EventsProps[] = [
  //   {
  //     img: "/images/test/gallery-1.jpg",
  //     title: "Cultural Events coming soon",
  //     description: "Cultural Events coming soon",
  //     time: "9.00am",
  //     location: "Malindi, Kenya",
  //     slug: "cultural-events-coming-soon",
  //     timeStamp: "2023-09-04T09:00:00",
  //      // Set the event's end time as a string
  //   },
  //   {
  //     img: "/images/test/gallery-4.jpg",
  //     title: "Cultural Events coming soon",
  //     description: "Cultural Events coming soon",
  //     time: "9.00am",
  //     location: "Malindi, Kenya",
  //     slug: "cultural-events-coming-soon",
  //     timeStamp: "2023-08-04T09:00:00", // Set the event's end time as a string
  //   },
  //   {
  //     img: "/images/test/gallery-2.jpg",
  //     title: "Cultural Events coming soon",
  //     description: "Cultural Events coming soon",
  //     time: "9.00am",
  //     location: "Malindi, Kenya",
  //     slug: "cultural-events-coming-soon",
  //     timeStamp: "2023-10-04T09:00:00", // Set the event's end time as a string
  //   }
  // ];

  // Use state to store the ended status for each event
  const [eventsEnded, setEventsEnded] = useState<boolean[]>([]);

  useEffect(() => {
    const currentTime = new Date().getTime();

    // Calculate the ended status for each event
    const updatedEventsEnded = eventdata.map((event) =>
      event.timeStamp
        ? new Date(event.timeStamp).getTime() <= currentTime
        : false // Set it to false if timeStamp is undefined
    );

    // Set the updated ended status in state
    setEventsEnded(updatedEventsEnded);
  }, [eventdata]);


  return (
    <section className="w-full h-full py-[120px] pt-[60px] bg-[#f8f7f5]">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto w-full h-full mb-8">
            <div className="flex flex-wrap w-full h-full items-center justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0">
                <div className="flex flex-col w-full h-full text-center">
                  <span className='text-redDark font-cav text-[20px] font-[500]'>upcoming events</span>
                  <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Our Latest Upcoming Events </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-5">
                {/* <div className='flex flex-wrap w-full h-full !bg-white '>
                    {eventdata?.map((item, index) => (
                        <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] py-[10px] px-[10px] relative !bg-white rounded-full'>
                            <div className='single w-full h-full relative block group rounded-[15px]'>
                                <div className="w-full relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/events/event-details/${item.slug.current}`} className="w-full h-full">
                                  	<Image src={urlFor(item.image).url()} alt='image-data' width={800} height={800}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-1 h-full md:h-[300px] rounded-t-[20px] lg:h-[300px] w-full '/>
                                  </Link>
                                </div>
                                <div className="w-full bg-white border border-[#eaeaea] py-[25px] px-[20px] flex flex-col items-center justify-center">
                                    <div className="w-full text-[18px] leading-[26px] font-[800] mb-4">
                                        <Link href={`/events/event-details/${item.slug.current}`} className='w-full h-full font-[800] font-nun text-[20px] transition-all duration-500 hover:text-yellowColor'>{item.title}</Link>
                                    </div>
                                    <div className="mt-1 my-[-5px] mx-[-10px] w-full flex items-center flex-wrap">
                                        <div className="py-[5px] px-[30px] bg-yellowColor mr-2 rounded-[30px]">
                                            <Link href={`/events/event-details/${item.slug.current}`} className='text-white font-semibold text-[14px]'>{item.category}</Link>
                                        </div>
                                        <div className=" py-[5px] flex items-center text-[12px]">
                                            <BsCalendar className="text-yellowColor"/>
                                            <span className="pl-2 text-[14px] text-black">{new Date(item._createdAt).toLocaleDateString("en-Us", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}</span>
                                        </div>
                                        <div className="w-full my-[20px] text-[0.9rem] ">{item.description}</div>
                                        <div className="flex flex-wrap  w-full">
                                            <div className="flex items-center">
                                                <BsHourglass className="text-yellowColor"/>
                                                {eventsEnded[index] ? (
                                                <span className="font-bold text-[14px] text-primaryText pl-1 text-redDark">Event Ended</span>
                                                ) : (
                                                  <>
                                                  <span className="text-[14px] text-primaryText pl-1">{item.status}</span>
                                                  <Countdown
                                                    targetDate={new Date(item.timeStamp)} // Pass the target date
                                                    onCountdownEnd={() => {
                                                      // Handle countdown end here if needed
                                                    }}
                                                  />                                                 
                                                   </>
                                                  )}
                                            </div>
                                            <div className="flex items-center pl-3 pr-3">
                                                <MdLocationOn className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">{item.location}</span>
                                            </div>
                                            <div className="flex items-center ">
                                                <BiMoney className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">{item.ticketCost}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                {eventdata.map((item, index) =>(
                  <div className="w-full h-full flex flex-col space-y-[20px]" key={index}>
                      <div className="relative text-start w-full font-normal text-[#333] justify-between  flex items-center">
                        <span className='text-[16px] font-semibold text-[#111] text-start w-[120px] '>{new Date(item._createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                        <span className="bg-[#d5d5d5] content-[] block flex-auto h-[1px]  left-0 w-[calc(100%-120px)] "/>
                      </div>
                      <div className="w-full h-full md:flex md:flex-row md:justify-between flex-col ">
                              <div className="w-full md:w-[90px] h-full bg-redDark">
                                <div className="bg-white h-auto overflow-hidden rounded-[2px]  flex flex-col pt-0 text-center w-full">
                                  <span className="bg-[#0300a8] text-[12px] font-semibold leading-[20px] text-white p-[4px] w-full">{new Date(item._createdAt).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                                  <span className="text-[#0300a8] text-[30px] font-semibold leading-[20px] bg-white shadow-main pt-[10px] px-[4px] left-0 pb-[6px] w-full">{new Date(item._createdAt).getDate()}</span>
                                </div>
                              </div>
                              <div className="bg-white overflow-hidden border border-[#e8e7e7] flex items-center transition-all duration-300 h-full w-full lg:w-[calc(100%-120px)] group flex-wrap mb-[40px]">
                              <div className="w-full md:w-[calc(100%-37.5%)] h-full flex items-center flex-grow-0 flex-shrink-0 ">
                                  <div className="w-full h-full flex flex-wrap">
                                    <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[100%] py-[20px] px-[40px]">
                                      <h3 className="text-[22px] font-semibold leading-[30px] mb-[12px] text-darkBlue w-full">
                                        <Link href={`/events/event-details/${item.slug.current}`} className='w-full h-full'>
                                          {item.title}
                                      </Link></h3>
                                      <div className="text-[14px] font-normal leading-[25px] uppercase text-[#4d6995] w-full">
                                      <span className="">{new Date(item.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, 2024 @ 12:00 am</span>
                                      <span className=""> January 30, 2024 @ 11:59 pm</span>
                                      </div>
                                      <p className="text-[18px] text-[#333] leading-[28px] font-normal mt-[20px]">{item.description}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full h-full md:w-[37.5%] flex-grow-0 flex-shrink-0 bg-yellowColor md:full">
                                  <div className='relative  bg-[#e7e6e4] w-full h-full'>
                                    <Image src={urlFor(item.image).url()} 
                                    alt='gallery' 
                                    width={800} height={800}
                                    className='w-full object-cover transform scale-[1.01] transition-all duration-150 h-[300px]'/>
                                    <Link className="absolute top-[50%] left-[50%] inline-block text-[13px] font-bold leading-[20px] uppercase text-darkBlue bg-[#fe0] py-[6px] px-[15px] opacity-0 mt-[20px] transition-all duration-500 transform translate-x-[-50%] translate-y-[50%] group-hover:opacity-[1] group-hover:translate-y-[-60%]" href={`/events/event-details/${item.slug.current}`}>view</Link>
                                  </div>
                                </div>
                              </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default Events