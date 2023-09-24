import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import AnimatedIcon from '@/constants/AnimatedIcon'
import { BsFacebook } from 'react-icons/bs'
import { TripProps } from '@/typings'


const TripsData:TripProps[] = [
    {
        title: "A WEEKEND GUIDE TO AUSTRIA",
        category: "tours",
        image: "/images/test/gallery-2.jpg",
        slug: "A-WEEKEND-GUIDE-TO-AUSTRIA",
        date: "8/24/2023"
    },
    {
        title: "A WEEKEND GUIDE TO AUSTRIA",
        category: "tours",
        image: "/images/test/gallery-3.jpg",
        slug: "A-WEEKEND-GUIDE-TO-AUSTRIA",
        date: "8/24/2023"
    },
    {
        title: "A WEEKEND GUIDE TO AUSTRIA",
        category: "tours",
        image: "/images/test/gallery-4.jpg",
        slug: "A-WEEKEND-GUIDE-TO-AUSTRIA",
        date: "8/24/2023"
    },
    {
        title: "A WEEKEND GUIDE TO AUSTRIA",
        category: "tours",
        image: "/images/test/gallery-1.jpg",
        slug: "A-WEEKEND-GUIDE-TO-AUSTRIA",
        date: "8/24/2023"
    },

]
const Trip = () => {

  return (
    <section className='w-full h-full py-[120px]'>
        <Layout >
            <div className="w-full h-full flex justify-between flex-wrap items-center">
                <div className="flex-grow-0 flex-shrink-0 w-full mb-7 lg:max-w-[33.3333%] h-full lg:pr-[15px] items-center justify-center">
                    <div className="w-full h-full">
                        <h1 className='text-[30px] text-dark font-man font-[700] leading-[40px]'>THE TOP 4 DAY TRIPS</h1>
                        <span className="text-[18px] capitalize leading-[28px] mt-5 pb-4 font-[500]  text-primaryText">check out our most popular attractions in Kenya</span>
                        <p className="text-primaryText font-[300] md:max-w-[500px] lg:max-w-[80%] leading-[32px] text-[18px] mt-4"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>

                        {/* <div className="flex items-center space-x-3 mt-5">
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-darkBlue hover:text-white"  style="bg-darkBlue"/>
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-primaryBase hover:text-white"  style="bg-darkBlue"/>
                            <AnimatedIcon  href='' icon={<BsFacebook/>} className="!text-white bg-primaryBase hover:text-white"  style="bg-darkBlue"/>
                        </div> */}
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] w-full h-full lg:pl-[15px] ">
                    <div className='w-full h-full flex flex-wrap items-start justify-between '>
                        {TripsData.map((item, index) =>(
                        <div 
                        key={index} 
                        className="w-full  h-[250px] md:pl-2  mb-[8px] overflow-hidden md:max-w-[50%]
                        flex-grow-0 flex-shrink-0 group" >
                            <div className="w-full h-full relative flex flex-col items-center group ">
                                <div className="absolute content-[] md:pl-2 left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src={item.image} alt="main-image" width={200} height={200} className="w-full h-full object-cover"/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       {item.category}
                                    </p>
                                </div>
                                <div className='absolute top-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2] opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-[1000ms]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       {item.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Trip