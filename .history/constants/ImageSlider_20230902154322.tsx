import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { ImageInfo } from '@/typings';



interface ImageSliderProps {
  images: ImageInfo[];
  breakpoints?: { [key: number]: { slidesPerView: number } };
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, breakpoints, className }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const duplicatedImages = images.concat(images).concat(images); // Duplicating the images array

  return (
    <div className="relative z-1">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={5}
        loop={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        breakpoints={breakpoints} // Use the provided breakpoints
      >
        <div className="bg-transparent">
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full relative">
              <div className="single w-full h-full relative block group">
                <div className="relative block overflow-hidden z-[1] h-full group transition-all duration-500">
                  <Image
                    src={image.image}
                    alt="image-data"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full transform transition-all duration-500 ease-in-out translate-x-[-50px] scale-125 group-hover:rotate-12  group-hover:translate-x-0"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1] group-hover:translate-x-0 hidden group-hover:block transition-all duration-500 ease-in-out" />
                  <div className="absolute bottom-[24px] left-[30px] z-[2] hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                    <ul className="relative flex items-start space-x-4">
                      <li className="relative flex items-center text-[14px] text-white font-[600]">
                        <BiSolidLocationPlus className="text-yellowColor mr-[5px]" />
                        {image.location}
                      </li>
                    </ul>
                    <h3 className="text-[24px] font-[900] -tracking-[0.04em] leading-[28px]">
                      <span className="text-white transition-all duration-700 hover:text-orangeDefault">
                        {image.title}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
