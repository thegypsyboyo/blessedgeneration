import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

interface ImageSliderProps {
  images: string[];
  breakpoints?: { [key: number]: { slidesPerView: number } };
  className?: string
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
            <SwiperSlide key={index} className="container h-full w-full relative">
              <Image
                src={img}
                alt={`image-${index}`}
                width={400}
                height={400}
                priority
                className={`w-full h-full object-cover ${className}`}
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
