"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCheck, faComment, faDonate, faMagnifyingGlass, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import { ImageInfo } from '@/typings'

interface BlopProps {
    image: string,
    author: string,
    title: string,
    decription: string,
    slug: string,
    date: string,
}
interface Cat {
    title: string,
    id: number,
}
interface Tag {
    title: string,
    id: number,
}
const data:BlopProps[] = [
    {
        author: "Lewmeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage. ",
        image: "/images/slider/slide-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
    },
]
const images:ImageInfo[] = [
    {
      image: "/images/test/gallery-3.jpg",
      title: 'Bg Ruiru Highschol',
      location: 'Beach, Paradise Island',
    },
    {
      image: '/images/test/gallery-2.jpg',
      title: 'Bg Nyamira Children&apos;s Home',
      location: 'City Center, Metropolis',
    },
    // Add more image objects here
];


const category:Cat[] = [
    {
        id: 1,
        title: "Donations",
    },
    {
        id: 2,
        title: "Charity",
    },
    {
        id: 3,
        title: "Food & Water",
    },
    {
        id: 4,
        title: "Kids Education",
    },
]
const tags:Tag[] = [
    {
        title: "kids",
        id: 1,
    },
    {
        title: "donation",
        id: 2,
    },
    {
        title: "water",
        id: 6,
    },
    {
        title: "charity",
        id: 7,
    },
    {
        title: "fundraising",
        id: 8,
    },

]

const SafariDetails:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap  w-full justify-between">
                <div className="w-full h-[500px] mb-[40px]">
                    <Image src="/images/test/gallery-1.jpg" alt='main-image' width={500} height={500} priority className='w-full h-full object-cover'/>
                </div>

                  <div className="w-full xl:max-w-[66.6667%] lg:max-w-[66.6667%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                                <span className='text-[40px] font-[300] font-cav '>United Kingdom</span>
                               <h3 className='text-[22px] leading-[22px] font-[800] uppercase text-darkBlue break-words block -tracking-[0.04] font-nun mb-[20px]'>{item.title}</h3>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue consequat elis.
                                    </motion.p>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit
                                    </motion.p>
                                </div>
                                <div className="flex items-center flex-wrap w-full h-full">
                                    {images.map((item, index) =>(
                                    <div className="w-full lg:w-1/2 h-full lg:min-h-[300px] overflow-hidden pr-3" key={index}>
                                        <Image src={item.image} alt="sub-image" className='w-full h-[400px] lg:h-[250px] object-cover' width={200} height={200}/>
                                        <p className="my-5 ">{item.title}</p>
                                    </div>
                                    ))}
                                </div>

                              <div className="relative block mt-[32px] ">
                                <h3 className="text-[30px] font-[900] leading-[40px] -tracking-[0.04em] text-primaryDark">Summery</h3>
                                <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                                Aliquam hendrerit a augue insu image pellentes
                                que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                                Alienum phaedrum torquatos nec eu.
                                </p>
                                <ul className="relative block pl-0 list-none ">
                                    <li className='flex relative items-center'>
                                        <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className="ml-[10px]">
                                            <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                        </div>
                                    </li>
                                    <li className='flex relative items-center'>
                                        <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className="ml-[10px]">
                                            <p className='text-[16px] text-primaryDark font-[700]'>Lorem Ipsum is not simply free text</p>
                                        </div>
                                    </li>
                                    <li className='flex relative items-center'>
                                        <div className="h-[15px] w-[15px] bg-redLight text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className="ml-[10px]">
                                            <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                        </div>
                                    </li>
                                </ul>
                                <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                                Aliquam hendrerit a augue insu image pellentes
                                que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                                Alienum phaedrum torquatos nec eu.
                                </p>
                              </div>

                            </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                      <div className="w-full xl:max-w-[33.333333%] lg:max-w-[33.333333%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px] w-full">
                        <div 
                        className='relative block rounded-lg'>
                            <Image src="/images/test/gallery-1.jpg" alt='' width={100} height={100}/>
                        </div>
                    
                    </div>
                    <div className="relative block space-y-[30px]">
                        <div 
                        className='relative block  bg-[#f4f5f8] p-10 rounded-lg'>
                            <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                Similar Interests
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {data.map((item, index) => (
                                    <li key={index} className='flex items-center w-full  pr-[18px] transition-all duration-500 '>
                                        <div className="relative top-[-1] ">
                                            <h3 className='flex flex-col leading-[20px] ml-0 p-0 text-[#454545] font-semibold text-sm'>
                                                <Link href={`/blog/blog-info/${item.slug}`} className=" transition-all duration-500 pl-0 hover:text-orangeDefault py-3 border-b-2  border-[#e7e7e7] ">
                                                    {item.title}
                                                </Link>
                                            </h3>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default SafariDetails