"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { DonationProps } from '@/typings'

const donationData:DonationProps[] = [
    {
        category: "education",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-3.jpg",
        percentageAchieved: "36%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "medicine",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-4.jpg",
        percentageAchieved: "57%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "food",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-2.jpg",
        percentageAchieved: "70%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "education",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-3.jpg",
        percentageAchieved: "36%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "medicine",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-4.jpg",
        percentageAchieved: "57%",
        goalAmount: "30,000",
        raisedAmount: "25,270",
        title: "Let’s education for children get good life",
        slug: "lets-education-for-children-get-good-life"
    },
    {
        category: "food",
        description: "There are many of lorem, but majori have suffered alteration in some form.",
        image: "/images/blog/img-2.jpg",
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
              <div className='flex flex-wrap space-x-3 mb-[35px] text-center'>
                {['All', 'education', 'medicine', 'water', 'food'].map((category) => (
                  <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`capitalize font-bold bg-transparent py-[5px] px-[12px] text-darkBlue outline-none transition-all duration-500 hover:bg-yellowColor hover:text-white ${activeFilter === category ? 'bg-yellowColor text-white' : ''}`} 
                  >
                  {category}
                  </button>
                ))}
              </div>
            </nav>

            <div className="flex flex-wrap w-full">

                {filteredCauesItems.map((item, index) => (
                    <div className="w-full px-[15px] m-[15px] lg:max-w-[33.3333%] md:max-w-[50%]
                    flex-grow-0 flex-shrink-0 group flex items-start " key={index}>
                        {/* <div className="relative mb-[30px] flex flex-col items-center justify-items-center ">
                            <div className="relative block overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full object-cover transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       {item.category}
                                    </p>
                                </div>
                            </div>
                            <div className="relative block bg-white shadow-custom border-solid border-borderColor pt-[22px] pb-[30px] px-[30px] border-t-0">
                                <h3 className="text-[26px] leading-[26px] font-[800] -tracking-[0.04em] ">
                                    <Link href={`/donate/donation-info/${item.slug}`} className='text-redLight transition-all duration-500 hover:text-darkBlue'>{item.title}</Link>
                                </h3>
                                <p className="pt-[11px] pb-[21px] text-primaryText">{item.description}</p>
                                <div className="relative block w-full pt-[49px] px-[29px] pb-[20px] bg-borderColor rounded-[20px] border-solid border-borderColor z-[1]">
                                    <div className="relative w-full h-[7%] bg-white rounded-[5px] mb-[3px]">
                                        <div className="relative block h-[7px] rounded-[5px] bg-redLight transition-all duration-[1500ms] " style={{width: item.percentageAchieved}}>
                                            <div className="absolute right-0 bottom-[11px] text-redLight leading-[20px] text-[12px] text-center font-[700] transition-all duration-500 ease-in">
                                                <div className='absolute left-[12px] top-[24px] h-[6px] w-[6px] bg-white rounded-[50%] z-[1] content-[]'/>
                                               {item.percentageAchieved}
                                                <div className='content-[]  absolute left-[5px] top-[17px] h-[20px] w-[20px] bg-redLight rounded-[50%]'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between items-center">
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.raisedAmount}</span>
                                            Raised
                                        </p>
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.goalAmount}</span>
                                            Goal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            <div className="w-full h-full relative overflow-hidden block group">
                            <Link href={item.slug} target='_blank' className='w-full cursor-pointer overflow-hidden opacity-[1] rounded-none transition-all duration-500 mr-0'>
                                <Image src={item.image} alt="image-main" width={400} height={400} className='w-full h-[300px] object-cover'/>
                            </Link>
                            <div className="flex items-center flex-col  justify-end absolute z-[3] top-0 left-0 w-full h-full p-[25px] text-left transition-all duration-1000 overflow-hidden opacity-0 transform translate-y-[150px] group-hover:visible group-hover:translate-y-[0px]  group-hover:opacity-[1] ">
                            <div className="mb-[11px] transition-all duration-[900]">
                                <Link href={item.slug} className='text-white bg-yellowColor px-[15px] h-[24px] inline-block leading-[24px] text-[12px] font-semibold uppercase transition-all duration-700 hover:bg-redDark'>Child Care</Link>
                            </div>
                            <div className="text-center transition-all duration-700 mb-3 pt-2">
                                <h4 className='text-white font-semibold font-nun text-[24px] leading-[33px] hover:text-yellowColor transition-all duration-700'>
                                <Link href={item.slug}>How can supporting benefit a child.</Link>
                                </h4>
                            </div>
                            </div>
                            <div className='absolute z-[1] top-0 left-0 w-full h-full transition-all duration-700 overlay opacity-0 hidden group-hover:opacity-[1] group-hover:block'/>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    </section>
  )
}

export default Projects