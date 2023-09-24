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
                <div className="relative w-full xl:max-w-[25%] lg:max-w-[25%] mb-[30px] lg:pl-[25px] flex-shrink-0">
                    <aside className="relative block">
                        <div className="relative text-center bg-no-repeat mb-[19px] flex flex-col items-center justify-center">
                            <div className="block w-[150px] h-[150px]  mt-0 mx-auto mb-4">
                                <Image src="/images/about/ria.jpg" alt='ria' width={200} height={200} className='w-full h-full object-cover rounded-full'/>
                            </div>
                            <h4 className='pt-1 px-4 text-[24px] leading-[30px] font-[500] text-darkBlue'>Ria Fennema</h4>
                            <p className="mt-2 mb-1 ml-5 font-light ">Hi! I`m an authtor of this blog. Read our post - be in trend!</p>
                            <div className='flex space-x-3 mt-3 items-center justify-center'>
                                <AnimatedIcon href='' icon={<BsInstagram/>}/>
                                <AnimatedIcon href='' icon={<BsFacebook/>}/>
                            </div>
                        </div>

                        <div className="w-full h-full pt-[35px] relative z-[1] overflow-hidden group">
                            <div className="w-full h-full mb-5 text-lg leading-6 font-semibold uppercase">
                                <span className="ml-[14px] text-darkBlue">
                                    <span className='absolute content-[] w-[3px] h-[20px] inline-block  bg-redDark left-0 '/>
                                    Categories
                                </span>
                            </div>
                            <ul className="space-y-4 mb-5 relative ml-[30px] w-full h-full">
                                {category.map((item, index) => (
                                    <li key={index} className='flex items-center w-full mt-3 bg-transparent  transition-all duration-500 ml-[-30px] hover:ml-[0]'>
                                        <Link href={`/blog/blog-info`} className="text-dark  transition-all duration-500 pl-0 group-hover:text-darkBlue  relative w-full h-full font-bold">
                                            {item.title}
                                        <BsArrowRight className="text-darkBlue absolute left-[-30px] content-[] top-0 transition-all duration-500 text-[18px] transform translate-x-[-100px] group-hover:translate-x-[0]"/>
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        <div className="w-full h-full pt-[35px] relative z-[1] overflow-hidden group">
                            <div className="w-full h-full mb-5 text-lg leading-6 font-semibold uppercase">
                                <span className="ml-[14px] text-darkBlue">
                                    <span className='absolute content-[] w-[3px] h-[20px] inline-block  bg-redDark left-0 '/>
                                    Other Popular Interests
                                </span>
                            </div>
                            <ul className="space-y-4 mb-5 relative ml-[30px] w-full h-full">
                                {popular.map((item, index) => (
                                    <li key={index} className='flex items-center w-full mt-3 bg-transparent  transition-all duration-500 ml-[-30px] hover:ml-[0]'>
                                        <Link href={`/blog/blog-info`} className="text-darkBlue  transition-all duration-500 text-[15px] pl-0 group-hover:text-darkBlue  relative w-full h-full font-bold">
                                            {item.title}
                                        <BsArrowRight className="text-darkBlue absolute left-[-30px] content-[] top-0 transition-all duration-500 text-[18px] transform translate-x-[-100px] group-hover:translate-x-[0]"/>
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        <div className="w-full h-full pt-[35px] relative z-[1] overflow-hidden group">
                            <div className="w-full h-full mb-5 text-lg leading-6 font-semibold uppercase">
                                <span className="ml-[14px] text-darkBlue">
                                    <span className='absolute content-[] w-[3px] h-[20px] inline-block  bg-redDark left-0 '/>
                                    Instagram 
                                </span>
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
                        <div className="w-full h-full pt-[35px] relative z-[1] overflow-hidden group">
                            <div className="w-full h-full mb-5 text-lg leading-6 font-semibold uppercase">
                                <span className="ml-[14px] text-darkBlue">
                                    <span className='absolute content-[] w-[3px] h-[20px] inline-block  bg-redDark left-0 '/>
                                    Tags
                                </span>
                            </div>
                            <div className="pt-[13px]">
                                <Link href={""} className='inline-block mr-2 mb-3 px-4 py-2 bg-yellowColor text-sm font-semibold lowercase transition-all duration-500 text-white'></Link>
                            </div>
                        </div>
                      
                    </aside>
                </div>
                  <div className="w-full xl:max-w-[75%] lg:max-w-[75%] lg:pl-[0px] mb-[30px] flex-shrink-0">
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
                                <div className='relative block pt-8 overflow-hidden z-[1]'>
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