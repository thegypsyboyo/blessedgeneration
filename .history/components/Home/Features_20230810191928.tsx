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
    <section className='relative block pt-[270px] mt-[120px] pb-[90px] px-0 w-full'>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[645px] bg-orangeDefault -z-[1] full">
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-cover  bg-center mix-blend-luminosity opacity-[0.15]' style={{backgroundImage: `url(/images/events/image-2.jpg)`}}/>
        </div>
        <Layout className='flex flex-col items-center' >
            <div className="relative block -mt-[4px] mb-[46px] text-center">
                <span className="text-yellowColor text-[24px] font-[700] leading-[24px] mb-[10px] font-cav">Help &amp; donate</span>
                <h2 className="m-0 text-white text-[50px] leading-[60px] -tracking-[0.04em] font-[900] mt-[6px]">Find the popular cause <br /> and donate them</h2>
            </div>
            <div className="flex flex-wrap w-full">
                {donationData.map((item, index) => (
                    <div className="w-full px-[15px] lg:max-w-[33.3333%] md:max-w-[50%]
                    flex-grow-0 flex-shrink-0 group" key={index}>
                        <div className="relative block mb-[30px]">
                            <div className="relative block rounded-tl-[20px] rounded-tr-[20px] overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] rounded-tl-[20px] rounded-tr-[20px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px] transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-orangeDefault py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       {item.category}
                                    </p>
                                </div>
                            </div>
                            <div className="relative block bg-white shadow-custom rounded-bl-[20px] rounded-br-[20px] border-solid border-borderColor pt-[22px] pb-[30px] px-[30px] border-t-0">
                                <h3 className="text-[26px] leading-[26px] font-[800] -tracking-[0.04em] ">
                                    <Link href={`/donate/donation-info/${item.slug}`} className='text-primaryDark transition-all duration-500 hover:text-primaryBase'>{item.title}</Link>
                                </h3>
                                <p className="pt-[11px] pb-[21px] text-primaryText">{item.description}</p>
                                <div className="relative block w-full pt-[49px] px-[29px] pb-[20px] bg-borderColor rounded-[20px] border-solid border-borderColor z-[1]">
                                    <div className="relative w-full h-[7%] bg-white rounded-[5px] mb-[3px]">
                                        <div className="relative block h-[7px] rounded-[5px] bg-orangeDefault transition-all duration-[1500ms] " style={{width: item.percentageAchieved}}>
                                            <div className="absolute right-0 bottom-[11px] text-orangeDefault leading-[20px] text-[12px] text-center font-[700] transition-all duration-500 ease-in">
                                                <div className='absolute left-[12px] top-[24px] h-[6px] w-[6px] bg-white rounded-[50%] z-[1] content-[]'/>
                                               {item.percentageAchieved}
                                                <div className='content-[]  absolute left-[5px] top-[17px] h-[20px] w-[20px] bg-orangeDefault rounded-[50%]'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.raisedAmount}</span>
                                            Raised
                                        </p>
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.goalAmount}</span>
                                            Goal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    </section>
  )
}

export default Features