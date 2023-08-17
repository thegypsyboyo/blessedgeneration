"use client"

import React, {useState} from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComment, faMagnifyingGlass, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import { BsArrowRight } from 'react-icons/bs'

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
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
        image: "/images/slider/slide-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
    },
    {
        author: "LewMeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
        image: "/images/slider/slide-2.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?"
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
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full object-cover'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='relative block mt-[10px]'>
                                    <h3>
                                        <Link href={`/blog/blog-info/${item.slug}`} className='text-[22px] leading-[22px] font-[800] uppercase break-words block -tracking-[0.04] font-nun mb-[10px]'><h3 className='font-[900] font-cav '>{item.title}</h3></Link>
                                    </h3>
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

                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    whileInView="show"
                                    className="m-0 pt-[10px] pb-[11px] text-[16px] text-primaryText">There are many variations of passages of Lorem
                                            Ipsum available, but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words which don&apos;t look even slightly
                                            believable. If you are going to use a passage.</motion.p>
                                            <motion.div 
                                              variants={footerVariants}
                                              initial = "hidden"
                                              whileInView="show"
                                            className="flex items-center ">
                                                 <Link href={`/blog/blog-info/${item.slug}`} className='text-[14px] font-[700] flex items-center justify-center transition-all duration-500 hover:text-primaryBase'>
                                                    Read more 
                                                    <span className='text-[12px] ml-[8px] flex items-center justify-center'><BsArrowRight className="text-[18px]"/></span>
                                                </Link>
                                            </motion.div>

                                </div>
                            </motion.div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] pr-[15px] pl-[15px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div className='relative block '>
                            <form action="#" className='relative'>
                                <input type="text" placeholder='Search & hit enter'  className='block border-none outline-none bg-primaryBase text-white text-[16px] font-[400] pl-[50px] h-[50px] w-full pr-[80px] -[20px]'/>
                                <button typeof='submit ' className='bg-transparent text-white text-[22px] absolute top-0 right-[17px] bottom-0 outline-none border-none flex items-center p-0'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                        </div>
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='cat relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] -[20px]'>
                            <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>Latest Posts</h3>
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
                        className="relative block bg-borderColor pt-[46px] pb-[36px] px-[20px] overflow-hidden z-[1] -[20px] ">
                        <h3 className='text-[20px] mb-[10px] font-[900] -tracking-[0.04] text-primaryDark pl-[30px]'>Categories</h3>
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
                        <div className="pl-[30px]">
                            {tags?.map((item, index) => (
                                <Link href="#" key={item.id * index + "wxxx"} className='text-[10px] text-primaryDark transition-all duration-500 bg-white inline-block py-[6px] px-[20px] uppercase -[17px] ml-[5px] font-[800] mb-[10px] hover:bg-borderColor hover:text-primaryBase hover:border hover:border-solid hover:border-primaryBase'>
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