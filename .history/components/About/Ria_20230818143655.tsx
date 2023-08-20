"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCheck, faComment, faDonate, faMagnifyingGlass, faQuoteRightAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
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
interface Popular {
    title: string,
    link: string,
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

const popular:Popular[] = [
    {
        link: "",
        title: "Patner organizations"
    },
    {
        link: "",
        title: "Blessed Generation Kenya"
    },
    {
        link: "",
        title: "Blessed Generation Ambassadors"
    },
    {
        link: "",
        title: "Blessed Generation Team"
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
                                {popular.map((item, index) => (
                                    <li key={index} className='flex items-center w-full mt-3  p-[20px] bg-orangeDefault  hover:bg-white hover:shadow-custom group transition-all duration-500 '>
                                        <div className="relative ">
                                            <Link href={`/blog/blog-info`} className="text-white  transition-all duration-500 pl-0 group-hover:text-darkBlue py-3  ">
                                                {item.title}
                                            </Link>

                                        </div>
                                    </li>
                                ))}
                            </ul>
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
                              <div className="relative block -[20px] lg:h-[350px]">
                                    <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[300px] lg:max-h-[350px] object-cover'/>
                                </div>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <h3 className='text-[22px] leading-[22px] font-[800] uppercase text-darkBlue break-words block -tracking-[0.04] font-nun mb-[10px]'>About Ria Fennema & Festas</h3>
                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria Fennema, originally a teacher, settled permanently in Kenya in 2001 from Hurdegaryp in Friesland to take over an orphanage in Ruiru, near Nairobi. In 2004 Ria&apos;s husband Fester Medendorp came to Kenya. Together they further expanded the help to underprivileged children. Blessed Generation&apos;s tools are now running at 3 locations in Kenya. Ria and Fester have two children. 
                                    </motion.p>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria and Fester, together with more than a hundred Kenyan employees, are committed to giving the children a chance in life again. Fester and Ria do this work unpaid. The Blessed Generation Netherlands Foundation takes care of the living expenses of Ria and her family, so that they can continue their good work.
                                    </motion.p>
                                    <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-darkBlue font-semibold bg-[#ecf6fa] p-[50px]">
                                        <span className='absolute content-[] bg-orangeDefault left-0 top-[5%] h-[90%] w-[3px]'/>
                                        <p className='m-0 relative z-[1] text-4 italic font-semibold'>Having money doesn&apos;t make you happy.Someone else with that will help</p>
                                        <span className='absolute right-[50px] content-[] text-[#666666] bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                                            <FontAwesomeIcon icon={faQuoteRightAlt}/>
                                        </span>
                                    </blockquote>
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