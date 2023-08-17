"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComment, faMagnifyingGlass, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'

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

const Blog:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full justify-between">
                {/* <div className="w-full xl:max-w-[58.333333%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                                <div className="relative block rounded-[20px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='rounded-[20px] w-full h-full object-cover'/>
                                    <div className="absolute left-[30px] bg-yellowColor py-[6px] px-[25px] bottom-[30px] z-[2] rounded-[15px]">
                                        <p className='text-[18px] text-primaryDark font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='relative block mt-[22px]'>
                                    <ul className='flex items-center space-x-4'>
                                        <li >
                                            <Link href="" className='text-[14px] text-[#777766] font-[600] transition-all duration-500 hover:text-yellowColor'>
                                                <FontAwesomeIcon icon={faUserCircle} className='text-yellowColor pr-[3px]'/>
                                                {item.author}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='text-[14px] text-[#777766] font-[600] transition-all duration-500 hover:text-yellowColor'>
                                                <FontAwesomeIcon icon={faComment} className='text-yellowColor pr-[3px]'/>
                                                2 comments
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                    <h3>
                                        <Link href={`/blog/blog-info/${item.slug}`} className='text-[30px] leading-[40px] font-[900]  -tracking-[0.04] '><AnimatedText className="text-primaryDark hover:text-primaryBase transition-all duration-500 " text={item.title}/></Link>
                                    </h3>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="m-0 pt-[10px] pb-[11px] text-[16px]">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even slightly
                                    believable. If you are going to use a passage.</motion.p>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="m-0 pt-[10px] pb-[11px] text-[16px]">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even slightly
                                    believable. If you are going to use a passage. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage.</motion.p>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="m-0 pt-[10px] pb-[11px] text-[16px]">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even slightly
                                    believable. If you are going to use a passage.</motion.p>

                                    <motion.blockquote 
                                     variants={footerVariants}
                                     initial = "hidden"
                                     whileInView="show"
                                    className='mt-0 mx-0 mb-[2rem] py-[3rem] px-[4rem] relative text-primaryDark bg-borderColor text-[1.5rem] leading-[30px] rounded-[35px] italic'>
                                      <div className='content-[] w-[50px] h-[50px] bg-contain bg-no-repeat bg-cente absolute top-[27px] left-[25px] z-0 ' style={{backgroundImage: `url(/images/quote-icon.png)`}}/>

                                      <p className='relative z-[2] mb-[1.225rem] font-[700] text-[20px]'>“When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist.”</p>
                                      <p className='relative z-[2]'>
                                        <cite className='mt-[0.5em] text-[0.875rem] uppercase font-[600] not-italic font-nun'>
                                          {item.author}
                                        </cite>
                                      </p>
                                    </motion.blockquote >


                                    <div className="flex items-center justify-between flex-wrap py-[30px] mt-[41px] border-t-[1px] border-borderColor">
                                      <motion.p 
                                       variants={footerVariants}
                                       initial = "hidden"
                                       whileInView="show"
                                      className='mb-[15px]'>
                                        <span className='text-primaryDark text-[20px] mr-[8px] font-[900] -tracking-[0.04em]'>Tags</span>
                                        {tags.map((item, key) => (
                                          <Link href="#" key={item.id * key} className='relative text-primaryDark text-[10px] bg-borderColor inline-block py-[8px] px-[20px] font-[800] uppercase rounded-[17px] transition-all duration-500 hover:border-[1px] hover:border-primaryBase hover:bg-transparent hover:text-primaryBase ml-[8px] mt-[10px]'>
                                            {item.title}
                                          </Link>
                                        ))}
                                      </motion.p>
                                      <motion.div 
                                       variants={footerVariants}
                                       initial = "hidden"
                                       whileInView="show"
                                      className="flex items-center space-x-4">
                                        <Link href="" target='_blank' rel='noreferrer' className='group relative h-[40px] w-[40px] flex items-center justify-center text-center text-primaryDark bg-borderColor text-[15px] rounded-[50%] overflow-hidden transition-all duration-500 z-[1] hover:text-white'>
                                          <div className='absolute content-[] group-hover:opacity-[1] group-hover:scale-y-[1] top-0 left-0 right-0 h-full bg-primaryBase delay-[0.1s] ease-in-out transition-all opacity-[1] transform scale-y-[0] -z-[1] '/>
                                          <BsYoutube/>
                                        </Link>
                                        <Link href="" target='_blank' rel='noreferrer' className='group relative h-[40px] w-[40px] flex items-center justify-center text-center text-primaryDark bg-borderColor text-[15px] rounded-[50%] overflow-hidden transition-all duration-500 z-[1] hover:text-white'>
                                          <div className='absolute content-[] group-hover:opacity-[1] group-hover:scale-y-[1] top-0 left-0 right-0 h-full bg-primaryBase delay-[0.1s] ease-in-out transition-all opacity-[1] transform scale-y-[0] -z-[1] '/>
                                          <BsInstagram/>
                                        </Link>
                                        <Link href="" target='_blank' rel='noreferrer' className='group relative h-[40px] w-[40px] flex items-center justify-center text-center text-primaryDark bg-borderColor text-[15px] rounded-[50%] overflow-hidden transition-all duration-500 z-[1] hover:text-white'>
                                          <div className='absolute content-[] group-hover:opacity-[1] group-hover:scale-y-[1] top-0 left-0 right-0 h-full bg-primaryBase delay-[0.1s] ease-in-out transition-all opacity-[1] transform scale-y-[0] -z-[1] '/>
                                          <BsFacebook/>
                                        </Link>
                                        <Link href="" target='_blank' rel='noreferrer' className='group relative h-[40px] w-[40px] flex items-center justify-center text-center text-primaryDark bg-borderColor text-[15px] rounded-[50%] overflow-hidden transition-all duration-500 z-[1] hover:text-white'>
                                          <div className='absolute content-[] group-hover:opacity-[1] group-hover:scale-y-[1] top-0 left-0 right-0 h-full bg-primaryBase delay-[0.1s] ease-in-out transition-all opacity-[1] transform scale-y-[0] -z-[1] '/>
                                          <BsTwitter/>
                                        </Link>
                                      </motion.div>
                                    </div>

                                    <motion.div 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="flex flex-wrap mb-[15px]">
                                      <div className="mr-[15px] relative flex-grow-0 flex-shrink-0 w-[calc(50%-15px)] transition-all duration-500  py-[30px] border rounded-t-none rounded-br-2xl border-borderColor flex hover:bg-white hover:text-primaryBase bg-borderColor">
                                        <Link href="" className="flex items-center px-[20px]">
                                          <div className="pr-[25px]">
                                            <BsArrowLeft/>
                                          </div>
                                          <div className='flex-1'>
                                            <div className="mb-[0.4rem] text-[0.8125rem] text-[#aaa] font-cav">{item.date}</div>
                                            <div className=" text-primaryDark hover:text-primaryBase transition-all duration-500 font-[800] text-[20px]">{item.title}</div>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="mr-[15px] relative flex-grow-0 flex-shrink-0 w-[calc(50%-15px)] transition-all duration-500 shadow-slate-100 py-[30px] border border-borderColor rounded-t-none rounded-br-2xl flex bg-borderColor hover:bg-white hover:text-primaryBase">
                                        <Link href="" className="flex items-center px-[20px]">
                                          <div className='flex-1'>
                                            <div className="mb-[0.4rem] text-[0.8125rem] text-[#aaa] font-cav">{item.date}</div>
                                            <div className=" text-primaryDark hover:text-primaryBase transition-all duration-500 font-[800] text-[20px] flex justify-end items-end">{item.title}</div>
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
                                      <h3 className="m-0 text-primaryDark text-[30px] mb-[51px] font-[900]  -tracking-[0.04] ">Leave a comment</h3>
                                      <form action="#" className='w-full'>
                                        <div className="row flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="col flex-shrink-0 flex-grow-0 pr-[20px] mt-0 w-full xl:max-w-[50%]">
                                            <div className='relative block mb-[20px] w-full'>
                                              <input type='text ' 
                                              required
                                              placeholder='Your name ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                            </div>
                                          </div>
                                          <div className="col flex-shrink-0 flex-grow-0 pr-[20px] mt-0 w-full xl:max-w-[50%]">
                                            <div className='relative block mb-[20px] w-full'>
                                              <input type='email' 
                                              required
                                              placeholder='Your email ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="h-[150px] relative block mb-[20px] w-full">
                                          <textarea name="message" placeholder="Write a message"  className="text-[14px] text-[#707876] h-[150px] w-full bg-borderColor pt-[15px] pb-[30px] px-[30px] border-none rounded-[20px] outline-none mb-[0px] font-[500]"/>
                                          </div>
                                          <div className="">

                                          </div>
                                          <span typeof='submit' className='border-none relative inline-block outline-none bg-yellowColor text-primaryDark text-[14px] font-[800] uppercase tracking-[0] rounded-[30px] py-[15px] px-[49px] z-[1]'>
                                            Submit Comment
                                          </span>
                                        </div>
                                      </form>
                                    </motion.div>
                                </div>
                            </motion.div>

                            ))}
                        </div>
                    </div>
                </div> */}
                  <div className="w-full xl:max-w-[58.333333%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                                <div className="relative block -[20px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[300px] object-cover'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='relative block mt-[10px]'>
                                    <h3>
                                        <Link href={`/blog/blog-info/${item.slug}`} className='text-[22px] leading-[22px] font-[800] uppercase break-words block -tracking-[0.04] font-nun mb-[10px]'><h3 className='font-[900] font-nun '>{item.title}</h3></Link>
                                    </h3>
                                    <ul className='flex items-center space-x-4'>
                                        <li >
                                            <Link href="" className='text-[14px] text-[#777766] font-[600] transition-all duration-500 hover:text-yellowColor'>
                                                <FontAwesomeIcon icon={faUserCircle} className='text-orangeDefault pr-[3px] text-[20px]'/>
                                                {item.author}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='text-[14px] text-[#777766] font-[600] transition-all duration-500 hover:text-yellowColor'>
                                                <FontAwesomeIcon icon={faComment} className='text-[20px] text-orangeDefault pr-[3px]'/>
                                                2 comments
                                            </Link>
                                        </li>
                                       
                                    </ul>

                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">There are many variations of passages of Lorem
                                            Ipsum available, but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words which don&apos;t look even slightly
                                        believable. If you are going to use a passage.</motion.p>
                                      <motion.div 
                                          variants={footerVariants}
                                          initial = "hidden"
                                          animate="show"
                                          className="flex items-center ">
                                              <AnimatedButton className='' link={`/blog/blog-info/${item.slug}`} text='read more' style='!mt-0 !rounded-none mb-[20px]'/>
                                            </motion.div>

                                </div>
                            </motion.div>

                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] pr-[15px] pl-[15px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div className='relative block '>
                            <form action="#" className='relative'>
                                <input type="text" placeholder='Search here'  className='block border-none outline-none bg-primaryBase text-white text-[16px] font-[400] pl-[50px] h-[50px] w-full pr-[80px] rounded-[20px]'/>
                                <button typeof='submit ' className='bg-transparent text-white text-[22px] absolute top-0 right-[17px] bottom-0 outline-none border-none flex items-center p-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                        </div>
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='cat relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] rounded-[20px]'>
                            <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>People also searched for</h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full pt-[14px] pb-[15px] px-[20px] pr-[18px] transition-all duration-500 rounded-[20px] hover:bg-white'>
                                        <div className="mr-[20px]">
                                            <Image src={item.image} alt='side-image' width={100} height={100} className='w-[120px] h-[70px] rounded-[7px] align-middle object-cover'/>
                                        </div>
                                        <div className="relative top-[-1] ">
                                            <h3 className='flex flex-col text-[18px] leading-[20px] m-0 text-primaryDark'>
                                                <span className="text-[16px] font-[500] lowercase"><FontAwesomeIcon icon={faUserCircle} className='text-yellowColor pr-[3px] text-[14px] lowercase'/>{item.author}</span>
                                                <Link href={`/blog/blog-info/${item.slug}`} className="text-[15px] font-[800] text-primaryDark transition-all duration-500 hover:text-primaryBase">
                                                    {item.title}
                                                </Link>
                                            </h3>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className="relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] rounded-[20px] ">
                        <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>Categories</h3>
                            <ul className='m-0 pl-0 list-none'>
                                {category.map((item, index) => (
                                <li key={(item.id)*index}>
                                    <Link href="#" 
                                    onClick={(e) => handleCategoryClick(e, item.id)}
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px] px-[30px] rounded-[20px] font-[500] hover:bg-white hover:text-primaryDark mt-[10px] ${item.id === activeCategoryId? "bg-white": ""}`}>
                                        {item.title}
                                        <span className={`group-hover:text-primaryBase group-hover:transform group-hover:-translate-y-[50%] group-hover:scale-[1] absolute top-[50%] right-[30px] transform -tranlate-y-[50%] scale-0 text-center flex items-center justify-center ${item.id === activeCategoryId? "transform scale-[1] -translate-y-[50%] text-primaryBase flex items-center justify-center mb": ""}` }>
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
                        className="relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] rounded-[20px] ">
                        <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>Tags</h3>
                        <div className="pl-[30px]">
                            {tags?.map((item, index) => (
                                <Link href="#" key={item.id * index + "wxxx"} className='text-[10px] text-primaryDark transition-all duration-500 bg-white inline-block py-[6px] px-[20px] uppercase rounded-[17px] ml-[5px] font-[800] mb-[10px] hover:bg-borderColor hover:text-primaryBase hover:border hover:border-solid hover:border-primaryBase'>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        </motion.div>

                    </div>
                </div> */}
                  <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] lg:pr-[15px] lg:pl-[15px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div className='relative block '>
                            <form action="#" className='relative'>
                                <input type="text" placeholder='Search & hit enter'  className='block outline-none bg-white text-primaryText border border-solid border-[#f2f2f2] text-[16px] font-[400] pl-[50px] h-[50px] w-full pr-[80px]'/>
                                <button typeof='submit ' className='bg-transparent text-white text-[22px] absolute top-0 right-[17px] bottom-0 outline-none border-none flex items-center p-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-orangeDefault'/>
                                </button>
                            </form>
                        </div>
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='cat relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1]'>
                            <h3 className='text-[23px] font-[900] -tracking-[0.04] text-primaryDark relative mb-4'>
                                Latest Posts
                                <span className="content-[] absolute w-full h-[1px] bg-primaryText left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[100px] h-[1px] bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full pt-[14px] pb-[15px] px-[20px] pr-[18px] transition-all duration-500 hover:bg-white'>
                                        <div className="mr-[20px]">
                                            <Image src={item.image} alt='side-image' width={100} height={100} className='w-[120px] h-[70px] -[7px] align-middle object-cover'/>
                                        </div>
                                        <div className="relative top-[-1] ">
                                            <h3 className='flex flex-col text-[18px] leading-[20px] m-0 text-primaryDark'>
                                                <Link href={`/blog/blog-info/${item.slug}`} className="text-[15px] font-[800] text-primaryDark transition-all duration-500 hover:text-primaryBase">
                                                    {item.title}
                                                </Link>
                                                <span className="text-[16px] font-[500] lowercase"><FontAwesomeIcon icon={faUserCircle} className='text-yellowColor pr-[3px] text-[14px] lowercase'/>{item.author}</span>
                                            </h3>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className="relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1]  ">
                            <h3 className='text-[23px] font-[900] -tracking-[0.04] text-primaryDark relative mb-4'>
                               Categories
                                <span className="content-[] absolute w-full h-[1px] bg-primaryText left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[100px] h-[1px] bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className='m-0 pl-0 list-none'>
                                {category.map((item, index) => (
                                <li key={(item.id)*index}>
                                    <Link href="#" 
                                    onClick={(e) => handleCategoryClick(e, item.id)}
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px] px-[30px] -[20px] font-[500] hover:bg-white hover:text-primaryDark mt-[10px] ${item.id === activeCategoryId? "bg-white": ""}`}>
                                        {item.title}
                                        <span className={`group-hover:text-primaryBase group-hover:transform group-hover:-translate-y-[50%] group-hover:scale-[1] absolute top-[50%] right-[30px] transform -tranlate-y-[50%] scale-0 text-center flex items-center justify-center ${item.id === activeCategoryId? "transform scale-[1] -translate-y-[50%] text-primaryBase flex items-center justify-center mb": ""}` }>
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
                        className="relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] -[20px] ">
                        <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>Tags</h3>
                        <div className="">
                            {tags?.map((item, index) => (
                                <Link href="#" key={item.id * index + "wxxx"} className='text-[10px] text-primaryDark transition-all duration-500 bg-white inline-block py-[12px] px-[30px] uppercase -[17px] ml-[5px] font-[800] mb-[10px] hover:text-white hover:bg-orangeDefault'>
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
  )
}

export default Blog