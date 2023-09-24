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
import { ImageInfo, InfoList } from '@/typings'

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
    "/images/test/gallery-4.jpg",
    "/images/test/gallery-1.jpg",
    // ... Add other image URLs here
];

const sliderTitle: string[] = [
    "Bg Ruiru Highschol",
    "Bg Nyamira Children's Home",
    "Bg Malindi Children's Center"
]
const sliderLocation: string[] = [
    "Nairobi, RUIRU",
    "Nyamira KISII",
    "MALINDI KENYA"
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

const infoList : InfoList[] = [
    {
        id: 1,
        title: "Education (from kindergarten to university) to more than 800 children, partly through our own primary and secondary schools"
    },
    {
        id: 2,
        title: "Education (from kindergarten to university) to more than 800 children, partly through our own primary and secondary schools"
    },
    {
        id: 3,
        title: "Financing of textbooks and uniforms"
    },
    {
        id: 4,
        title: "A food program at all BG locations"
    },
    {
        id: 5,
        title: "An outreach program (nutrition, medical assistance, housing and education) for families in need"
    },
    {
        id: 6,
        title: "Emergency shelter for children who are temporarily unable to live at home and structural care (total more than 300 children)"
    },
    {
        id: 7,
        title: "Practice-oriented education and/or guidance to parents/carers to help them generate their own income"
    },

]
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
                        <div 
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
                        </div>
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
                            <div 
                            className="relative block" key={index}>
                            <div className=" h-[550px] overflow-hidden ">
                                <ImageSlider  images={images} breakpoints={{ 1200: {slidesPerView: 1}, 760:{slidesPerView: 1}}}/>
                            </div>
                                <div className=' overflow-hidden z-[1] relative block p-[20px] px-[30px] bg-white shadow-custom pt-8 overflow-hidden z-[1]'>
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
                                    
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>What Does Blessed Generation really offers the children ?</h3>
                                    <ul className="relative block pl-1 list-none mb-[30px] space-y-2">
                                        {infoList.map((item, index) => (
                                        <li className='flex relative ' key={index*item.id}>
                                            <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-full text-white flex items-center justify-center">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            <p className='ml-4 text-[16px] text-primaryDark font-[400]'>{item.title}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>We work from three different locations</h3>
                                    <div className="overflow-hidden ">
                                    <ImageSlider images={images}  breakpoints={{ 1200: {slidesPerView: 3}, 760:{slidesPerView: 1}}} className="w-full" />
                                    </div>
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>As much help as possible in a family situation</h3>
                                    <p className='mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]'>Blessed Generation tries to help children and their caregivers preferably in their home situation so that children can grow up in their own environment. The child and the parent or carer will receive medical care if necessary. We also help families with their basic needs such as housing and food. </p>
                                    <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">If this is not sufficient and children cannot be cared for for a longer or shorter period of time with family or in a foster family, the child will be admitted to Blessed Generation. This is done in cooperation with child protection and the children&apos;s court. </p>

                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>Results</h3>
                                    <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Since the founding of Blessed Generation, there are many people in the BG family who have completed their education and have a family and work of their own. They make their contribution to society as, for example, nurse, shoemaker, teacher, beautician, administrative assistant or basic doctor.</p>
                                    <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">They often return to Blessed Generation as volunteers and/or sponsors. One of the first graduates - now a family of his own and working at a bank - has been on the board of Blessed Generation Kenya for a few years now.</p>
                                    <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Blessed Generation offers employment to more than a hundred employees. In addition, we support and strengthen the community and economy in the vicinity of the BG locations by purchasing food, study and other materials, school uniforms, taxi rides and construction and maintenance work locally.</p>

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
                            </div> 
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