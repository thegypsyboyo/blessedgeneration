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


const Events = () => {


  const sampleData:EventsProps[] = [
    {
      img: "/images/test/gallery-1.jpg",
      title: "Cultural Events coming soon",
      description: "Cultural Events coming soon",
      time: "9.00am",
      location: "Malindi, Kenya",
      slug: "cultural-events-coming-soon",
      timeStamp: "2023-09-01T09:00:00", // Set the event's end time as a string
    },
    // Add more events here...
  ];

  // Use state to store the ended status for each event
  const [eventsEnded, setEventsEnded] = useState<boolean[]>([]);

  useEffect(() => {
    const currentTime = new Date().getTime();

    // Calculate the ended status for each event
    const updatedEventsEnded = sampleData.map((event) =>
      event.timeStamp
        ? new Date(event.timeStamp).getTime() <= currentTime
        : false // Set it to false if timeStamp is undefined
    );

    // Set the updated ended status in state
    setEventsEnded(updatedEventsEnded);
  }, []);


  return (
    <section className="w-full h-full py-[120px] pt-[60px] bg-transparent">
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
                <div className='flex flex-wrap w-full h-full !bg-white '>
                    {sampleData?.map((item, index) => (
                        <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] py-[10px] px-[10px] relative !bg-white rounded-full'>
                            <div className='single w-full h-full relative block group rounded-[15px]'>
                                <div className="w-full relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/team/team-details`} className="w-full h-full">
                                  	<Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-1 h-full md:h-[350px] rounded-t-[20px] lg:h-[300px] w-full '/>
                                  </Link>
                                </div>
                                <div className="w-full bg-white border border-[#eaeaea] py-[25px] px-[20px] flex flex-col items-center justify-center">
                                    <div className="w-full text-[18px] leading-[26px] font-bold mb-4">
                                        <Link href={`/events/event-details/${item.slug}`} className='w-full '>Walking down the village mountain</Link>
                                    </div>
                                    <div className="mt-1 my-[-5px] mx-[-10px] w-full flex items-center flex-wrap">
                                        <div className="py-[5px] px-[30px] bg-yellowColor mr-2 rounded-[30px]">
                                            <Link href={`/events/event-details/${item.slug}`} className='text-white font-semibold text-[12px]'>Funds</Link>
                                        </div>
                                        <div className=" py-[5px] flex items-center text-[12px]">
                                            <BsCalendar className="text-yellowColor"/>
                                            <span className="pl-2 text-[14px] text-black">March 14, 2023</span>
                                        </div>
                                        <div className="w-full my-[20px] text-[0.9rem] ">Join us for an unforgettable trek through the stunning Village Mountain.</div>
                                        <div className="flex flex-wrap  w-full">
                                            <div className="flex items-center">
                                                <BsHourglass className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">Showing</span>
                                            </div>
                                            <div className="flex items-center pl-3 pr-3">
                                                <MdLocationOn className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">Nairobi</span>
                                            </div>
                                            <div className="flex items-center ">
                                                <BiMoney className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">$200</span>
                                            </div>
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