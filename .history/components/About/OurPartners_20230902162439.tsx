import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Layout from '../Home/Layout';
import { PartnerProps } from '@/typings';

const OurPartners = () => {
    
    const images:PartnerProps[] = [
        {
            image: "/images/partner/1.jpg",
            title: "",
            slug: ""
        },
        {
            image: "/images/partner/2.jpg",
            slug: "",
            title: ""
        },
        {
            image: "/images/partner/3.jpg",
            slug: "",
            title: ""
        },
        {
            image: "/images/partner/4.jpg",
            slug: "",
            title: ""
        },
        {
            image: "/images/partner/5.jpg",
            slug: "",
            title: ""
        },
        {
            image: "/images/partner/6.jpg",
            slug: "",
            title: ""
        },
        {
            image: "/images/partner/7.jpg",
            slug: "",
            title: ""
        },

    ]
    const duplicatedData = [...images, ...images, ...images];

       
    return (
      <section className="w-full h-full py-[120px] pt-[60px] bg-transparent">
        <Layout >
          <div className="w-full h-full flex flex-wrap">
            <div className="relative flex ml-auto mr-auto w-full h-full">
              <div className="flex flex-wrap w-full h-full items-center justify-between ">
                <div className="w-full h-full flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col w-full h-full text-center">
                    <span className='text-redDark font-cav text-[20px] font-[500]'>Our perfect stuff</span>
                    <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Meet Our Specialists</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-5">
                  <div className='flex flex-wrap w-full h-full !bg-white '>
                      {duplicatedData?.map((item, index) => (
                          <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] xl:w-[25%] py-[10px] px-[10px] relative !bg-white'>
                              <div className='single w-full h-full relative block group'>
                                  <div className="relative block overflow-hidden !bg-white  z-[1] h-full ">
                                    <Link href={`/team/team-details/${item.slug}`}>
                                        <Image src={item.image} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-12 h-full md:h-[400px] lg:h-[350px] w-full '/>
                                    </Link>
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

export default OurPartners