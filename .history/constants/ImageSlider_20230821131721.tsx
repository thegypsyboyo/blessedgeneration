import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
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
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        breakpoints={{
            1200: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            }
        }
        }                    
      >
        <div className="">
          {duplicatedImages.map((img, index) => (
            <SwiperSlide key={index} className="container h-full w-full relative">
              <Image
                src={img}
                alt={`image-${index}`}
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
