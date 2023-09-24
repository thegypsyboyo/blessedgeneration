"use client"

import React, {useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {BsArrowLeft, BsArrowRight, BsChatDots, BsChatFill, BsFacebook, BsInstagram, BsPhone, BsPhoneFill, BsTwitter, BsYoutube} from "react-icons/bs"

import { TeamDetailsProps } from '../../typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'




const data:TeamDetailsProps[] = [
    {
        image: "/images/testing/gallery-1.jpg",
        bio: "You should be able to find several indispensable facts of about After-Before Breast Enhancement in the following. If there’s at least one fact you didn’t know before, help toimagine the change difference it might make. The first place you think of when you are getting ready. Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence on life on planet Earth than it’s own satellite, the moon. Classifieds are usually the first place you think of when you are getting ready to make a purchase. Whether you want to purchase a vehicle, bed, or pet. The longer they have your catalog in their hands, the best more product.",
        email: "info@lewisonyango",
        location: "Nairobi, Kenya",
        name: "Lewis Meta",
        phone: "+33(456-345-333)",
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
        specialization: "Photo Editor",
    },
]

const TeamDetails:React.FC = () => {
    
  return (
    <section className='w-full h-full block py-[120px] pt-[120px] relative'>
        <Layout>
            {data.map((item, index) => (
            <div className="flex flex-wrap w-full h-full" key={index}>
                <div className="flex-grow-0 flex-shrink-0 md:max-w-[41.6666%] w-full h-full">
                    <div className="rounded-[10px] mb-0 w-full max-w-[520px] inline-block overflow-hidden relative">
                        {/* <Image src={item.image}
                        width={800} height={800} alt='profile-pic' className='w-full'/> */}
                        <div className="mt-[-45px] mx-[30px] mb-[60px] bg-redDark p-[30px] text-white">content</div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 md:max-w-[58.33333%] w-full h-full"></div>
            </div>
            ))}
        </Layout>
    </section>
  )
}

export default TeamDetails