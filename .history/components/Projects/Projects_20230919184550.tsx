"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { DonationProps, OurProjectProps, ProjectProps } from '@/typings'
import urlFor from '@/lib/urlFor'

type Props = {
    project:ProjectProps[]
}
const Projects = ({project}:Props) => {

    const [causesItem, setCausesItem] = useState(project); 
    const [filteredCauesItems, setFilteredCausesItems] = useState(project);
    const [activeFilter, setActiveFilter] = useState<string>("All");

    
  useEffect(() => {
    setCausesItem(project)
    setFilteredCausesItems(project)
  }, [project])

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
    console.log("Active filter clicked:", category);
    setActiveFilter(category);
};
  
  return (
    <section className='relative block pt-[60px] mt-[0px] pb-[90px] px-0 w-full'>
        <Layout className='flex flex-col items-center' >
            <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
                <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">enjoy our work</span>
                <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">our incredible projects </h2>
                <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">Gardenias’ mission is to provide our customers with responsive service and unsurpassed quality at an affordable price.</p>
            </div>
            <nav className=''>
              <div className='flex flex-wrap items-center justify-center space-x-3 mb-[35px] text-center'>
                {['All', "Bg Ruiru", 'Bg Malindi', 'Outreach ', "Bg Nyamira", "LightHouse Project"].map((category) => (
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

            <div className="flex flex-wrap w-full overflow-hidden">

                {filteredCauesItems.map((item, index) => (
                    <div className={` transition-all duration-500 w-full px-[15px] p-[15px] lg:max-w-[33.3333%] md:max-w-[50%] flex-grow-0 flex-shrink-0 group flex items-start`} key={index}>
                        <div className="w-full relative overflow-hidden block group bg-transparent h-[400px]">
                            <div className={`w-full h-full transform delay-500 transition-all duration-500 ease-in-out translate-y-0`}>
                                <Link href={`/projects/project-details/${item.slug.current}`} target='_blank' className='w-full cursor-pointer !overflow-hidden opacity-[1] rounded-none transition-all duration-500 mr-0 pt-[300px]'>
                                    <Image src={urlFor(item.image).url()} alt="image-main" width={800} height={800} className='w-full h-[400px] object-cover '/>
                                </Link>
                                <div className="flex items-center flex-col  justify-end absolute z-[3] top-0 left-0 w-full h-full p-[25px] text-left transition-all duration-1000 overflow-hidden opacity-0 transform translate-y-[40px] group-hover:visible group-hover:translate-y-[0px]  group-hover:opacity-[1] ">
                                <div className="mb-[11px] transition-all duration-[900]">
                                    {item.tags?.map((tag, index) => (
                                        <Link href={`/projects/project-details/${item.slug.current}`} className='text-white bg-yellowColor px-[15px] h-[24px] inline-block leading-[24px] text-[12px] font-semibold uppercase transition-all duration-700 hover:bg-redDark m-1' key={index}>{tag.title}</Link>
                                    ))}
                                </div>
                                <div className="text-center transition-all duration-700 mb-3 pt-2">
                                    <h4 className='text-white font-semibold font-nun text-[24px] leading-[33px]'>
                                    <Link href={`/projects/project-details/${item.slug.current}`}>{item.title}</Link>
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