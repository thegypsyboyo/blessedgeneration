'use client'

import React, { useState, useEffect, useRef } from "react"
import Link from 'next/link';
import {FaInstagram, FaPlus, FaSearch, FaTwitch, FaYoutube} from "react-icons/fa"
import {FaTwitter, FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {MdClose, MdLocationOn,MdKeyboardArrowLeft, MdKeyboardArrowDown} from "react-icons/md"
import {GiAlarmClock, GiFarmer} from "react-icons/gi"
import {BsEnvelopeOpen, BsTelephone} from "react-icons/bs"
import { BiDonateBlood, BiPhone, BiSolidDonateHeart } from "react-icons/bi";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { NavbarSocials } from "@/typings";
import Image from "next/image";
import { CustomLink } from "@/constants/CustomLink";
import { usePathname } from "next/navigation";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faCheckCircle, faClose, faLocation, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
// const logo = "/images/logo/logo.svg"

type Props = {
    navquery:NavbarSocials[] 
}

interface MenuItem {
    id: number;
    label: string;
    path: string;
    children?: MenuItem[];

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
      path: '/about',
      children: [
        {
          id: 17,
          label: 'About Us',
          path: '/about'
        },
        {
          id: 19,
          label: 'The Team',
          path: '/team'
        },
      ]
    },
    {
      id: 3,
      label: 'Our Work',
      path: '/services',
    },
    {
      id: 33,
      label: 'Blog',
      path: '/blog',
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
          label: 'FAQs',
          path: '/FAQ'
        },
        {
          id: 9,
          label: 'Gallery',
          path: '/portfolio'
        },
      ]
    },
    {
        id: 13,
        label: "Contact",
        path: "/contact"
    },
    {
        id: 24,
        label: "Donate",
        path: "/donate"
    }
];

const useClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, handler]);
};



const NavMenu = ({navquery}:Props) => {
    const [isMetaHeaderSticky, setIsMetaHeaderSticky] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentPath = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [navSocials, setNavSocials] = useState<NavbarSocials[] | null >(null)
    const [loading, setLoading] = useState(true);
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleToggleMenuClose = () =>  {
        setIsOpen(false)
    }

    const toggleMenuAbout = () => {
        // Toggle the menu state
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuAbout = () => {
        // Close the menu
        setIsMenuOpen(false);
    };

   
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
            className={`menu-item-has-children has-dropdown ${isActive ? 'active' : ''}`}
            onClick={handleSubmenuClick}
          >
            {/* <Link href={item.path}> */}
              <span
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  }
                }}
              >
                <Link href={item.path}>
                    {item.label}
                </Link>
                {hasChildren && (isActive ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />)}
              </span>
            {/* </Link> */}
            {hasChildren && (
              <ul className={`sub-menu ${isActive ? 'active' : ''}`}>
                {item.children?.map((child) => renderMenuItem(child))}
              </ul>
            )}
          </li>
        );
    };

    useEffect(() => {
        function handleScroll() {
          const metaHeader = document.querySelector(".meta-header-area") as HTMLElement;
          const mainHeader = document.querySelector(".header-main-2") as HTMLElement;
          const currentScrollPosition = window.scrollY;

          if( currentScrollPosition > mainHeader.offsetTop + mainHeader.offsetHeight) {
            setIsMetaHeaderSticky(true);
            metaHeader.style.display = "block";
          }else if (window.scrollY <= 0) { // check if the user has scrolled to the top of the page
            setIsMetaHeaderSticky(false);
            metaHeader.style.display = "block"; // show the meta header
          }  else {
            setIsMetaHeaderSticky(false);
            metaHeader.style.display = "none";
          }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        const fetchNavSocials = async () => {
            try {
                const query = groq`*[_type == "navbar"] {
                    ...,
                    socials[]->{
                        platform,
                        url
                    }
                }`
                const response = await client.fetch(query);
                setNavSocials(response);
                setLoading(false);
            } catch (error) {
                console.error("Error Loading Items: ", error);
                setLoading(false);
            }
        }
        fetchNavSocials();
    }, []) 

    useClickOutside(menuRef, handleToggleMenuClose);
  return (
    <React.Fragment>
       
        <header className="header-main">
            <div className="header-top-area relative !bg-[#2f3a51] block w-full" >
            {navSocials? (
                <Layout className="" >
                    {navSocials?.map((item, index) => (
                    <div className="header-top-inner flex flex-wrap flex-row justify-between items-center w-full" key={index}>
                        <div className="header-top-left float-left ">
                            <div className="header-top-socials relative flex items-center w-full">
                                <div className="w-[100px]">
                                    <h2 className="text-white text-[16px] leading-[20px] font-bold capitalize ">follow us</h2>
                                </div>
                                    <ul className="relative block overflow-hidden">
                                    {item.socials.map((social, index) => (       
                                        <li key={index} className="relative inline-block float-left">
                                        <a href={social.url} rel="noreferrer noopener" target="_blank" className="relative flex items-center justify-center w-[55px] h-[55px] text-[#fff] text-[14px]tex-center z-[1]  ">
                                            <span className="content-[] absolute top-[18px] left-0 bottom-[18px] w-[1px] bg-light z-[-1]"/>
                                            {/* <FaFacebookF/> */}
                                            {social.platform === "facebook" && <FaFacebookF/>}
                                            {social.platform === "instagram" && <FaInstagram/>}
                                            {social.platform === "linkedin" && <FaLinkedinIn/>}
                                            {social.platform === "twitter" && <FaTwitter/>}
                                            {social.platform === "twitch" && <FaTwitch/>}
                                            {social.platform === "youtube" && <FaYoutube/>}    
                                        </a>
                                        </li>
                                        ))}

                                     
                                    </ul>
                                <div className="social-links">
                                </div>
                            </div>
                        </div>
                        <div className="header-top-right  relative flex items-center ml-auto float-right">
                            <ul className="relative block">
                                <li className="leading-[23px] relative inline-block float-left pl-[26px] pr-[25px] text-white text-[16px] font-normal m-0 ">
                                    <span className="text-white text-[16px] font-normal m-0 mr-3 "><FontAwesomeIcon icon={faPhone} /></span>
                                    <Link href={`tel:${item.emergencyContact}`} className="">{item.emergencyContact}</Link>
                                </li>
                                <li className="leading-[23px] relative inline-block float-left pl-[26px] pr-[25px] text-white text-[16px] font-normal m-0 ">
                                    <span className="text-white text-[16px] font-normal m-0 mr-3 "><FontAwesomeIcon icon={faLocation} /></span>
                                    <span className="uppercase">malindi kenya p.o box 3236</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ))}
                </Layout>
            ): (
            <div>
                <p className="flex justify-center">Loading ...</p>
            </div>
            )}
            </div>

            <div className={`meta-header-area !bg-shadow !bg-white !text-dark ${isMetaHeaderSticky ? "sticky !bg-white" : "!bg-white" }`}>
                {navSocials? (
                <div className="container">
                    {navSocials?.map((item, index) => (
                    <div className="meta-header-inner" key={index}>
                        <div className="meta-header-left">
                            <div className="header-logo">
                                {item.logo ? (
                                <Link href="/">
                                    <Image width={800} height={800} className="object-contain" src={urlFor(item?.logo).url()} alt="logo" />
                                </Link>
                                ): (
                                    <Link href="/">
                                    <Image width={800} height={800} className="object-contain" src="/images/logo/logo.svg"alt="logo" />
                                </Link>
                                )}
                            </div>
                        </div>
                        <div className="meta-header-right">

                            {isMetaHeaderSticky ? (                           
                            <div className="mobile-menu">
                                <ul>
                                    <li className="active-class menu-item-has-children">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className=" menu-item-has-children">
                                        <Link href="/about">About <FaPlus/></Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/team">Team</Link></li>
                                            
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/services">Our Work</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/services">Service Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/portfolio">Knowledge</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="/FAQ">FAQ</Link></li>
                                          
                                         </ul>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li><Link href="/contact">Contact</Link></li>             
                                </ul>          
                            </div>
                             ): (
                            <div className="meta-items meta-header-meta-items d-none">
                                <div className="meta-item d-none">
                                    <div className="meta-ico ">
                                        <BiPhone/>
                                    </div>
                                    <div className="meta-content">
                                        <div className="meta-title !text-dark">CONTACT INFORMATION</div>
                                        <p>
                                            <a className="!text-redDark" href={`tel: ${item.emergencyContact}`}>(+254) 76-456-456</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-item d-none">
                                    <div className="meta- w-[55px] h-[55px] rounded-full p-1 bg-yellowColor text-white flex items-center justify-center">
                                        <BsEnvelopeOpen/>
                                    </div>
                                    <div className="meta-content">
                                        <div className="meta-title !text-dark !font-man">Email Address</div>                
                                        <p>
                                            <a className="!text-redDark " href={`mailto: ${item.emailAddress}`}>{item.emailAddress}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )}
                                                       
                           {isMetaHeaderSticky ? (                         
                            <div onClick={toggleMenuAbout} className="cursor-pointer"><HiOutlineBars3CenterLeft className="text-dark text-[20px]"/></div>
                            ): (
                                <Link href="/donate" className="border-btn-rounded relative inline-block pl-[25px] pr-[30px] bg-[#d53f34] text-white text-[16px] leading-[60px] font-bold uppercase rounded-[10px] transition-all duration-500 z-[1] sticky-link">
                                 <span className="relative z-[1] ">
                                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3"/>
                                 Donate now
                                 </span>
                              </Link>
                            )}
                             
                            <div className="menu-bar-toggle !bg-dark" onClick={handleToggleMenu}>
                                <div className="side-toggle">
                                    <div className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                    ))}
                </div>
                ): (
                    <div>
                        <p className="flex justify-center">Loading ...</p>
                    </div>
                )}
            </div>

            <div className="header-main-2 ">
                {navSocials? (

                <div className="container">
                    {navSocials.map((item,index) =>(
                    <div className="row" key={index}>
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main-content-wrapper">
                                <div className="header-main-left !bg-yellowColor">
                                    <div className="header-menu">
                                        <div className="mobile-menu">
                                            <ul className="!text-white">
                                                <li className="active-class menu-item-has-children">
                                                    {/* <Link href="/">Home</Link> */}
                                                    <CustomLink className='!relative !text-white' href='/' title='Home'  />
                                                    {/* <Link href="" className={`$ relative group !text-redDark text-[16px] flex transition-all duration-500 font-[600]`}>
                                                        Home
                                                        <span className={`h-[1px] bg-redDark inline-block absolute left-0 !-bottom-[2px]  group-hover:w-full transition-[width] ease duration-300 ${currentPath === "Home" ? 'w-full': 'w-0'}`}>&nbsp;</span>

                                                    </Link> */}
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/about">About</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/about">About Us</Link></li>
                                                        <li><Link href="/team">The Team </Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/services">Our Work</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link  href="/portfolio">Knowledge</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                                        <li><Link href="/FAQ">FAQs</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>        
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="header-search">
                                        <form action="#" className="action ">
                                            <div className="single-input">
                                                <input type="text" placeholder="Keyword here..." className="outline-none border-none bg-transparent !text-light"/>
                                                <button type="submit">
                                                    <FaSearch/>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-main-right">
                                    <div className="meta-item !bg-yellowColor">
                                        {/* <div className="meta-item-icon">
                                            <BsTelephone/>
                                        </div> */}
                                        <div className="meta-item-content">
                                            <div className="meta-title">contact</div>
                                            <p>
                                                <a href={`tel: ${item.emergencyContact}`}>{item.emergencyContact}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                ):  (
                    <div>
                        <p className="flex justify-center">Loading ...</p>
                    </div>
                )}
            </div>
        </header>

        {navSocials? (
        <div className={`${isOpen ? "fix" : "hidden" }`} ref={menuRef}>
        {navSocials?.map((item, index) => (
            <div className="side-info info-open" key={index}>
                <div className="side-info-content">
                    <div className="offset-widget mb-[40px]">
                        <div className="row items-center">
                            <div className="col-9">
                                {item.logo ? (
                                <Link href="/">
                                    <Image width={100} height={100}  src={urlFor(item.logo).url()} alt="logo" />
                                </Link>

                                ):(
                                <Link href="/">
                                    <Image width={100} height={100}  src="/images/logo/logo.svg" alt="logo" />
                                </Link>
                                )}
                            </div>
                            <div className="col-3">
                                <button className="side-info-close" onClick={handleToggleMenuClose}>
                                    <MdClose/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="side-mobile-menu">
                        <ul >
                            {menuItems.map((item) => renderMenuItem((item)))}
                        </ul>
                    </nav>
                    <div className="offset-support mb-[30px]">
                        <div className="footer-support">
                            <div className="item-support-meta">
                                <div className="item-icon">
                                    <BsTelephone/>
                                </div>
                                <div className="item-content">
                                    <p>Our Contact</p>
                                    <div className="support-number">
                                    <a href={`tel: ${item.emergencyContact}`}>{item.emergencyContact}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-social mb-[30px]">
                        <div className="footer-social">
                            <span>Connect:</span>
                            <div className="social-links">
                                <ul>
                                {item.socials.map((social, index) => (       
                                    <li key={index}>
                                    <a href={social.url} rel="noreferrer noopener" target="_blank">
                                        {social.platform === "facebook" && <FaFacebookF/>}
                                        {social.platform === "instagram" && <FaInstagram/>}
                                        {social.platform === "linkedin" && <FaLinkedinIn/>}
                                        {social.platform === "twitter" && <FaTwitter/>}
                                        {social.platform === "twitch" && <FaTwitch/>}
                                        {social.platform === "youtube" && <FaYoutube/>} 
                                    </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         ))}
        </div>
        ): (null)}

        {isMenuOpen && (
            <div className={`fixed overflow-y-auto w-[500px] p-[20px] pt-[120px] h-full block text-white bg-white top-0 right-0  shadow-md transition-all duration-500 z-[9999] ${isMenuOpen ? "transform translate-x-[0px] transition-all duration-[1200ms] ease-in":"transform translate-x-[500px]"}`}>
                {navSocials && (
                    <>
                    {navSocials.map((item, index) => (
                        <div key={index}>
                            <div className="rounded-full text-[#0e2258] text-[20px] font-normal h-[40px] leading-[38px] relative text-center top-[-85px] w-[40px] z-[2] float-right cursor-pointer" onClick={closeMenuAbout}> 
                                <FontAwesomeIcon icon={faClose}/>
                                </div>
                                <div className="top-0 relative z-[1] mb-[20px]">
                                    <Image src={urlFor(item.logo).url()} width={800} height={800} alt="" className="w-[180px] object-contain"/>
                                    <p className="mt-4 text-[16px]  text-primaryText">{item.aboutWebsite}</p>
                                </div>
                                <div className="relative z-[1] mb-[50px]">
                                    <ul className="pl-0 ">
                                        <li className="flex mb-[15px] text-[15px] ">
                                            <div className="text-dark">
                                                <p className="uppercase font-extrabold text-redDark ">Address</p>
                                                <strong className="text-[#232323] font-normal text-[16px] ">Malindi Kenya, P.O BOX 5236</strong>
                                            </div>
                                        </li>
                                        <li className="flex mb-[15px] text-[15px] ">
                                            <div className="text-dark">
                                                <p className="uppercase font-extrabold text-redDark ">Email</p>
                                                <strong className="text-[#232323] font-normal text-[16px] ">info@blessedgenerationkenya.com</strong>
                                            </div>
                                        </li>
                                        <li className="flex mb-[15px] text-[15px] ">
                                            <div className="text-dark">
                                                <p className="uppercase font-extrabold text-redDark ">phone</p>
                                                <strong className="text-[#232323] font-normal text-[16px] ">(+255) 7 456-341</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="header-top-socials relative flex items-center w-full">
                                <div className="w-[100px]">
                                    <h2 className="uppercase font-extrabold text-redDark ">follow us</h2>
                                </div>
                                    <ul className="relative block overflow-hidden">
                                    {item.socials.map((social, index) => (       
                                        <li key={index} className="relative inline-block float-left">
                                        <a href={social.url} rel="noreferrer noopener" target="_blank" className="relative flex items-center justify-center w-[55px] h-[55px] text-redDark text-[14px]tex-center z-[1]  ">
                                            <span className="content-[] absolute top-[18px] left-0 bottom-[18px] w-[1px] bg-[#ccc] z-[-1]"/>
                                            {/* <FaFacebookF/> */}
                                            {social.platform === "facebook" && <FaFacebookF/>}
                                            {social.platform === "instagram" && <FaInstagram/>}
                                            {social.platform === "linkedin" && <FaLinkedinIn/>}
                                            {social.platform === "twitter" && <FaTwitter/>}
                                            {social.platform === "twitch" && <FaTwitch/>}
                                            {social.platform === "youtube" && <FaYoutube/>}    
                                        </a>
                                        </li>
                                        ))}

                                     
                                    </ul>
                                <div className="social-links">
                                </div>
                            </div>
                        </div>
                    ))}
                    </>
                )}
            </div>
        )}

        <div className={`transform translate-x-[1500px] transition-all duration-1000 ${isOpen ? "overlay-open translate-x-[0px]" : "none transition-all duration-1000"} ${isMenuOpen ? "overlay-open translate-x-[0px]" : "none transition-all duration-1000"}`}  />

    </React.Fragment>


  )
}

export default NavMenu