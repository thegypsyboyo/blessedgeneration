"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComment, faMagnifyingGlass, faQuoteRightAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AnimatedText } from '@/constants/AnimatedText'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import {BsArrowLeft, BsArrowRight, BsClockHistory, BsFacebook, BsFolder2, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import AnimatedIcon from '@/constants/AnimatedIcon'
import SocialShareButton from '@/constants/SocialShareButton'
import { Socials } from '@/typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

interface BlopProps {
    image: string,
    author: string,
    title: string,
    decription: string,
    slug: string,
    date: string,
    socials: Socials[];
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
        image: "/images/test/gallery-1.jpg",
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


const relatedPost  = [ ...data, ...data, ...data, ...data] 

const Blog:React.FC = () => {
    const defaultActiveCategoryId = 1; // Set the ID of the default active category
    const [activeCategoryId, setActiveCategoryId] = useState<number>(defaultActiveCategoryId);

    const handleCategoryClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, categoryId: number) => {
      event.preventDefault(); // Prevent page refresh
      setActiveCategoryId(categoryId);
    };
    
  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full">
                <div className="w-full xl:max-w-[66.66666%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <motion.div 
                            variants={footerVariants}
                            initial = "hidden"
                            whileInView="show"
                            className="relative block" key={index}>
                            <div className="relative block -[20px]">
                              <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full md:h-[550px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                  <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                              </div>
                            </div>

                            <div className="p-[20px] px-[30px] bg-white shadow-custom">
                              <div className='relative block pt-8 overflow-hidden z-[1]'>
                                      {/* <h3 className='text-[22px] leading-[22px] font-[800] text-darkBlue uppercase break-words block -tracking-[0.04] font-nun mb-[10px]'>{item.title}</h3> */}
                                      {/* <div className="mb-4 overflow-hidden block relative  ">
                                          <ul className='m-0 pl-0 list-none flex'>
                                              <li className="relative z-[1] text-xs uppercase pr-14 float-left flex items-center text-primaryText">
                                                  <Image src="/images/person.png" alt='person-icon' width={80} height={80} className='h-9 w-9 rounded-full mr-3 object-contain bg-[#e9ecef] p-2'/>
                                                  <span className="mr-2">by</span>
                                                  {item.author}

                                                  <span className='absolute right-4 top-1/2 content-[] h-0.5 w-8 bg-[#dddddd] -mt-0.5 '/>
                                              </li>
                                              <li className="relative z-[1] text-xs font-bold uppercase pr-14  flex items-center text-primaryText ">
                                                  <span className="mr-2 font-semibold">In</span>
                                                  <Link href="" className='mr-2'>IT Solutions</Link>
                                                  <Link href="" className='ml-2'>Security</Link>
                                              </li>
                                          </ul>
                                      </div>

                                      <div className='w-full h-[1px] bg-borderColor mt-5 relative flex items-center'>
                                          <span className='content-[] absolute w-[100px] bg-orangeDefault h-[2px] left-0 top-0'/>
                                      </div> */}

                                      <motion.p 
                                      variants={footerVariants}
                                      initial = "hidden"
                                      animate="show"
                                      className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">There are many variations of passages of Lorem
                                        Ipsum available, but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don&apos;t look even slightly
                                        believable. If you are going to use a passage.
                                      </motion.p>
                                      <motion.p 
                                      variants={footerVariants}
                                      initial = "hidden"
                                      animate="show"
                                      className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">There are many variations of passages of Lorem
                                        Ipsum available, but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don&apos;t look even slightly
                                        believable. If you are going to use a passage.
                                      </motion.p>
                              </div>
                              {/* <blockquote className="relative z-[1] border-none text-[20px] mt-[30px] text-dark font-semibold bg-[#ecf6fa] p-[50px]">
                                <span className='absolute content-[] bg-orangeDefault left-0 top-[5%] h-[90%] w-[3px]'/>
                                <p className='m-0 relative z-[1] text-4 italic font-semibold'>Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity amiable pleased.</p>
                                <span className='absolute right-[50px] content-[] text-[#666666] bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                                  <FontAwesomeIcon icon={faQuoteRightAlt}/>
                                </span>
                              </blockquote> */}
                              
                              <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full md:h-[550px] object-cover rounded-tl-lg rounded-tr-lg'/>
                              <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto. Ea movet saperet rationibus sit, pri autem aliquip invidunt an. Consetetur omittantur consequuntur eos et.&nbsp;<strong>Eleifend praesent iudicabit no mea, tollit persequeris ex pri, tota splendide voluptaria in pri.</strong>&nbsp;Ad per tale aliquip, ei sit viris commune albucius. Eos aliquip scaevola ut, eum alii mentitum prodesset no, his ne suas atomorum. Et numquam deleniti ponderum vis, quod error at mei. Novum blandit adolescens sea te. Ea eum cetero scaevola.
                              </p>
                              <p className="mb-[10px] leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText font-[400]">Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto. Ea movet saperet rationibus sit, pri autem aliquip invidunt an. Consetetur omittantur consequuntur eos et.&nbsp;<strong>Eleifend praesent iudicabit no mea, tollit persequeris ex pri, tota splendide voluptaria in pri.</strong>&nbsp;Ad per tale aliquip, ei sit viris commune albucius. Eos aliquip scaevola ut, eum alii mentitum prodesset no, his ne suas atomorum. Et numquam deleniti ponderum vis, quod error at mei. Novum blandit adolescens sea te. Ea eum cetero scaevola.
                              </p>
                              <p className='text-primaryText text-4 leading-[30px]'>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>
                              <p 
                                  className='mb-[15px]'>
                                    {tags.map((item, key) => (
                                          <Link href="#" key={item.id * key} className='relative text-primaryDark text-[10px] bg-[#f7f7f7] mr-[2px] mb-[5px] inline-block py-[10px] px-[15px] font-[800] uppercase transition-all duration-500   hover:bg-primaryBase mt-[10px] hover:text-white'>
                                            {item.title}
                                          </Link>
                                  ))}
                              </p>
                              <div 
                                  className="flex items-center !ml-0 space-x-2 w-full">
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsInstagram/>} />
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsFacebook/>} />
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsTwitter/>} />
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsYoutube/>} />
                              </div>
                            </div>


                            <div className="flex items-center justify-between flex-wrap py-[30px] mt-[50px] border-t-[1px] border-borderColor">
                            {/* <div 
                              className="mt-[15px]">
                              <h3 className="m-0 text-primaryDark text-[30px] mb-[21px] mt-[30px] font-[700]  -tracking-[0.04] ">Leave a comment</h3>
                              <form action="#" className='w-full'>
                              <div className="row flex flex-wrap ml-auto mr-auto w-full">
                              <div className="col flex-shrink-0 flex-grow-0 lg:pr-[20px] mt-0 w-full xl:max-w-[50%]">
                              <div className='relative block mb-[20px] w-full'>
                                <input type='text ' 
                                  required
                                  placeholder='Your name ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                 </div>
                                </div>
                                <div className="col flex-shrink-0 flex-grow-0 pr-[0px] mt-0 w-full xl:max-w-[50%]">
                                <div className='relative block mb-[20px] w-full'>
                                      <input type='email' 
                                              required
                                              placeholder='Your email ' className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block rounded-[20px] tracking-[0.01em] font-[500]'/>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="h-[150px] relative block mb-[20px] w-full">
                                          <textarea name="message" placeholder="Write your comment"  className="text-[14px] text-[#707876] h-[150px] w-full bg-borderColor pt-[15px] pb-[30px] px-[30px] border-none rounded-[20px] outline-none mb-[0px] font-[500]"/>
                                          </div>
                                          <div className="">

                                          </div>
                                          <AnimatedButton className='' link='' text='Submit comment' style='!mt-0'/>
                                        </div>
                                      </form>
                            </div> */}

                            </div>
                            <div 
                            className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                            >
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>About the Author</span>
                                </div>
                                <div className="w-full flex ">
                                  <div className="max-w-[120px] h-full pr-[25px]">
                                    <Image src={"/images/test/gallery-1.jpg"} alt='author' width={200} height={200} className='w-full h-full object-cover'/>
                                  </div>
                                  <div className="">
                                    <div className="font-[600] mb-[5px] uppercase">
                                      <Link href={"/team/team-details/3"}>
                                        {item.author}
                                      </Link>
                                    </div>
                                    Introducing our esteemed guest blogger! With years of experience in the events industry, Venessa&apos;s insightful posts will provide valuable tips and inspiration for planning your next big event.
                                    <ul className="w-full h-full flex mt-2">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className="mr-2 w-[50px] h-[50px] flex ">
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
                            </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full xl:max-w-[33.333333%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
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
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='max-w-[65px] rounded-1 h-full object-cover'/>
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
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Add</span>
                            </div>
                            <div className="w-full">
                                <Link href={"/donate"} className='w-full h-full'>
                                    <Image src={"/images/test/gallery-1.jpg"} alt='add' width={400} height={400} className='w-full h-full'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
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
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
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
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Blog