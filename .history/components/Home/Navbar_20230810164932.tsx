"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import {motion, Variants, useAnimation} from  "framer-motion"
import {BsArrowRight, BsFacebook, BsFillTelephoneOutboundFill, BsInstagram, BsLinkedin, BsPhone, BsPhoneFill, BsTwitter, BsYoutube} from "react-icons/bs"
import {BiHeart, BiSearch, BiSolidMessageRoundedDetail} from "react-icons/bi"
import {FaMapMarkedAlt} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"
import {MdClose, MdLocationOn,MdKeyboardArrowLeft, MdKeyboardArrowDown} from "react-icons/md"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import AnimatedIcon from '@/constants/AnimatedIcon'
import { useRouter } from 'next/router'
import { CustomLink } from '@/constants/CustomLink'
import AnimatedButton from '@/constants/AnimatedButton'

interface MenuItem {
    id: number;
    label: string;
    path: string;
    children?: MenuItem[];
}
interface Props {
    menuItems: MenuItem[];
}
const menuItems = [
    {
      id: 1,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      label: 'About',
      path: '/about'
    },
    {
      id: 3,
      label: 'Our Work',
      path: '#',
      children: [
        {
          id: 4,
          label: 'Services',
          path: '/services'
        },
        {
          id: 5,
          label: 'Service Details',
          path: '/service-details'
        }
      ]
    },
    {
      id: 6,
      label: 'Pages',
      path: '#',
      children: [
        {
          id: 7,
          label: 'Portfolio',
          path: '/portfolio'
        },
        {
          id: 8,
          label: 'F&Qs',
          path: '/faqs'
        },
        {
          id: 9,
          label: 'Gallery',
          path: '/gallery'
        },
        {
          id: 10,
          label: 'Blog Details',
          path: '/blog-details'
        },
        {
          id: 11,
          label: 'Camping Info',
          path: '/camping-info'
        },
        {
          id: 12,
          label: 'Activities',
          path: '/activities'
        }
      ]
    },
    {
        id: 13,
        label: "Contact",
        path: "/contact"
    }
];

const Navbar:React.FC = () => {

    const [isSticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleToggleMenuClose = () =>  {
        setIsOpen(false)
    }
  // function for dynamic rendering of the menu items
    const toggleMenu = (id: number) =>  {
        setActiveMenu((prev) => (prev === id ? null : id));
    };
    const handleSubmenuClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        // add other logic here for handling submenu click
    }

    const renderMenuItem = (item: MenuItem) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = activeMenu === item.id;
    
        return (
            <li
            key={item.id}
            className={`menu-item-has-children has-dropdown ${isActive ? "active" : ""}`}
            onClick={handleSubmenuClick}
          >
            <Link href={item.path} className="flex items-center justify-between">
              <span
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  }
                }}
                className="flex items-center text-white space-x-2 justify-between font-[500] cursor-pointer w-full leading-[36px] h-[46px]"
              >
                {item.label}
                <span className=''>
                    {hasChildren && (isActive ? <MdKeyboardArrowDown  className="text-[22px] w-[30px] h-[30px] flex items-center justify-center p-0 bg-primaryBase"/> : <MdKeyboardArrowLeft className="text-[22px] w-[30px] h-[30px] flex items-center justify-center p-0 bg-primaryBase"/>)}
                </span>
              </span>
            </Link>
            {hasChildren && (
              <ul
                className={`sub-menu ${isActive ? "active  text-dark pl-3" : "hidden"}`}
              >
                {item.children?.map((child) => renderMenuItem(child))}
                
              </ul>
            )}
          </li>
        );
    };


  return (
    <>
    <header className='main-header'>
        <nav className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
                <div className="main-menu__logo">
                    <Link href={"/"}>
                        <Image src={"/images/logo.png"} alt='logo' width={120} height={120} className='w-[140x] h-[140px] object-contain '/>
                    </Link>
                </div>
                <div className="main-menu__shape-1">
                    <Image src={"/images/shape-1.png"} alt='shape' width={80} height={80}/>
                </div>
            </div>
            <div className="main-menu__right block w-[91%]">
                <div className="main-menu__right-top flex items-center justify-between py-[18px] px-0">
                    <div className="main-menu__right-top-left block">
                        <div className="main-menu__volunteers flex items-center">
                            <div className="main-menu__volunteers-icon relative w-[44px] h-[44px] bg-orangeDefault shadow-custom flex items-center justify-center rounded-full">
                                {/* <Image src={"/images/heart-icon.png"} alt='heart-icon' width={20} height={20} className='w-auto h-auto object-contain'/> */}
                                <FontAwesomeIcon icon={faHeart} className='text-white text-[20px]'/>
                            </div>
                            <div className="ml-[10px]">
                                <p className="text-[24px] font-[700] text-primaryBase">
                                    <Link href={"/become-volunteer"} className='font-cav text-primaryDark transition-all duration-500 hover:text-primaryBase'>Become a 
                                        <span className="ml-[10px] relative inline-block ">
                                            volunteer
                                            <span className='content-[] absolute bottom-1 left-0 right-0 bg-primaryDark h-[1px]' />
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu__right-top-right flex items-center">
                        <div className="main-menu__right-top-address block ">
                            <div className="main-menu__right-top-address-list flex items-center ">
                                <li className='relative flex items-center'>
                                    <span className='absolute content-[] top-1 bottom-1 -right-[40px] bg-#eee9db xl:hidden w-[1px]' />
                                    <div className="icon relative flex items-center">
                                        <span className="icon-phone-call text-[28px] ">
                                            <BsFillTelephoneOutboundFill className="text-orangeDefault"/>
                                        </span>
                                    </div>
                                    <div className="text font-nun ml-[15px]">
                                        <p className='font-nun font-[600] text-[12px] leading-[16px]'>Helpline</p>
                                        <h5 className='text-[14px] font-[700] leading-[20px] '>
                                            <a href="tel:980009630" className='text-primaryDark transition duration-500 hover:text-primaryBase'>+ 98 (000) - 9630</a>
                                        </h5>
                                    </div>
                                </li>
                                <li className='relative flex items-center'>
                                    <span className='absolute content-[] top-1 bottom-1 -right-[40px] bg-#eee9db xl:none w-[1px]' />
                                    <div className="icon">
                                        <span className="icon-phone-call text-[28px]">
                                            <BiSolidMessageRoundedDetail className="text-orangeDefault"/>
                                        </span>
                                    </div>
                                    <div className="text font-nun ml-[15px]">
                                        <p className='font-nun font-[600] text-[12px] leading-[16px]'>send email</p>
                                        <h5 className='text-[14px] font-[700] leading-[20px] '>
                                            <a className='text-primaryDark hover:text-primaryBase transition duration-500' href="mailto:info@blessedgeneration.nl">info@blessedgeneration.nl</a>
                                        </h5>
                                    </div>
                                </li>
                                <li className='relative flex items-center'>
                                    <span className='absolute content-[] top-1 bottom-1 -right-[40px] bg-#eee9db xl:none w-[1px]' />
                                    <div className="icon">
                                        <span className="icon-phone-call text-[28px]">
                                            <FaMapMarkedAlt className="text-orangeDefault"/>
                                        </span>
                                    </div>
                                    <div className="text font-nun ml-[15px]">
                                        <p className='font-nun font-[600] text-[12px] leading-[16px]'>Spirit of faith</p>
                                        <h5 className='text-[14px] font-[700] leading-[20px] '>nairobi, kenya.</h5>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="main-menu__right-top-social flex items-center ml-[50px] gap-[10px] xl:hidden">
                            <AnimatedIcon href='' icon={<BsInstagram/>} />
                            <AnimatedIcon href='' icon={<BsTwitter/>} />
                            <AnimatedIcon href='' icon={<BsFacebook/>} />
                            <AnimatedIcon href='' icon={<BsYoutube/>} />
                        </div>
                    </div>
                </div>
                <div className="main-menu__right-bottom bg-orangeDefault">
                    <div className="main-menu__main-menu-box">
                        <Link href="#" className='mobile-nav__toggler ' onClick={handleToggleMenu}>
                            <AiOutlineMenu className="text-light hover:text-primaryDark transition duration-500"/>
                        </Link>
                        <ul className='main-menu main-menu__list m-0 p-0 list-none items-center hidden xl:flex'>
                            <li className='dropdown'>
                                {/* <Link href="#" className='text-white text-[16px] flex relative transition-all duration-500 font-[600] '>Home</Link> */}
                                <CustomLink className='' href='/' title='Home'  />
                                <ul>
                                    <li className=''>
                                        <Link href="/about" className="relative group">
                                         About
                                         <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="/become-volunteer" className="relative group">
                                        Volunteer
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="/blog" className="relative group">
                                        Blogs & News
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="/events" className="relative group">
                                        Upcoming Events
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                            
                                </ul>
                            </li>
                            <li className='dropdown'>
                            <CustomLink className='' href='/about' title='About'  />
                                <ul>
                                    <li className=''>
                                        <Link href="/work" className="relative group">
                                        What we do
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="/story" className="relative group">
                                        Our story
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link href="/become-volunteer" className="relative group">
                                        Become a volunteer
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown'>
                            <CustomLink className='' href='/works' title='Our work'  />
                                <ul>
                                    <li className=''>
                                        <Link href="/become-volunteer" className="relative group">
                                        Nyamira Children&apos;s Home
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>                                    </li>
                                    <li className=''><Link href="/become-volunteer" className="relative group">
                                        Ruiru Children&apos;s Home
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>     
                                    </li>
                                    <li className=''><Link href="/become-volunteer" className="relative group">
                                        Malindi Children&apos;s Home
                                        <span className="absolute content-[] top-[50%] font-[900] text-[14px] text-primaryBase right-[24px] transform scale-0 -translate-y-[50%] transition-all duration-500 group-hover:-translate-y-[50%] group-hover:scale-[1] ">
                                            <BsArrowRight/>
                                        </span>
                                        </Link>     </li>
                                    <li className=''><Link href="/work">Services</Link></li>
                                </ul>
                            </li>
                            <li className='dropdown'>
                            <CustomLink className='' href='/blog' title='Blogs & News'  />
                            </li>
                            <li>
                            <CustomLink className='' href='/portfolio' title='Portfolio'  />
                                </li>
                            <li> <CustomLink className='' href='/contact' title='Contact us'  /></li>
                        </ul>
                    </div>
                    <div className="main-menu__main-menu-content-box">
                        <div className="main-menu__search-cat-btn-box">
                            <div className="main-menu__search-box">
                                <Link href="#" className='main-menu__search'><BiSearch/></Link>
                            </div>
                            {/* <div className="main-menu__cat-box"></div> */}
                            <div className="main-menu__btn-box">
                                {/* <Link href="/dontate" className='main-menu__btn'>
                                    <span><BiHeart/></span>
                                    Donate now
                                </Link> */}
                                <AnimatedButton className='mt-0 ' link='' text='Donate now' style='!mt-0 !rounded-0' />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </nav>

    </header>

    {/* <div 
        className={`mobile-nav__wrapper ${isOpen ? "expanded": "hidden"}`}
    >
        <div className="mobile-nav__overlay" />
        <div className="mobile-nav__content">
            <span className="mobile-nav__close">
                <MdClose onClick={handleToggleMenuClose}/>
            </span>
        </div>
    </div> */}
    <div className={`transition-all duration-500 mobile-nav__wrapper fixed top-0 left-0 w-full h-full z-[999] ${isOpen ? "block" : "hidden"}`}>
      <motion.div
        className="  absolute top-0 left-0 right-0 bottom-0 bg-black"
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: isOpen ? 0.5 : 0, visibility: isOpen ? "visible" : "hidden" }}
        exit={{ opacity: 0, visibility: "hidden" }}
        transition={{ duration: 0.3 }}
        onClick={handleToggleMenu}
      />
      <motion.div
        className="mobile-nav__content bg-primaryDark w-[300px] z-10 h-full pt-[30px] pb-[30px] pl-[15px] pr-[15px] absolute top-0 left-0 "
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "100%", opacity: 0 }}
      >
        <span className="absolute top-[20px] right-[15px] text-[24px] m-4 cursor-pointer" onClick={handleToggleMenu}>
          <MdClose className="text-white" />
        </span>
        <div className="logo mb-[40px] flex">
            <Link href="/" className='bg-transparent'>
                <Image src={"/images/logo.png"} alt='logo' width={100} height={100} priority className='object-contain'/>
            </Link>
        </div>
        <div className="mobile-nav__container">
            <ul className='main-menu__list m-0 p-0 '>
                {menuItems.map((item) => renderMenuItem((item)))}
            </ul>
        </div> 
        {/* Add your navigation links or other content here */}
      </motion.div>
    </div>
    </>
  )
}

export default Navbar