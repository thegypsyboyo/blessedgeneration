"use client"
import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeartPulse, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion"
import { footerVariants } from '@/utils/motion'

const Footer = () => {
  return (
    <footer className='font-man relative block z-[1] w-full h-full bg-primaryDark overflow-hidden'>
      <div className='font-man relative block z-[1] w-full h-full bg-primaryDark'>
      <div 
       style={{backgroundImage: `url(/images/slider/slide-1.jpg)`}}
       className='bg-cover h-full w-full absolute top-0 bottom-0 left-0 right-0 mix-blend-luminosity bg-no-repeat bg-center opacity-[0.03] -z-[1]' 
       />
      <Layout className='text-white flex flex-col'>
        <div className='relative block pt-[100px] px-0 pb-[98px]'>
          <div className="flex flex-wrap">
            <motion.div 
            variants={footerVariants}
            initial = "hidden"
            animate="show"
            className="w-full  mb-[35px]  lg:max-[50%] md:max-w-[50%] xl:max-w-[33.333333%] flex-shrink-0">
              <div className="relative block mt-0 mr-[50px]">
                <div className="relative block mb-[15px]">
                  <Link href="/" className=' relative block'>
                    <Image src="/images/logo.png" alt='logo' priority  width={130} height={130} className='h-full object-contain w-[130px]'/>
                  </Link>
                </div>
                <div className="relative block text-[16px] pb-[20px]">
                  <p className='#98a8a5 font-[400]'>
                  Nulla ultricies justo sit amet ante efficitur,eget pharetra augue efficitur. Vestibulum viverra, dolor sit amet ultricies.
                  </p>
                </div>
                <div className="relative block">
                  <Link href="/" className="relative inline-block text-[14px] font-[800] text-primaryDark bg-yellowColor py-[10px] px-[40px] rounded-[25px] transition-all duration-500 hover:bg-transparent hover:border hover:border-solid hover:text-white">
                    <span className='flex justify-between items-center'><FontAwesomeIcon icon={faHeartPulse} className="mr-2"/> Donate now</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
            variants={footerVariants}
            initial = "hidden"
            whileInView="show"
            className='w-full mb-[35px] xl:max-w-[16.66666%] lg:max-w-[50%] md:max-w-[50%] flex-shrink-0'>
              <div className="relative block">
                <h3 className='text-[20px] text-white font-[800] leading-[20px] mb-[27px]  -tracking-[0.02em]'>Links</h3>
                <ul className="relative block space-y-[11px] group">
                  <li className='relative block group-hover:text-white'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">About</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Blogs & Insight</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Contact</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Recent Events</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Latest news</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Donations</Link>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
            variants={footerVariants}
            initial = "hidden"
            whileInView="show"
            className='w-full  mb-[35px]  xl:max-w-[16.66666%] lg:max-w-[50%] md:max-w-[50%] flex-shrink-0'>
              <div className="relative block">
                <h3 className='text-[20px] text-white font-[800] leading-[20px] mb-[27px]  -tracking-[0.02em]'>Non-profit</h3>
                <ul className="relative block space-y-[11px] group">
                  <li className='relative block group-hover:text-white'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">About</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Blogs & Insight</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Contact</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Recent Events</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Latest news</Link>
                  </li>
                  <li className='relative block'>
                    <Link href="/about" className="relative inline-block text-[15px] text-[#98a8a5] font-[400] transition-all duration-500">Donations</Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
            variants={footerVariants}
            initial = "hidden"
            whileInView="show" 
            className='w-full xl:max-w-[33.33333%] lg:max-w-[50%] md:max-w-[50%]'>
              <div className='relative block mr-[50px]'>
              <h3 className='text-[20px] text-white font-[800] leading-[20px] mb-[27px]  -tracking-[0.02em]'>Contact</h3>
              <p className="text-[#98a8a5] font-[400] pb-[10px]">380 Street Kilda Broklyn Road Melbourne Australia</p>
              <ul className='relative block'>
                <li className='flex items-center'>
                  <div className="relative flex items-center"><span className='reltive text-yellowColor inline-block text-[15px]'>
                    <FontAwesomeIcon icon={faEnvelope}/></span>
                  </div>
                  <div className="ml-[15px]">
                    <p><Link href="mailto:info@blessedgeneration.ke" className='font-[700]  text-white transition-all duration-500 '>info@blessedgeneration.ke</Link></p>
                  </div>
                </li>
                <li className='flex items-center'>
                  <div className="relative flex items-center"><span className='reltive text-yellowColor inline-block text-[15px]'>
                    <FontAwesomeIcon icon={faPhoneAlt}/></span>
                  </div>
                  <div className="ml-[15px]">
                    <p><Link href="tel:( +254) - 74676529" className='font-[700]  text-white transition-all duration-500 '>( +254) - 74676528</Link></p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center mt-[22px] space-x-4">
                <Link href="https://twitter/" className='relative h-[40px] w-[40px] flex items-center justify-center text-center text-white bg-primaryBase rounded-full text-[15px] transition-all duration-500 z-[1] hover:bg-white hover:text-primaryBase'>
                  <FaTwitter/>
                </Link>
                <Link href="https://twitter/" className='relative h-[40px] w-[40px] flex items-center justify-center text-center text-white bg-primaryBase rounded-full text-[15px] transition-all duration-500 z-[1] hover:bg-white hover:text-primaryBase'>
                  <FaFacebookF/>
                </Link>
                <Link href="https://twitter/" className='relative h-[40px] w-[40px] flex items-center justify-center text-center text-white bg-primaryBase rounded-full text-[15px] transition-all duration-500 z-[1] hover:bg-white hover:text-primaryBase'>
                  <FaInstagram/>
                </Link>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
      </div>
      <motion.div className='bg-[#212d2b] overflow-hidden relative block'
       variants={footerVariants}
       initial = "hidden"
       whileInView="show"
      >
        <Layout className=''>
          <span className='flex flex-wrap ml-auto mr-auto py-[25px] text-center font-[400] text-[#98a8a5] text-[15px]'>&copy;All Copyrights by <Link href={"https://www.instagram.com/myadventurers/"} target='_blank' rel='noreffere' className='hover:text-primaryBase transition-all duration-500'> Blessedgenerationkenya.com</Link></span>
        </Layout>
      </motion.div>
    </footer>
  )
}

export default Footer