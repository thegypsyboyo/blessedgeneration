"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faArrowRight, faComment, faMagnifyingGlass, faMailBulk, faPerson, faPhoneAlt, faQuoteRightAlt, faSearch, faTag, faTicket, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsCalendar2, BsCheck2Circle, BsFacebook, BsHeart, BsInstagram, BsLinkedin, BsPin, BsPinMap, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import AnimatedIcon from '@/constants/AnimatedIcon'
import SocialShareButton from '@/constants/SocialShareButton'
import Countdown from './CountDown'
import { BiSolidLockAlt } from 'react-icons/bi'

interface BlopProps {
    image: string,
    author: string,
    title: string,
    decription: string,
    slug: string,
    date: string,
}
interface Cat {
    title: string,
    id: number,
}
interface Tag {
    title: string,
    id: number,
}
const data:BlopProps[] = [
    {
        author: "Lewmeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage. ",
        image: "/images/slider/slide-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
    },
]
const category:Cat[] = [
    {
        id: 1,
        title: "Donations",
    },
    {
        id: 2,
        title: "Charity",
    },
    {
        id: 3,
        title: "Food & Water",
    },
    {
        id: 4,
        title: "Kids Education",
    },
]
const tags:Tag[] = [
    {
        title: "kids",
        id: 1,
    },
    {
        title: "donation",
        id: 2,
    },
    {
        title: "water",
        id: 6,
    },
    {
        title: "charity",
        id: 7,
    },
    {
        title: "fundraising",
        id: 8,
    },

]

const EventDetails:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    const targetDate = new Date('2023-09-01T00:00:00');

  return (
    <section className='block py-[120px] relative w-full h-full'>
        <Layout>
            <div className="flex flex-wrap w-full">
                <div className="w-full xl:max-w-[66.66666%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <div 
                            className="relative block" key={index}>
                            <div className="relative block -[20px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full md:h-[470px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                            </div>
                            <div className="p-[30px] w-full bg-white bg-shadow">
                            <p 
                              className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">But Drama Games is more than just a theater workshop – it’s also a chance to connect with others who share your passion for the performing arts. Throughout the event, you’ll have the opportunity to meet and collaborate with other actors, directors, and theater enthusiasts, sharing ideas, feedback, and support. So whether you’re looking to brush up on your acting skills, explore new creative avenues, or just have some fun and make new friends, Drama Games is the perfect event for you. With its engaging games, supportive community, and welcoming atmosphere, it’s sure to be an experience you’ll never forget. Don’t miss out – sign up today and get ready to unleash your inner performer!
                            </p>
                            <p 
                            className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Looking for a fun and engaging way to explore your creativity and express yourself? Look no further than Drama Games! This exciting event offers a unique opportunity to play, learn, and connect with others through a wide range of fun and challenging improvisation and theater games. At Drama Games, you’ll have the chance to explore a variety of different games and exercises, all designed to help you develop your acting skills, build confidence, and tap into your imagination. Whether you’re a seasoned performer or a complete beginner, you’ll find plenty of games and activities to challenge and inspire you
                            </p>
                            <div className="w-full block">
                              <ul className="flex flex-wrap items-center">
                                {tags.map((item, index) => (
                                  <li className="p-1" key={index}>
                                    <Link href={""} className='bg-[#eaeaea] block text-primaryText px-[11px] py-[5px] font-medium text-[0.7rem]'>{item.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col flex-wrap mt-4">
                              <p className="uppercase text-[16px] text-dark font-bold mb-3">share this</p>
                              <div className="flex items-center w-full space-x-2">
                                <SocialShareButton icon={<BsFacebook/>} platform='facebook' url='' title=''/>
                                <SocialShareButton icon={<BsInstagram/>} platform='facebook' url='' title='' />
                                <SocialShareButton icon={<BsTwitter/>} platform='facebook' url='' title='' />
                                <SocialShareButton icon={<BsLinkedin/>} platform='facebook' url='' title='' />
                              </div>
                            </div>
                            </div>
                            <div 
                              className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full mt-11'>
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                  <span className='mr-[10px]'>Event Details</span>
                                  <div className="mr-0 flex items-center">
                                    <Link href={""} className='border border-[#eaeaea] text-primaryText uppercase text-[0.92em] font-medium m-1 rounded-sm py-1 px-[11px] '>
                                      <span className="flex items-center">
                                      <BsHeart className="mr-3"/>
                                      8
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full xl:max-w-[33.333333%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div 
                        className='relative block  bg-white shadow-custom p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Event Details</span>
                            <div className="mr-0 flex items-center">
                              <Link href={""} className='border border-[#eaeaea] text-primaryText uppercase text-[0.92em] font-medium m-1 rounded-sm py-1 px-[11px] '>
                                <span className="flex items-center">
                                <BsHeart className="mr-3"/>
                                8
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="">
                            <div className="mt-[-30px] mx-[-30px] py-[25px] text-center justify-center items-center px-[30px] bg-yellowColor">
                              <Countdown targetDate={targetDate}/>
                            </div>
                            <ul className="mt-5 w-full h-full">
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <BsCalendar2 className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Start Date</h2>
                                    <span className="text-primaryText text-[0.9rem]">October 10, 2023 11:00 am</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <BsCalendar2 className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">End date</h2>
                                    <span className="text-primaryText text-[0.9rem]">October 10, 2023 11:00 am</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <BsCheck2Circle className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Status</h2>
                                    <span className="text-primaryText text-[0.9rem]">Upcoming</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <BsPin className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Location</h2>
                                    <span className="text-primaryText text-[0.9rem]">Malindi, Kenya</span>
                                  </div>
                                </li>                                
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <BsPinMap className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Venue</h2>
                                    <span className="text-primaryText text-[0.9rem]"> Blessed Generation, Malindi Children&apos;s Home</span>
                                  </div>
                                </li>                                
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faTag} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Cost</h2>
                                    <span className="text-primaryText text-[0.9rem]">$40</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faPerson} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Organizer</h2>
                                    <span className="text-primaryText text-[0.9rem]">Okello Wykliffee</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faAddressCard} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Address</h2>
                                    <span className="text-primaryText text-[0.9rem]">Malindi, Kenya 33456 Children Center</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Phone</h2>
                                    <span className="text-primaryText text-[0.9rem]">(+33) 456-345-675</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faMailBulk} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Email</h2>
                                    <span className="text-primaryText text-[0.9rem]">info@blessedgeneratio.com</span>
                                  </div>
                                </li>
                                <li className='flex flex-start mb-[25px] border-b border-b-[#eee] pb-[25px] '>
                                  <div className="text-[1.943rem] leading-[1.93rem] pr-[25px] w-[60px]">
                                    <FontAwesomeIcon icon={faTicket} className="text-[#ffbb00]"/>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="uppercase mb-1 font-semibold text-[0.7rem] tracking-[1px]">Remaining Tickets</h2>
                                    <span className="text-primaryText text-[0.9rem]">455</span>
                                  </div>
                                </li>

                            </ul>
                          </div>
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Event Details</span>
                            <div className="mr-0 flex items-center">
                              <Link href={""} className='border border-[#eaeaea] text-primaryText uppercase text-[0.92em] font-medium m-1 rounded-sm py-1 px-[11px] '>
                                <span className="flex items-center">
                                <BsHeart className="mr-3"/>
                                8
                                </span>
                              </Link>
                            </div>
                          </div>
                            <ul className='m-0 pl-0 list-none'>
                                {category.map((item, index) => (
                                <li key={(item.id)*index}>
                                    <Link href="#" 
                                    onClick={(e) => handleCategoryClick(e, item.id)}
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px] px-[30px] rounded-[20px] font-[500] hover:bg-white hover:text-primaryDark mt-[10px] ${item.id === activeCategoryId? "bg-white": ""}`}>
                                        {item.title}
                                        <span className={`group-hover:text-orangeDefault group-hover:transform group-hover:-translate-y-[50%] group-hover:scale-[1] absolute top-[50%] right-[30px] transform -tranlate-y-[50%] scale-0 text-center flex items-center justify-center ${item.id === activeCategoryId? "transform scale-[1] -translate-y-[50%] text-orangeDefault flex items-center justify-center mb": ""}` }>
                                            <FontAwesomeIcon icon={faArrowRight} className="h-[10px] w-[10px]"/>
                                        </span>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default EventDetails