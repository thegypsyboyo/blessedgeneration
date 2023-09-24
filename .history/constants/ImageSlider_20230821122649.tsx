import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

interface ImageData {
  img: string;
}

interface ImageSliderProps {
  data: ImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const duplicatedData = [...data, ...data, ...data];

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
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="">
          {duplicatedData.map((item, index) => (
            <SwiperSlide key={index} className="container h-full w-full relative">
              <Image
                src={item.img}
                alt="main-image"
                width={200}
                height={200}
                priority
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]" />
    </div>
  );
};

export default ImageSlider;
