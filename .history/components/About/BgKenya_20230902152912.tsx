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
import {BsArrowLeft, BsArrowRight, BsClockHistory, BsFacebook, BsFolder2, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import AnimatedIcon from '@/constants/AnimatedIcon'
import SocialShareButton from '@/constants/SocialShareButton'
import ImageSlider from '@/constants/ImageSlider'
import VideoPlayer from '@/constants/VideoPlayer'
import { ImageInfo, InfoList, RiaProps } from '@/typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import Map from '@/constants/Map'


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
const data:RiaProps[] = [
    {
        author: "Lewmeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage. ",
        image: "/images/slider/slide-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
        socials: [
            {
              platform: "facebook",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life"
            },
            {
              platform: "instagram",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
            },
            {
              platform: "linkedin",
              url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
            },
        ],
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
const relatedPost  = [ ...data, ...data, ...data, ...data] 

const BgKenya:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };


    const mapCenter = { lat: 51.5074, lng: -0.1278 }; // London, UK
    const markerLocations = [
        { lat: 51.5074, lng: -0.1278 }, // London
        { lat: 40.7128, lng: -74.0060 }, // New York
        { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    ];
  
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap-reverse  flex-row-reverse w-full justify-between">
                <div className="w-full xl:max-w-[33.33%] lg:max-w-[33.33%] mb-[30px] lg:pr-[35px] flex-shrink-0 lg:pl-[35px]">
                <div 
                        className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Related Reads</span>
                          </div>
                          <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full">
                                <div className="w-full relative">
                                    {relatedPost.map((item, index) => (
                                    <div className="px-[15px] pb-[30px]" key={index}>
                                        <div className="flex items-start">
                                            <div className="pr-[15px]">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='max-w-[65px] rounded-1 h-[70px] object-cover'/>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="font-[600] text-[14px] mb-[10px] break-words ">
                                                    <Link href={""}>
                                                        Top 20 Events and Conference Countries
                                                    </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                          </div>
                        
                        </div>
                        
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px] '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Categories</span>
                            </div>
                            <ul className="w-full">
                                {category.map((item, index) => (
                                    <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                        <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-[#ffbb00] border-l border-l-[#ffbb00] transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                        <Link href={""} className='font-[400] mr-[3px] text-[#222222] transition-all duration-300 text-[15px] '>{item.title }</Link>
                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]'
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Tags</span>
                            </div>
                            <div className="w-full">
                                {tags.map((item, index) => (
                                    <Link href={""} className='bg-[#eaeaea] inline-block text-primaryText py-[5px] px-[11px] text-[0.7rem] font-[500] mt-0 mx-[3px] mb-[7px]' key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]'
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Advertisement </span>
                            </div>
                            <div className="w-full">
                                <Link href={"/donate"} className='w-full h-full'>
                                    <Image src={"/images/test/gallery-1.jpg"} alt='add' width={400} height={400} className='w-full h-full'/>
                                </Link>
                            </div>
                            
                        </div>
                </div>
                  <div className="w-full xl:max-w-[66.667%] lg:max-w-[66.66%]  mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <div 
                            className="relative block" key={index}>
                            <div className=" h-[550px] overflow-hidden ">
                                <ImageSlider  images={images} breakpoints={{ 1200: {slidesPerView: 1}, 760:{slidesPerView: 1}}}/>
                            </div>
                                <div className=' overflow-hidden z-[1] relative block p-[20px] px-[30px] bg-white shadow-custom '>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[20px] text-dark font-[600]">Blessed Generation is a Kenya-based Non Governmental Organization (NGO) registered as a Charitable Children&apos;s Institution.
                                    </motion.p>
                                    <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-black  font-semibold bg-yellowColor p-[50px]">
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
                                    <h3 className='mt-5 text-[22px] leading-[22px] font-[800] uppercase text-redDark break-words block -tracking-[0.04] font-nun mb-[10px] pb-2'>Education is key 
                                    </h3>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Education plays an important role in our help. It is the key to the future. Blessed Generation offers children primary and further education and, where possible, supports vocational or university education.
                                    </p>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">We consciously choose not to stop supporting after primary school. Further education and thorough social emotional guidance by our qualified social workers significantly increases the possibilities of a vulnerable child and reduces risks such as crime, radicalisation and teenage pregnancies.
                                    </p>
                                    <VideoPlayer videoId='2S3M1xFVdVg' className="w-full h-[550px] mb-4"/>
                                    
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] uppercase text-redDark break-words block -tracking-[0.04] font-[600] font-nun mb-[20px]'>What Blessed Generation offers it&apos;s children</h3>
                                    <ul className="relative block pl-1 list-disc  mb-[30px] space-y-2">
                                        {infoList.map((item, index) => (
                                        <li className='flex relative items-center ' key={index*item.id}>
                                            <span className="rounded-full w-[5px] h-[5px] absolute content-[] left-0 top-[30%] bg-dark"/>
                                            <p className='ml-4 mb-[10px] text-[16px] text-primaryText font-[400]'>{item.title}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold uppercase text-redDark break-words block -tracking-[0.04] font-man mb-[20px]'>We work from three different locations</h3>
                                    <Map center={mapCenter} zoom={10} markers={markerLocations} height="550px"/>
                                    {/* <div className="overflow-hidden ">
                                    <ImageSlider images={images}  breakpoints={{ 1200: {slidesPerView: 3}, 760:{slidesPerView: 1}}} className="w-full" />
                                    </div> */}
                                    .
                                    <h3 className='mt-[35px] text-[22px] leading-[22px] font-bold capitalize text-yellowColor break-words block -tracking-[0.04] font-man mb-[20px]'>As much help as possible in a family situation</h3>
                                    <p className='mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]'>Blessed Generation tries to help children and their caregivers preferably in their home situation so that children can grow up in their own environment. The child and the parent or carer will receive medical care if necessary. We also help families with their basic needs such as housing and food. </p>
                                    <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">If this is not sufficient and children cannot be cared for for a longer or shorter period of time with family or in a foster family, the child will be admitted to Blessed Generation. This is done in cooperation with child protection and the children&apos;s court. </p>
                                    <div className="overflow-hidden rouded-[4px]">
                                    <Image src={"/images/test/gallery-1.jpg"} alt='main-image' width={400} height={400} className='w-full h-full md:h-[550px] object-cover '/>
                                    </div>
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
                                <div 
                                className='mt-[60px] relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                                >
                                    <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                        <span className='mr-[10px]'>About the Author</span>
                                    </div>
                                    <div className="w-full flex h-full">
                                    <div className="max-w-[150px] pr-[25px]">
                                        <Image src={"/images/test/gallery-1.jpg"} alt='author' width={200} height={200} className='w-full h-full object-cover'/>
                                    </div>
                                    <div className="">
                                        <div className="font-[600] mb-[5px] uppercase">
                                        <Link href={"/team/team-details/3"}>
                                            {item.author}
                                        </Link>
                                        </div>
                                        <p className="text-primaryText">
                                        Introducing our esteemed guest blogger! With years of experience in the events industry, Venessa&apos;s insightful posts will provide valuable tips and inspiration for planning your next big event.
                                        </p>
                                        <ul className="w-full h-full flex mt-2">
                                        {item.socials?.map((social, index) => (       
                                            <li key={index} className="mr-2 w-[30px] h-[30px] flex ">
                                            <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "!bg-blue-800":""} ${social.platform === "instagram" ? "!bg-[#F56040] ":""}  ${social.platform === "linkedin" ? "!bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600":"bg-blue-600"}  ${social.platform === "youtube" ? "!bg-[#c4302b]":""} ${social.platform === "twitch" ? "!bg-[#6441A4]":""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[1]`}>
                                                {social.platform === "facebook" && <FaFacebookF className=""/>}
                                                {social.platform === "instagram" && <FaInstagram/>}
                                                {social.platform === "linkedin" && <FaLinkedinIn/>}
                                                {social.platform === "twitter" && <FaTwitter/>}
                                                {social.platform === "twitch" && <FaTwitch/>}
                                                {social.platform === "youtube" && <FaYoutube/>}
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div 
                            className='relative block  bg-white shadow-custom  mt-11 p-[30px] group rounded-[5px] w-full '
                            >
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>Related posts</span>
                                </div>
                                <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full ">
                                <div className="w-full  h-full flex flex-wrap relative pb-[30px]">
                                    {relatedPost.map((item, index) => (
                                    <div className="flex-grow-0 flex-shrink-0 md:w-[50%] w-full sm:w-[50%] h-full p-2" key={index}>
                                        <div className="w-full h-full flex flex-col items-center">
                                            <div className="w-full h-full">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='w-full  rounded-1 rounded-[5px] h-[240px] object-cover'/>
                                                </Link>
                                            </div>
                                            <div className="w-full ">
                                            <div className="w-full h-full font-[600] text-[14px] mb-[10px] break-words pt-2">
                                              <Link href={""} className='w-full'>
                                                  Top 20 Events and Conference Countries
                                              </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
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