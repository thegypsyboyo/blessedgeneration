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
    <section className='w-full h-full block py-[120px] pt-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 w-full px-[15px]">
                    <div className="w-full h-full flex relative z-[1] pl-[60px] pb-[67px] bg-[#f8f5f0] ">
                        <div className="mt-[-70px] mb-[50px] pr-[57px]">
                            <div className="lg:max-w-[480px] ">
                                <Image src={"/images/test/gallery-1.jpg"} alt='' width={400} height={400} className='w-full h-full lg:max-h-[400px] object-cover'/>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow-1 pt-[78px] pb-[80px]">
                            <h2 className="relative z-[1] mb-[25px] text-[36px] leading-[43px] font-semibold">Nick Milton</h2>

                            <div className="mb-1 text-[16px]">
                                <h5 className='mr-[0.05em] font-bold whitespace-nowrap inline-block '>Expertise:</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </Layout>
    </section>
  )
}

export default TeamDetails