"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { DonationProps } from '@/typings'

const donationData:DonationProps[] = [
    {
        category: "outreach programs",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-3.jpg",
        percentageAchieved: "36%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "medicine",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-4.jpg",
        percentageAchieved: "57%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "food",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-2.jpg",
        percentageAchieved: "70%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "education",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-1.jpg",
        percentageAchieved: "36%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "nyamira children's home",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-3.jpg",
        percentageAchieved: "57%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "outreach programs",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/test/gallery-1.jpg",
        percentageAchieved: "70%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
]
const Projects:React.FC = () => {

    const [causesItem, setCausesItem] = useState(donationData); 
    const [filteredCauesItems, setFilteredCausesItems] = useState(donationData);
    const [activeFilter, setActiveFilter] = useState<string>("All");

    
  useEffect(() => {
    setCausesItem(donationData)
    setFilteredCausesItems(donationData)
  }, [])

  useEffect (() => {
    // filter causes item based on their active filters;
    if (activeFilter === "All") {
      setFilteredCausesItems(causesItem);
    } else {
      const filterData = causesItem.filter((item) => item.category.includes(activeFilter));
      setFilteredCausesItems(filterData);
    }
  }, [activeFilter, causesItem]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  
  return (
    <section className='relative block pt-[60px] mt-[0px] pb-[90px] px-0 w-full'>
        <Layout className='flex flex-col items-center' >
            <div className="relative block -mt-[4px] mb-[46px] text-center">
                <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav">enjoy our work</span>
                <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">our incredible projects </h2>
            </div>
            <nav className=''>
              <div className='flex flex-wrap items-center justify-center space-x-3 mb-[35px] text-center'>
                {['All', "nyamira children's home", 'ruiru highschool BG', 'outreach programs', "malindi children's home"].map((category) => (
                  <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`capitalize font-bold bg-transparent my-2 py-[5px] px-[12px] text-darkBlue outline-none transition-all duration-500 hover:bg-yellowColor hover:text-white ${activeFilter === category ? 'bg-yellowColor text-white' : ''}`} 
                  >
                  {category}
                  </button>
                ))}
              </div>
            </nav>

            <div className="flex flex-wrap w-full !overflow-hidden">

                {filteredCauesItems.map((item, index) => (
                    <div className={` transition-all duration-500 w-full px-[15px] p-[15px] lg:max-w-[33.3333%] md:max-w-[50%] flex-grow-0 flex-shrink-0 group flex items-start`} key={index}>
                        <div className="w-full h-full relative !overflow-hidden block group bg-redDark h-[400px]">
                            <div className='w-full h-full'>
                                <Link href={item.slug} target='_blank' className='w-full cursor-pointer !overflow-hidden opacity-[1] rounded-none transition-all duration-500 mr-0 pt-[300px]'>
                                    <Image src={item.image} alt="image-main" width={400} height={400} className='w-full h-[400px] object-cover rounded-2xl'/>
                                </Link>
                                <div className="flex items-center flex-col  justify-end absolute z-[3] top-0 left-0 w-full h-full p-[25px] text-left transition-all duration-1000 overflow-hidden opacity-0 transform translate-y-[40px] group-hover:visible group-hover:translate-y-[0px]  group-hover:opacity-[1] ">
                                <div className="mb-[11px] transition-all duration-[900]">
                                    <Link href={item.slug} className='text-white bg-yellowColor px-[15px] h-[24px] inline-block leading-[24px] text-[12px] font-semibold uppercase transition-all duration-700 hover:bg-redDark'>{item.category}</Link>
                                </div>
                                <div className="text-center transition-all duration-700 mb-3 pt-2">
                                    <h4 className='text-white font-semibold font-nun text-[24px] leading-[33px]'>
                                    <Link href={item.slug}>{item.title}</Link>
                                    </h4>
                                </div>
                                </div>
                                <div className='absolute z-[1] top-0 left-0 w-full h-full transition-all duration-700 overlay opacity-0 hidden group-hover:opacity-[1] group-hover:block'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    </section>
  )
}

export default Projects