"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComment, faMagnifyingGlass, faQuoteRightAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import AnimatedIcon from '@/constants/AnimatedIcon'

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

const TeamDetails:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='w-full h-full block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full h-full">
                <div className="w-full xl:max-w-[66.66666%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0 h-full">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <div 
                            className="relative block" key={index}>
                            <div className="relative block -[20px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[300px] object-cover rounded-tl-lg lg:max-h-[450px] rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                            </div>
                            <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <h3 className='text-[22px] leading-[22px] font-[800] text-darkBlue uppercase break-words block -tracking-[0.04] font-nun mb-[10px]'>{item.title}</h3>
                                    <div className="mb-4 overflow-hidden block relative  ">
                                        <ul className='m-0 pl-0 list-none flex'>
                                            <li className="relative z-[1] text-xs uppercase pr-14 float-left flex items-center text-primaryText">
                                                <Image src="/images/person.png" alt='person-icon' width={80} height={80} className='h-9 w-9 rounded-full mr-3 object-contain bg-[#e9ecef] p-2'/>
                                                <span className="mr-2">by</span>
                                                {item.author}

                                                <span className='absolute right-4 top-1/2 content-[] h-0.5 w-8 bg-[#dddddd] -mt-0.5 '/>
                                            </li>
                                            <li className="relative z-[1] text-xs font-bold uppercase pr-14  flex items-center text-primaryText ">
                                                <span className="mr-2 font-semibold">In</span>
                                                <Link href="" className='mr-2'>IT Solutions</Link>
                                                <Link href="" className='ml-2'>Security</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">There are many variations of passages of Lorem
                                      Ipsum available, but the majority have suffered alteration in some form, by
                                      injected humour, or randomised words which don&apos;t look even slightly
                                      believable. If you are going to use a passage.
                                    </motion.p>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">There are many variations of passages of Lorem
                                      Ipsum available, but the majority have suffered alteration in some form, by
                                      injected humour, or randomised words which don&apos;t look even slightly
                                      believable. If you are going to use a passage.
                                    </motion.p>
                            </div>

                            <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-darkBlue font-semibold bg-[#ecf6fa] p-[50px]">
                              <span className='absolute content-[] bg-orangeDefault left-0 top-[5%] h-[90%] w-[3px]'/>
                              <p className='m-0 relative z-[1] text-4 italic font-semibold'>Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity amiable pleased.</p>
                              <span className='absolute right-[50px] content-[] text-[#666666] bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                                <FontAwesomeIcon icon={faQuoteRightAlt}/>
                              </span>
                            </blockquote>
                            <h4 className="font-bold text-[22px] text-darkBlue mt-6">Conduct replied off whether arrived adapted</h4>

                            <ul className="pl-[20px] mb-[1rem] list-disc space-y-4">
                              <li className="text-darkBlue mt-2">Pretty merits waited six</li>
                              <li className="text-darkBlue">General few civilly amiable pleased account carried.</li>
                              <li className="text-darkBlue">Continue indulged speaking</li>
                              <li className="text-darkBlue">Narrow formal length my highly</li>
                            </ul>
                            <p className='text-primaryText text-4 leading-[30px]'>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>

                            <div className="flex items-center justify-between flex-wrap py-[30px] mt-[50px] border-t-[1px] border-borderColor">
                                 <motion.p 
                                       variants={footerVariants}
                                       initial = "hidden"
                                       whileInView="show"
                                      className='mb-[15px]'>
                                        {tags.map((item, key) => (
                                          <Link href="#" key={item.id * key} className='relative text-primaryDark text-[10px] bg-[#f7f7f7] mr-[3px] mb-[5px] inline-block py-[10px] px-[15px] font-[800] uppercase transition-all duration-500   hover:bg-primaryBase ml-[8px] mt-[10px] hover:text-white'>
                                            {item.title}
                                          </Link>
                                        ))}
                                      </motion.p>
                                      <motion.div 
                                       variants={footerVariants}
                                       initial = "hidden"
                                       whileInView="show"
                                      className="flex items-center space-x-4">
                                        <AnimatedIcon href='' icon={<BsInstagram/>} />
                                        <AnimatedIcon href='' icon={<BsTwitter/>} />
                                        <AnimatedIcon href='' icon={<BsFacebook/>} />
                                      </motion.div>
                            </div>

                            <motion.div 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="flex flex-wrap mb-[15px]">
                                      <div className="mr-[15px] relative flex-grow-0 flex-shrink-0 w-[calc(50%-15px)] transition-all duration-500  py-[30px] border rounded-t-none rounded-br-2xl border-borderColor flex hover:bg-orangeDefault vhover:text-white  bg-borderColor group">
                                        <Link href="" className="flex items-center px-[20px]">
                                          <div className="pr-[25px]">
                                            <BsArrowLeft/>
                                          </div>
                                          <div className='flex-1'>
                                            <div className="mb-[0.4rem] text-[0.8125rem] text-[#aaa] font-cav">{item.date}</div>
                                            <div className=" text-primaryDark group-hover:text-white transition-all duration-500 font-[800] text-[20px]">{item.title}</div>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="mr-[15px] relative flex-grow-0 flex-shrink-0 w-[calc(50%-15px)] transition-all duration-500 shadow-slate-100 py-[30px] border border-borderColor rounded-t-none rounded-br-2xl flex hover:bg-orangeDefault hover:text-white  bg-borderColor group">
                                        <Link href="" className="flex items-center px-[20px]">
                                          <div className='flex-1'>
                                            <div className="mb-[0.4rem] text-[0.8125rem] text-[#aaa] font-cav">{item.date}</div>
                                            <div className=" text-primaryDark group-hover:text-white transition-all duration-500 font-[800] text-[20px] flex justify-end items-end">{item.title}</div>
                                          </div>
                                          <div className="pr-[25px]">
                                            <BsArrowRight/>
                                          </div>
                                        </Link>
                                      </div>
                            </motion.div>

                            <motion.div 
                                     variants={footerVariants}
                                     initial = "hidden"
                                     whileInView="show"
                                    className="mt-[15px]">
                                      <h3 className="m-0 text-primaryDark text-[30px] mb-[21px] mt-[30px] font-[700]  -tracking-[0.04] ">Leave a comment</h3>
                                      <form action="#" className='w-full'>
                                        <div className="row flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="col flex-shrink-0 flex-grow-0 lg:pr-[20px] mt-0 w-full xl:max-w-[50%]">
                                            <div className='relative block mb-[20px] w-full'>
                                              <input type='text ' 
                                              required
                                              placeholder='Your name ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                            </div>
                                          </div>
                                          <div className="col flex-shrink-0 flex-grow-0 pr-[0px] mt-0 w-full xl:max-w-[50%]">
                                            <div className='relative block mb-[20px] w-full'>
                                              <input type='email' 
                                              required
                                              placeholder='Your email ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="h-[150px] relative block mb-[20px] w-full">
                                          <textarea name="message" placeholder="Write your comment"  className="text-[14px] text-[#707876] h-[150px] w-full bg-borderColor pt-[15px] pb-[30px] px-[30px] border-none rounded-[20px] outline-none mb-[0px] font-[500]"/>
                                          </div>
                                          <div className="">

                                          </div>
                                          <AnimatedButton className='' link='' text='Submit comment' style='!mt-0'/>
                                        </div>
                                      </form>
                            </motion.div>
                            </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default TeamDetails