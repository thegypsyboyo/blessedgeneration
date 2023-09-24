import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { BiSolidLocationPlus } from 'react-icons/bi';

interface ImageSliderProps {  
  breakpoints?: { [key: number]: { slidesPerView: number } };
  className?: string
  images: ImageInfo[]
}

interface ImageInfo {
    url: string;
    title: string;
    location: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, breakpoints, className }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative z-1">
      <Swiper
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
        breakpoints={breakpoints} // Use the provided breakpoints
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="">
          {duplicatedImages.map((img, index) => (
             <SwiperSlide key={index}  className='container h-full w-full relative'>
             <div className='single w-full h-full mr-[20px] relative block shadow-custom group  '>
                 <div className="relative block overflow-hidden  z-[1] h-full group transition-all duration-500">
                 <Image src={img} alt='image-data' width={400} height={400}  className='object-cover h-full w-full transform transition-all duration-500 ease-in-out  translate-x-[-50px] scale-125 group-hover:rotate-12  group-hover:translate-x-0'/>
                 <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1] group-hover:translate-x-0 hidden group-hover:block transition-all duration-500 ease-in-out'/>
                 <div className="absolute bottom-[24px] left-[30px] z-[2] hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                     <ul className="relative flex items-start space-x-4">
                         <li className="relative flex items-center text-[14px] text-white font-[600]">
                             <BiSolidLocationPlus className="text-yellowColor mr-[5px]"/>
                             {location}
                         </li>
                     </ul>
                     <h3 className="text-[24px] font-[900] -tracking-[0.04em] leading-[28px]">
                         <span className='text-white transition-all duration-700 hover:text-orangeDefault' >{title}</span>
                     </h3>
                 </div>
                 </div>
             </div>
         </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]" />
    </div>
  );
};

export default ImageSlider;
