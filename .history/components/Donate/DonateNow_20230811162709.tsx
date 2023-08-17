"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'

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
                    <div className="relative block -mt-2">
                        <div className="relative block mt-12 mb-12">
                            <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter">Enter your donation</h3>
                            <div className="relative block ">
                                <div className="absolute w-auto left-5 top-0 ">
                                    <select name="" id="" className='bg-primaryBase h-[130px] w-[120px] outline-none rounded-3xl border-0 p-0 m-0 text-white text-5xl font-extrabold'>
                                        <option value="">Ksh.</option>
                                        <option value="">€</option>
                                        <option value="">$</option>
                                    </select>
                                </div>
                                <input type='text ' name='donation-money' placeholder=".00"  className='h-[130px] w-full border-none outline-none bg-primaryBase rounded-3xl pl-[150px] pr-[50px] text-5xl text-right font-extrabold tracking-tighter text-white z-[1]' />
                            </div>
                        </div>
                        <div className="relative block">
                            <h3 className="lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9 text-lg mt-7 mb-6 font-extrabold tracking-tighter">Personal Information</h3>
                            <form action="#" className='relative block w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text"
                                     required
                                     placeholder="First name" name="firstName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" required placeholder="Last name" name="lastName" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="email"
                                     required
                                     placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" required placeholder="Your Phone" name="phone" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                  <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] lg:pr-[15px] lg:pl-[15px] flex-shrink-0">
                
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Blog