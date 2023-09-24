"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from './Layout';
import { IntroSlider, SliderData } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';
import urlFor from '@/lib/urlFor';

type  Props = {
  sliderData: IntroSlider[];
}


const Header = ({sliderData}:Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const data:SliderData[] = [
    {
      img: "/images/test/gallery-1.jpg",
      title: "A Child in need of your help",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/test/gallery-2.jpg",
      title: "A Child in need of your help",
      description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Donate now",
      location: "",
      time: ""
    },
  ]

  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 2 } },
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  console.log("Slider Data: ",sliderData)
  return (
   
    <Swiper
    className='flex items-start  bg-white w-full h-screen mx-[100px]'
    effect={'fade'}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={30}
    loop={true}
    // pagination={{
    //   clickable: true,
    // }}
    navigation={true}
    modules={[EffectFade ,Autoplay, Navigation]}
    onSlideChange={handleSlideChange}
    // onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <div className='swiper-container relative w-full h-full z-100 flex transition-transform duration-500 ease-in-out box-content'>
        {sliderData?.map((item, index) =>(
          <SwiperSlide key={index}
            className='relative w-full h-full'
          >
            {item.sliders?.map((slider, index) => (
            <div className="" key={index}>
              {/* <div className='w-full overflow-hidden h-screen absolute  right-0 bottom-0 '>
                <div
                className={`h-screen bg-no-repeat bg-fixed bg-cover bg-center transition-transform duration-5000 ease-in-out animate-zoom cover-img opacity-[1] -z-[1]`} 
                style={{backgroundImage: `url(${item.img})`}}           
                />
                <div className="absolute left-0 bottom-0 content-[]  bd-default w-full h-full "/>
                <div className="bg-layer"/>
              </div>
              <div className="slide-layer"/>

              <div className='flex items-center ml-auto justify-center h-full mx-auto my-auto '>
                <Layout className="row flex flex-wrap mx-auto my-auto  justify-center">

                  <div className="w-full flex-shrink-0 flex-grow-0 flex-auto ">
                    <div 
                      className="content block relative z-[2]"
                    >
                      <p 
                      className="text-2xl  font-bold  font-man "
                      
                      ><span className="text-white">{item.title}</span></p>

                      <h2 
                      className="text-[55px] leading-[55px] lg:text-[70px] lg:leading-[70px] xl:text-[80px] md:text-[60px] relative text-white font-bold font-man tracking-[-0.04em] mt-[24px] mb-[26px] xl:leading-[83px] max-w-[700px]"
                    >   <span className="text-white  ">{item.description}</span></h2>
    
                    </div>
                  </div>
                </Layout>
              </div> */}
              <div className="w-full h-[120vh] text-center bg-cover bg-center" style={{backgroundImage: `url(${urlFor(slider.image).url()})`}}>
                <div className='slide-layer'/>
                <div className="inner">
                  <h1 className="font-bold my-0 mx-auto text-white text-[37px] md:text-[50px] max-w-[840px] lg:text-[64px] ">{slider.title}</h1>
                  <p className="text-light text-[16px] leading-[24px] mt-[20px] my-auto mb-[30px] mx-auto  max-w-[640px]">{slider.description}</p>
                  {/* <AnimatedButton className='bg-yellowColor' link='/donate' text={item.button} style='!mt-0 !bg-redDark'/> */}
                </div>
              </div>
            </div>
            ))}

            
          </SwiperSlide>

        ))}
      </div>
    </Swiper>
  )
}

export default Header