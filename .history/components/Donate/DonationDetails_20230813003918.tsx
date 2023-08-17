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
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[300px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                    <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                        <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <h3 className='text-[22px] leading-[22px] font-[800] uppercase text-darkBlue break-words block -tracking-[0.04] font-nun mb-[10px]'>{item.title}</h3>
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
                              <div className="relative block mt-[32px] ">
                            <h3 className="text-[30px] font-[900] leading-[40px] -tracking-[0.04em] text-primaryDark">Summery</h3>
                            <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p>
                            <ul className="relative block pl-0 list-none ">
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Lorem Ipsum is not simply free text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p>
                        </div>
                            </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                      <div className="w-full xl:max-w-[41.666666%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div className='relative block  bg-[#f4f5f8] p-10 rounded-lg '>
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
                        className='relative block  bg-[#f4f5f8] p-10 rounded-lg'>
                            <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                Latest Posts
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full  pr-[18px] transition-all duration-500 '>
                                        <div className="relative top-[-1] ">
                                            <h3 className='flex flex-col leading-[20px] ml-0 p-0 text-[#454545] font-semibold text-sm'>
                                                <Link href={`/blog/blog-info/${item.slug}`} className=" transition-all duration-500 pl-0 hover:text-orangeDefault py-3 border-b-2  border-[#e7e7e7] ">
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
                                    className={`group text-[#7b8381] text-[16px] relative transition-all duration-500 block bg-none py-[5px]  rounded-[20px] font-[500] hover:bg-white hover:text-primaryDark mt-[10px] ${item.id === activeCategoryId? "bg-white": ""}`}>
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
            </div>
        </Layout>
    </section>
  )
}

export default Blog