import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'
import { DonationProps } from '@/typings'

const Features:React.FC = () => {
    const donationData:DonationProps[] = [
        {
            category: "education",
            description: "There are many of lorem, but majori have suffered alteration in some form.",
            image: "/images/events/image-3.jpg",
            percentageAchieved: "36%",
            goalAmount: "30,000",
            raisedAmount: "25,270",
            title: "Let’s education for children get good life",
            slug: "lets-education-for-children-get-good-life"
        },
        {
            category: "medicine",
            description: "There are many of lorem, but majori have suffered alteration in some form.",
            image: "/images/events/image-2.jpg",
            percentageAchieved: "57%",
            goalAmount: "30,000",
            raisedAmount: "25,270",
            title: "Let’s education for children get good life",
            slug: "lets-education-for-children-get-good-life"
        },
        {
            category: "food",
            description: "There are many of lorem, but majori have suffered alteration in some form.",
            image: "/images/events/image-5.jpg",
            percentageAchieved: "70%",
            goalAmount: "30,000",
            raisedAmount: "25,270",
            title: "Let’s education for children get good life",
            slug: "lets-education-for-children-get-good-life"
        },
    ]
  return (
    <section className='relative block pt-[270px] mt-[0] pb-[90px] px-0 w-full' >
        

    </section>
  )
}

export default Features