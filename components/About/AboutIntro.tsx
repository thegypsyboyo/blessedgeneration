"use client"
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { HomeAbout, SliderData } from '@/typings'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import urlFor from '@/lib/urlFor'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import AnimatedButton from '@/constants/AnimatedButton'
import DonateNow from '../Donate/DonateNow'

type Props = {
    homeabout:HomeAbout[]
}
const AboutIntro = ({homeabout}:Props) => {
    const data:SliderData[] = [
        {
            img: "/images/test/gallery-4.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
            img: "/images/test/gallery-3.jpg",
            title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
            img: "/images/test/gallery-2.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/test/gallery-1.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    
    const AnimatedNumbers = ({value}:any) => {
        const ref = useRef(null);

        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, {duration: 3000})
        const isInView = useInView(ref, {once: false})

        useEffect(() => {
            if(isInView){
                motionValue.set(value);
            }
        }, [isInView, value, motionValue]);

        useEffect(() => {
          springValue.on("change", (latest:any) =>{
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
            // console.log(latest);
          })
        }, [value,springValue, motionValue]);
        return(
            <span ref={ref}></span>
        )
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    // const selectedWorks = homeabout. filter((event, index) => {
    //     // Here, you can define a condition to select the objects you want.
    //     // For example, let's say you want the first two objects:
    //     return index === 0 || index === 1;
    //   });
  return (
    <>
    <section className='pt-[120px] w-full h-full'>
        <Layout className="h-full">
            {homeabout.map((item, index) => (
                <div className="flex items-start flex-wrap w-full h-full justify-between" key={index}>
                    <div className="lg:max-w-[50%] flex-grow-0 h-[550px]  lg:640px  flex-shrink-0 w-full mb-8">
                        <div className="lg:mr-[100px] relative z-[1]">
                            <Swiper
                                className='w-full h-full'
                                autoplay={{
                                delay: 5000,
                                disableOnInteraction: true,
                                }}
                                grabCursor={true}
                                centeredSlides={false}
                                spaceBetween={20}
                                loop={true}
                                modules={[Autoplay, Navigation]} 
                                slidesPerView={1}              
                                >
                                    <div className='w-full h-full'>
                                        {item.image.map((slide, index) => (
                                            <SwiperSlide key={index}  className='h-full w-full relative'>
                                                <Image src={urlFor(slide.image).url()} alt='main-image' width={800} height={800} priority className='w-full lg:h-[640px] h-[550px] object-cover'/>
                                            </SwiperSlide>
                                        ))}
                                    </div>
                            </Swiper>
                            <div className='absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[] lg:flex hidden'/>
                            <div className="absolute right-0 lg:right-[-100px] bottom-[100px]  bg-[#f9f9f9] shadow-custom rounded-[30px] p-[30px]  lg:p-[50px] z-[2]">
                                <div className="text-orangeDefault relative flex text-[30px] md:text-[40px] lg:text-[50px] font-extrabold mb-1 " >
                                    <AnimatedNumbers value={item?.helped}/>
                                    {/* <div className="" data-to="26" data-speed="2000">26</div> */}
                                    <div className="">+</div>
                                </div>
                                <span className="font-semibold ">Children we&apos;ve Helped</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0">
                        <div className="lg:pl-[30px]">
                            <h2 className='font-bold relative z-[1] mb-[10px]  text-[16px] text-orangeDefault uppercase'>{item.logoName}</h2>
                            <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-darkBlue'>{item.title}</h2>
                            <p>
                                   {item.description}

                                </p>

                                <ul className='mt-[30px] overflow-hidden ml-0 list-none'>
                                    {item.works.map((w,  index) =>(
                                    <li className="w-full float-left py-0 my-[15px] px-[15px] relative z-[1] pl-[75px] text-darkBlue" key={index}>
                                        <h5 className='font-bold text-[20px] capitalize'>{w.title}</h5>
                                        <p className='mt-5'>
                                           {w.description}
                                        </p>
                                        <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                        </span>
                                    </li>
                                    ))}

                                    <div className=""  onClick={openModal} >
                                        <AnimatedButton className='' link='#' text='Support us' style='!rounded-[5px]'/>
                                    </div>
                                    {/* <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] mt-8  text-darkBlue">
                                        <h5 className='font-bold text-[20px] capitalize'>Highest Success Rates</h5>
                                        <p className='mt-5'>
                                            Resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch
                                        </p>
                                        <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                        </span>
                                    </li> */}
                                </ul>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    </section>
    <DonateNow 
        isOpen={isModalOpen}
        onClose={closeModal}
    />
    </>
  )
}

export default AboutIntro