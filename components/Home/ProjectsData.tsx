import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'
import { AnimatedText } from '@/constants/AnimatedText'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderData } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import { useState } from 'react';
import Layout from './Layout';


const ProjectsData = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const data:SliderData[] = [
        {
            img: "/images/testing/gallery-4.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
            img: "/images/testing/gallery-3.jpg",
            title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
            img: "/images/testing/gallery-2.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/testing/gallery-1.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className='h-full w-full mt-[-200px] !overflow-hidden  bg-transparent'>
    <Layout>
        <Swiper
            className='h-full w-full bg-transparent '
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
            onMouseEnter={() => setIsMouseOver(true)} 
            onMouseLeave={() => setIsMouseOver(false)} 
            breakpoints={{
                1200: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                }
            }
        }>
            {duplicatedData.map((item, index) => (
                <SwiperSlide key={index}  className='h-full w-full relative z-[10] bg-transparent'>
                    <div className='single w-full h-full relative block group '>
                        <div className="relative block overflow-hidden  z-[1] h-full group transition-all duration-500 bg-transparent">
                        <Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover w-full transform transition-all duration-500 ease-in-out  translate-x-[-50px] scale-125 group-hover:rotate-12  group-hover:translate-x-0 h-[430px] rounded-[5px]'/>
                        <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1] group-hover:translate-x-0 hidden group-hover:block transition-all duration-500 ease-in-out'/>
                        <div className="absolute bottom-[24px] left-[30px] z-[2] hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                            <ul className="relative flex items-start space-x-4">
                                <li className="relative flex items-center text-[14px] text-white font-[600]">
                                    <BsClock className="text-yellowColor mr-[5px]"/>
                                    {item.time}
                                </li>
                                <li className="relative flex items-center text-[14px] text-white font-[600]">
                                    <BiSolidLocationPlus className="text-yellowColor mr-[5px]"/>
                                    {item.location}
                                </li>
                            </ul>
                            <h3 className="text-[24px] font-[900] -tracking-[0.04em] leading-[28px]">
                                <Link href={""} className='text-white transition-all duration-700 hover:text-orangeDefault' >{item.title}</Link>
                            </h3>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </Layout>
</section>
  )
}

export default ProjectsData