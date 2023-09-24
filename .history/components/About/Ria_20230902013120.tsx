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
import { RiaProps, Socials } from '@/typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

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

const imageArray = [
    {
        image: "/images/test/gallery-1.jpg"
    },
    {
        image: "/images/test/gallery-1.jpg"
    },
    {
        image: "/images/test/gallery-1.jpg"
    },
    {
        image: "/images/test/gallery-1.jpg"
    },
    {
        image: "/images/test/gallery-1.jpg"
    },
    {
        image: "/images/test/gallery-1.jpg"
    },
]


const relatedPost  = [ ...data, ...data, ...data, ...data] 

const Ria:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='block py-[120px] pt-[60px] relative'>
        <Layout>
            <div className="flex flex-wrap-reverse flex-row-reverse  w-full justify-between">
                <div className="relative w-full xl:max-w-[33.333%] lg:max-w-[33.333%] mb-[30px] lg:pl-[25px] flex-shrink-0">
                    <aside className="relative block">
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
                                        <div className="flex items-center">
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

                        <div className="relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full mt-[30px]">
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Instagram feeds</span>
                            </div>
                            <div className="mb-5 relative  w-full h-full flex flex-wrap items-center ">
                                {imageArray.map((item, index) => (
                                <div className="w-[33%] text-center" key={index}>
                                    <div className="relative z-[1] m-1">
                                        <Link href={""} className='w-full h-full block'>
                                            <Image src={item.image} alt='thumb-1' width={150} height={150} className='max-w-full h-[80px] object-cover'/>
                                        </Link>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-[30px] relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full">
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Tags</span>
                            </div>
                            <div className="pt-[13px]">
                                {tags.map((item, index) => (
                                    <Link href={""}  key={item.id * (index)} className='inline-block mr-2 mb-3 px-4 py-2 bg-yellowColor text-sm font-semibold lowercase transition-all duration-500 text-white hover:bg-darkBlue'>
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
                      
                    </aside>
                </div>
                  <div className="w-full xl:max-w-[66.6667%] lg:max-w-[66.6667%] lg:pr-[10px] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                              <div className="relative block -[20px] lg:h-[500px]">
                                    <Image src="/images/test/gallery-2.jpg" alt='main-image' width={400} height={400} className='w-full h-full sm:max-h-[400px] lg:max-h-[500px] object-cover'/>
                                </div>
                                <div className='relative block p-[20px] px-[30px] bg-white shadow-custom pt-8 overflow-hidden z-[1]'>
                                    <p className='mb-[10px] leading-[32px] pt-[10px] text-[16px] text-primaryText font-[400]'>
                                        <span className="float-left w-11 h-11 mr-2 text-[25px] leading-8 font-semibold text-white flex items-center justify-center text-center rounded-full bg-redDark">R</span>
                                        ia Fennema, originally a teacher, settled permanently in Kenya in 2001 from Hurdegaryp in Friesland to take over an orphanage in Ruiru, near Nairobi. In 2004 Ria&apos;s husband Fester Medendorp came to Kenya. Together they further expanded the help to underprivileged children. Blessed Generation&apos;s tools are now running at 3 locations in Kenya. Ria and Fester have two children. 
                                        <span>Urban Edibles for Rooftop Gardens.</span>
                                    </p>
                                    <p className="mb-[18px] leading-[32px] pt-[0px] pb-[11px] text-[16px] text-primaryText font-[500]">
                                        <span className="mb-[5px] italic underline">
                                        <em>Place a fountain, pool or small portable water feature near your patio for a cooling evaporation effect, and the soothing sound of moving water. Build an arbor and plant quick-growing vines at the base, or install a shade cloth. For more ideas, read: 5 Tips on Comfortable Outdoor Entertaining.</em>
                                        </span>
                                    </p>
                                    <h3 className='text-[22px] leading-[22px] font-[500] font-man capitalize text-redDark  break-words block -tracking-[0.04]  mb-[10px]'>About Ria Fennema & Festas</h3>
                                    <motion.p 
                                    variants={footerVariants}
                                    initial = "hidden"
                                    animate="show"
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria Fennema, originally a teacher, settled permanently in Kenya in 2001 from Hurdegaryp in Friesland to take over an orphanage in Ruiru, near Nairobi. In 2004 Ria&apos;s husband Fester Medendorp came to Kenya. Together they further expanded the help to underprivileged children. Blessed Generation&apos;s tools are now running at 3 locations in Kenya. Ria and Fester have two children. 
                                    </motion.p>
                                    <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-darkBlue font-semibold bg-yellowColor p-[50px]">
                                        <span className='absolute content-[] bg-redDark left-0 top-[5%] h-[90%] w-[3px]'/>
                                        <p className='m-0 relative z-[1] text-4 italic font-semibold text-white'>Having money doesn&apos;t make you happy.Someone else with that will help.Helping is what counts at the end of the day</p>
                                        <span className='absolute right-[50px] content-[] text-white bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                                            <FontAwesomeIcon icon={faQuoteRightAlt}/>
                                        </span>
                                    </blockquote>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria and Fester, together with more than a hundred Kenyan employees, are committed to giving the children a chance in life again. Fester and Ria do this work unpaid. The Blessed Generation Netherlands Foundation takes care of the living expenses of Ria and her family, so that they can continue their good work.
                                    </p>
                                    <h3 className='mt-5 text-[22px] leading-[22px] font-[600] capitalize text-redDark break-words block -tracking-[0.04] font-nun mb-[10px]'>Albert Schweitzer Award of Excellence </h3>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria Fennema, Chapman University in Orange U.S.A. gives an annual award to a person (or institution) in the world who has followed in the footsteps of Albert Schweitzer and who, like him, puts his/her life at the service of fellow human beings. In 2004 Ria Fennema received this award.
                                    </p>
                                    <figure className='w-full flex flex-wrap relative h-[300px] overflow-hidden'>
                                        <figure className='max-w-[50%] lg:pr-2 h-[300px]'>
                                            <Image src="/images/test/gallery-1.jpg" alt="image-1" width={400} height={400} className="object-cover"/>
                                        </figure>
                                        <figure className='max-w-[50%] lg:pl-2 h-[300px]'>
                                            <Image src="/images/test/gallery-1.jpg" alt="image-1" width={400} height={400} className="object-cover"/>
                                        </figure>
                                    </figure>
                                    <h3 className='lg:max-w-full mt-5 text-[22px] leading-[30px] font-[600] capitalize text-redDark break-words block -tracking-[0.04] font-nun mb-[10px]'>Interview with Ria for EO Vision &apos;It could be your neighbour &apos; </h3>
                                    <p
                                    className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Ria Fennema, Chapman University in Orange U.S.A. gives an annual award to a person (or institution) in the world who has followed in the footsteps of Albert Schweitzer and who, like him, puts his/her life at the service of fellow human beings. In 2004 Ria Fennema received this award.
                                    </p>
                                    
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

export default Ria