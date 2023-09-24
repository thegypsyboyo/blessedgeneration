"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCheck, faComment, faDonate, faMagnifyingGlass, faQuoteRightAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import AnimatedIcon from '@/constants/AnimatedIcon'
import SocialShareButton from '@/constants/SocialShareButton'
import ImageSlider from '@/constants/ImageSlider'
import VideoPlayer from '@/constants/VideoPlayer'

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
interface Popular {
    title: string,
    link: string,
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

const popular:Popular[] = [
    {
        link: "",
        title: "Patner organizations"
    },
    {
        link: "",
        title: "Blessed Generation Kenya"
    },
    {
        link: "",
        title: "Blessed Generation Ambassadors"
    },
    {
        link: "",
        title: "Blessed Generation Team"
    },

]

const imageUrls: string[] = [
    "/images/test/gallery-3.jpg",
    "/images/test/gallery-1.jpg",
    // ... Add other image URLs here
];
const BgKenya:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap-reverse  flex-row-reverse w-full justify-between">
                <div className="w-full xl:max-w-[29.972%] lg:max-w-[29.972%] mb-[30px] lg:pr-[35px] flex-shrink-0 lg:pl-[35px]">
                    <div className="relative block space-y-[30px]">
                        {/* <div className="bg-white shadow-custom p-[20px] rounded-md flex items-center lg:flex-col w-auto justify-between">
                            <div className="h-[60px] w-[60px] rounded-full bg-redDark overflow-hidden mb-4">
                                <Image src="/images/about/ria.jpg" alt='ria' width={100} height={100} className='w-full h-full object-cover'/>
                            </div>
                            <div className="ml-2 lg:text-center w-[90%]">
                                <h4 className='text-darkBlue font-extrabold'>Ria Fennema</h4>
                                <p className="font-light ">Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
                                <div className='flex space-x-3 mt-3 items-center justify-center'>
                                    <AnimatedIcon href='' icon={<BsInstagram/>}/>
                                    <AnimatedIcon href='' icon={<BsFacebook/>}/>
                                </div>
                            </div>
                        </div> */}
                        <motion.div 
                        variants={footerVariants}
                        initial = "hidden"
                        whileInView="show"
                        className='relative block'>
                            <h3 className='text-[23px] font-[700] -tracking-[0.04] text-primaryDark relative pb-4 capitalize'>
                                other Popular Interests
                                <span className="content-[] absolute w-full h-[1px] bg-white left-0 bottom-0 z-[2]"/>
                                <span className="content-[] absolute w-[50px] h-0.5 bg-orangeDefault left-0 bottom-0 z-[2]"/>
                            </h3>
                            <ul className="space-y-4">
                                {popular.map((item, index) => (
                                    <li key={index} className='flex items-center w-full mt-3  p-[20px] bg-orangeDefault  hover:bg-white hover:shadow-custom group transition-all duration-500 '>
                                        <div className="relative ">
                                            <Link href={`/blog/blog-info`} className="text-white  transition-all duration-500 pl-0 group-hover:text-darkBlue py-3  ">
                                                {item.title}
                                            </Link>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="relative block mb-[30px] border-solid border-2 border-[#dcdfe9]">
                        <div className="relative block z-[1] overflow-hidden">
                            <Image src="/images/test/gallery-1.jpg" width={400} height={400} alt="main-image" className="w-full h-[412px] object-cover align-middle transform scale-110 transition duration-500 ease group-hover:scale-[1.3] group-hover:translate-x-0 group-hover:translate-y-0  group-hover:rotate-12"/>
                            <div className="text-white bg-orangeDefault uppercase z-[1] rounded-md px-3 py-2 text-xs font-semibold mb-8 absolute left-7 top-7">
                                date
                            </div>
                            <div className="absolute left-0 bottom-0 p-8 z-[1] transition-all duration-200 ease-in-out">
                            <div className="">
                                    <h4 className="text-6 ">
                                        <Link href="#" className="font-bold text-white">The for fully had she there leave merit enjoy forth.</Link>
                                    </h4>
                            </div>
                             <div className="mt-7">
                                    <ul className="-mb-2 text-white list-none pl-0 flex items-center w-full">
                                        <li className="relative z-[1] text-xs uppercase pr-16 float-left flex items-center">
                                            <Image src="/images/events/image-1.jpg" alt="profile " width={50} height={50} className="w-9 h-9 mr-3 rounded-full object-cover"/>
                                            <span className="mr-0.5">By</span>
                                            <Link href="" className="font-bold">meta</Link>
                                            <span className="absolute content-[] right-4 top-1/2 h-0.5 w-8 bg-[#dddddd] -mt-0.5"/>
                                        </li>
                                        <li className="relative z-[1] text-xs uppercase pr-16 float-left flex items-center">
                                            <span className="mr-0.5 text-[#f2f2f2]">In</span>
                                            <Link href="" className=" text-white font-bold ml-2">Agency</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-0 bottom-0 content-[]  bd-default w-full h-full "/>
                        </div>
                    </div>

                    </div>
                </div>
                  <div className="w-full xl:max-w-[69.693%] lg:max-w-[69.693%]  mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                              <h3 className='text-[42px] leading-[50px] font-[700] capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>the story of blessed generation kenya.</h3>
                              <ul className='relative flex items-center mb-[20px] '>
                                <li className='flex items-center'>
                                    <Image src="/images/test/gallery-1.jpg" alt='author' width={70} height={70} priority className='w-[50px] h-[50px] object-cover rounded-full'/>
                                    <Link href="" className="ml-4 text-[#8f9bad] font-light text-[16px] relative">Blessed generation
                                    <span className="relative content-[] inline-block bg-redDark rounded-full ml-[16px] top-[-1px] w-[3px] h-[3px] "/>
                                    </Link>
                                </li>
                                <li className='flex items-center'>
                                    <Link href="" className="ml-4 text-[#8f9bad] font-light text-[16px] relative">About us
                                    <span className="relative content-[] inline-block bg-redDark rounded-full ml-[16px] top-[-1px] w-[3px] h-[3px] "/>
                                    </Link>
                                </li>
                                <li className='flex items-center'>
                                    <span className="ml-4 text-[#8f9bad] font-light text-[16px] relative">8/21/2023
                                    </span>
                                </li>
                              </ul>
                                <div className=" h-[400px] overflow-hidden">
                                    <ImageSlider images={imageUrls} breakpoints={{ 1200: {slidesPerView: 1}, 760:{slidesPerView: 1}}}/>
                                </div>
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
                                    <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                        <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                    </div>

                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[20px] text-primaryText font-[600]">Blessed Generation is a Kenya-based Non Governmental Organization (NGO) registered as a Charitable Children&apos;s Institution.
                                    </motion.p>
                                    <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-darkBlue font-semibold bg-[#ecf6fa] p-[50px]">
                                        <span className='absolute content-[] bg-orangeDefault left-0 top-[5%] h-[90%] w-[3px]'/>
                                        <p className='m-0 relative z-[1] text-4 italic font-semibold'>Blessed Generation gives children in need a chance for a good future.</p>
                                        <span className='absolute right-[50px] content-[] text-[#666666] bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                                            <FontAwesomeIcon icon={faQuoteRightAlt}/>
                                        </span>
                                    </blockquote>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Together with around 100 qualified Kenyan employees, Ria Fennema from Hurdegaryp in Friesland and her husband Fester are committed to giving more than 1000 vulnerable children a chance again. This is done in close cooperation with the Kenyan child protection.
                                    </motion.p>
                                    <h3 className='mt-5 text-[22px] leading-[22px] font-[800] uppercase text-yellowColor break-words block -tracking-[0.04] font-nun mb-[10px]'>Education is key </h3>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Education plays an important role in our help. It is the key to the future. Blessed Generation offers children primary and further education and, where possible, supports vocational or university education.
                                    </p>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">We consciously choose not to stop supporting after primary school. Further education and thorough social emotional guidance by our qualified social workers significantly increases the possibilities of a vulnerable child and reduces risks such as crime, radicalisation and teenage pregnancies.
                                    </p>
                                    <VideoPlayer videoId='2S3M1xFVdVg' className="w-full h-[400px] mb-4"/>
                                    
                                    <h3 className='lg:max-w-[80%] mt-5 text-[22px] leading-[30px] font-[800] capitalize  text-yellowColor break-words block -tracking-[0.04] font-nun mb-[10px]'>What Does Blessed Generation really offers the children ?</h3>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Blessed Generation is a Kenya-based Non Governmental Organization (NGO) registered as a Charitable Children&apos;s Institution.
                                    </motion.p>
                                    <div className=" h-[400px] overflow-hidden rounded-2xl">
                                    <ImageSlider images={imageUrls} breakpoints={{ 1200: {slidesPerView: 2}, 760:{slidesPerView: 1}}} className="rounded-2xl"/>
                                </div>
                                    <div className='w-full h-0.5 bg-slate-100 mt-[50px]'/>

                                    <div className="mt-7">
                                        <span className="block text-primaryText text-[13px] font-bold">Share this:</span>
                                        <div className="mt-3 flex space-x-2">
                                            <SocialShareButton platform="twitter" url={`https://www.chapman.edu/research/institutes-and-centers/schweitzer-institute/award-of-excellence/ria-fennema.aspx`} title='ria fennema & festas' body=''  icon={<BsTwitter />} />
                                            <SocialShareButton platform="instagram" url={`https://www.chapman.edu/research/institutes-and-centers/schweitzer-institute/award-of-excellence/ria-fennema.aspx`} title='' body=''  icon={<BsInstagram />} />
                                            <SocialShareButton platform="facebook" url={`https://www.chapman.edu/research/institutes-and-centers/schweitzer-institute/award-of-excellence/ria-fennema.aspx`} title='' body=''  icon={<BsFacebook />} />
                                            <SocialShareButton platform="linkedin" url={`https://www.chapman.edu/research/institutes-and-centers/schweitzer-institute/award-of-excellence/ria-fennema.aspx`} title='' body=''  icon={<BsLinkedin />} />

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default BgKenya