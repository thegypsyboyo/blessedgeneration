"use client"

import React,{useState} from "react"
import Layout from "./Layout"
import Image from "next/image"
import Link from "next/link"
import {BiSolidUser, BiSolidShareAlt} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineWechat} from "react-icons/ai"
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

interface BlogData {
    date: string,
    title: string,
    author: string,
    slug: string,
    image: string,
}
const Blog:React.FC = () => {
    // const [showIcons, setShowIcons] = useState(false);
    // const handleShareClick = () => {
    //     setShowIcons(!showIcons);
    // }
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleShareClick = (index: number) => {
      setActiveIndex(activeIndex === index ? -1 : index);
    };

    const blogData:BlogData[] = [
        {
            date: "23 May 2023",
            title: "How does the malnutrition affect children?",
            author: "Lewis Onyango",
            slug: "how-does-the-malnutrition-affect-children",
            image: "/images/events/image-1.jpg"
        },
        {
            date: "23 May 2023",
            title: "How does the malnutrition affect children?",
            author: "Lewis Onyango",
            slug: "how-does-the-malnutrition-affect-children",
            image: "/images/events/image-3.jpg"
        },
        {
            date: "23 May 2023",
            title: "How does the malnutrition affect children?",
            author: "Lewis Onyango",
            slug: "how-does-the-malnutrition-affect-children",
            image: "/images/events/image-4.jpg"
        },
    ]

  return (
    <section className="relative block pt-[120px] pb-[90px] bg-[#ecf6fa]">
        <Layout className="flex flex-col">
            <div className='relative -mt-[40px] mb-[46px] flex flex-col items-center justify-center w-full'>
                <span className="text-2xl text-orangeDefault font-normal leading-[24px] mb-[10px] font-man uppercase text-center">News & articles</span>
                <h2 className="m-0 text-[#0e2258] text-3xl leading-7 font-bold -tracking-[0.04em] mt-[6px] text-center lg:text-4xl lg:leading-9 xl:text-5xl lg:max-w-[650px] xl:leading-[60px] relative pb-6">Most popular breaking news & top stories
                <span className="absolute content-[] bg-orangeDefault left-1/2 bottom-0 h-0.5 w-16 -ml-6"/>
                </h2>
            </div>
            <div className="flex flex-wrap mx-auto my-auto w-full">
                {blogData.map((item, index) => (
                <div className="flex-shrink-0 flex-grow-0 md:max-w-[50%] lg:max-w-[33.333333%] xl:max-w-[33.333333%] w-full pl-[15px] pr-[15px] mt-0 group " key={index}>
                    <div className="relative block mb-[30px] border-solid border-2 border-[#dcdfe9]">
                        <div className="relative block z-[1] overflow-hidden">
                            <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                            <Image src={item.image} width={400} height={400} alt="main-image" className="w-full h-[450px] object-cover align-middle transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]"/>
                            <div className="text-white bg-orangeDefault uppercase z-[1] rounded-md px-3 py-3 text-xs font-semibold mb-8 absolute left-7 top-7">
                                {item.date}
                            </div>
                        </div>
                        {/* <div className="relative block border border-borderColor border-solid rounded-bl-[20px] rounded-br-[20px] bt-0 bg-white transition-all duration-500 w-full h-full ">
                            <div className="relative block overflow-hidden">
                                <div className="relative block pt-[37px] pb-[23px] px-[25px]">
                                    <ul className="relative flex center space-x-4">
                                        <li>
                                            <Link href="#" className="text-[14px] text-primaryText font-[600] transition-all duration-500 flex items-center">
                                                <BiSolidUser className="mr-[5px] text-yellowColor"/>
                                               {item.author}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-[14px] text-primaryText font-[600] transition-all duration-500 flex items-center">
                                                <AiOutlineWechat className ="mr-[5px] text-yellowColor"/>
                                                2 comments
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="text-[26px] font-[800] leading-[31px] -tracking-[0.04em] mt-[30px]">
                                        <Link href="" className="text-primaryDark transition-all duration-500 hover:text-primaryBase">{item.title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="relative flex items-center justify-between py-[19px] px-[27px] border-t-[1px] border-solid border-borderColor">
                                    <div className="relative block">
                                        <Link href={`/blog/blog-info/${item.slug}`}className="text-[14px] font-[700] text-primaryDark transition-all duration-500 flex items-center hover:text-primaryBase ">
                                            <span className="mr-[5px] text-[16px]"><BsArrowRight/></span>
                                            Read More
                                        </Link>
                                    </div>
                                    <div className="relative block">
                                        <button onClick={() => handleShareClick(index)} className="text-[14px] font-[700] text-primaryDark transition-all duration-500 flex items-center hover:text-primaryBase">
                                            <span className="ml-[5px] text-[20px]"><BiSolidShareAlt/></span>
                                        </button>
                                    </div>
                                </div>
                            <div className={`absolute bottom-[50px] right-[20px] bg-yellowColor shadow-custom py-[15px] px-[7px] rounded-[15px] z-[2] transition-all duration-500 transform ${activeIndex === index ? "transform translate-x-[0]": "translate-x-[175%]"}`}>
                                    <ul className="relative block space-y-4">
                                        <li><Link href="#" target="_blank" className="relative flex text-[16px] text-primaryDark items-center transition-all duration-500"><FaFacebookF/></Link></li>
                                        <li><Link href="#" target="_blank" className="relative flex text-[16px] text-primaryDark items-center transition-all duration-500"><FaInstagram/></Link></li>
                                        <li><Link href="#" target="_blank" className="relative flex text-[16px] text-primaryDark items-center transition-all duration-500"><FaYoutube/></Link></li>
                                        <li><Link href="#" target="_blank" className="relative flex text-[16px] text-primaryDark items-center transition-all duration-500"><FaTwitter/></Link></li>
                                    </ul>
                            </div>
                            </div>

                            <div className="absolute left-[30px] -top-[15px] bg-white shadow-custom py-[6px] px-[25px] z-[2] rounded-[15px]">
                                <p className="text-[18px] text-primaryBase font-[700] leading-[16px] font-cav">{item.date}</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                ))}
            </div>
        </Layout>

    </section>
  )
}

export default Blog