"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCheck, faComment, faDonate, faMagnifyingGlass, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
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

const Ria:React.FC = () => {
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
                <div className="w-full xl:max-w-[29.972%] lg:max-w-[29.972%] mb-[30px] lg:pr-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='relative block'>
                            <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                Popular Interests
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full mt-3  p-[20px] bg-orangeDefault  transition-all duration-500 '>
                                        <div className="relative ">
                                            <Link href={`/blog/blog-info/${item.slug}`} className=" transition-all duration-500 pl-0 hover:text-orangeDefault py-3  ">
                                                {item.title}
                                            </Link>

                                        </div>
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
                                Category
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className='m-0 pl-0 list-none'>
                                {category.map((item, index) => (
                                <li key={(item.id)*index}>
                                    <Link href="#" 
                                    onClick={(e) => handleCategoryClick(e, item.id)}
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px] font-[500]  hover:text-primaryDark mt-[10px] hover:border-b-orangeDefault border-b border-b-[#e7e7e7] ${item.id === activeCategoryId? "border-b-orangeDefault text-darkBlue": ""}`}>
                                        {item.title}
                                        <span className={`group-hover:text-orangeDefault group-hover:transform group-hover:-translate-y-[50%] group-hover:scale-[1] absolute top-[50%] right-[30px] transform -tranlate-y-[50%] scale-0 text-center flex items-center justify-center ${item.id === activeCategoryId? "transform scale-[1] -translate-y-[50%] text-orangeDefault flex items-center justify-center mb": ""}` }>
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
                            {tags?.map((item, index) => (
                                <Link href="#" key={item.id * index + "wxxx"} className='text-[10px] text-primaryDark transition-all duration-500 bg-white inline-block py-[12px] px-[30px] uppercase rounded-[17px] ml-[5px] font-[800] mb-[10px] hover:text-white hover:bg-orangeDefault '>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        </motion.div>
                    </div>
                </div>
                  <div className="w-full xl:max-w-[69.693%] lg:max-w-[69.693%] lg:pl-[35px] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                              <div className="relative block -[20px] lg:h-[450px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[300px] lg:max-h-[450px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <h3 className='text-[22px] leading-[22px] font-[800] uppercase text-darkBlue break-words block -tracking-[0.04] font-nun mb-[10px]'>{item.title}</h3>
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
                            </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Ria