"use client"
import React, { useState } from 'react'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate, faGift, faGifts, faGraduationCap, faMinusSquare, faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { QA } from '@/typings'


const qa:QA[] = [
    {
        question: "Become A Volunteer Leader",
        answer: "Atque corrupti quos dolores et quas molestias excepturi sintoc piditate non provident, similique sunt inculpa qui officia deseru animi eaque ipsa quae ab illo inventore.",
        category: ["Donation Faq"],
    },
    {
        question: "Become A Volunteer Leader",
        answer: "Atque corrupti quos dolores et quas molestias excepturi sintoc piditate non provident, similique sunt inculpa qui officia deseru animi eaque ipsa quae ab illo inventore.",
        category: ["Charity Faq"]
    },
    {
        question: "Become A Volunteer Leader",
        answer: "Atque corrupti quos dolores et quas molestias excepturi sintoc piditate non provident, similique sunt inculpa qui officia deseru animi eaque ipsa quae ab illo inventore.",
        category: ["General Faq"]
    }
  ]

  type Props = {
    faqs:QA[]
  }
const Faq = ({faqs}:Props) => {
    
    const itemsData = [
        {
          icon: faDonate,
          text: 'Quick Fundraise',
        },
        {
          icon: faGifts,
          text: 'Make a Donation',
        },
        {
          icon: faGraduationCap,
          text: 'Give scholarship',
        },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggleClick = (index: number) => {
        if (index === openIndex) {
        // Clicked on the open accordion, so close it
        setOpenIndex(null);
        } else {
        // Clicked on a different accordion, so open it
        setOpenIndex(index);
        }
    };
  return (
    <section className="py-[120px] w-full h-full bg-redDark ">
        <Layout>
            <div className="w-full h-full flex flex-wrap items-center justify-center">
                <div className="fadein-left flex-shrink-0 flex-grow-0 lg:max-w-[50%] mb-[20px] lg:pr-[15px] w-full pr-0">
                    <div className="w-full items-center flex relative flex-wrap">
                    <h3 className="w-full text-[#e3e3e3] text-[16px] font-semibold uppercase leading-[19px] mb-[20px]">Frequently Asked Question’s</h3>
                    <h2 className="w-full text-white text-[40px] leading-[55px] font-bold  mt-[6px] capitalize font-man mb-[15px]">How Can We Help?</h2>
                    <p className="w-full text-[#f9f9f9f9] text-[16px] font-normal leading-[28px] mb-[15px]">    
                    Alienum phae dru m torquatos n ec eu Alienum phaedrum torquatos nec. Alienu phaedrum torquatos, hem ei est Alienum phae dru nec euvis detrax culis ex, nihis in mei. Mei an pericula euripidis.
                    </p>

                    <div className="mt-[20px] w-full">
                        <div className="w-full flex mx-auto relative flex-wrap ">
                            {itemsData.map((item, index) => (
                            <div className="flex-grow-0 flex-shrink-0 md:w-[33.333%] w-full h-full px-[10px] my-[10px]" key={index}>
                                <div className="py-[36px] bg-yellowColor flex items-center justify-center px-[39px] rounded-[40px]">
                                    <div className="w-full flex items-center justify-center flex-col">
                                        <div className="mb-[20px]">
                                            <FontAwesomeIcon icon={item.icon} className="text-[50px] text-white transition-all duration-300"/>
                                        </div>
                                        <div className="">
                                        <h3 className="text-white text-[17px] font-extrabold uppercase leading-[21px] text-center mt-3">
                                            <Link href="#" className="text-center ">{item.text}
                                            </Link>
                                        </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 md:mt-0 mt-[20px]  lg:max-w-[50%] lg:pl-[15px] w-full pl-0 h-full items-center jsutify-center ">
                    <div className="w-full h-full text-left transition-all duration-300">
                        {faqs.map((item, index) =>(
                        <div className="mb-[13px] w-full transition-all duration-300" key={index}>
                            <div className={`${ index === openIndex ? "": "rounded-[10px]"} rounded-tl-[10px] rounded-tr-[10px] py-[20px] px-[30px] transitiona-all duration-300  bg-[#fafafa]`} onClick={() => handleToggleClick(index)}>
                                <span className="text-darkBlue float-right text-right">
                                    <span className={`${ index === openIndex ? "hidden": ""} cursor-pointer text-yellowColor text-[22px] `} onClick={() => handleToggleClick(index)}><FontAwesomeIcon icon={faPlusSquare}/></span>
                                    <span className={`${ index === openIndex ? "": "hidden"} cursor-pointer  text-yellowColor text-[22px]`} onClick={() => handleToggleClick(index)}>
                                        <FontAwesomeIcon icon={faMinusSquare}/>
                                    </span>
                                </span>
                                <div className="text-[17px] font-bold capitalize leading-[21px] text-darkBlue">{item.question}</div>
                            </div>
                            <div className={`${index === openIndex ? "transition-all duration-300" : "hidden"} rounded-bl-[10px] rounded-br-[10px] bg-[#fafafa] text-darkBlue text-[15px] leading-[30px] font-normal py-[5px] px-[30px] border-t border-t-[#d5d8dc] transition-all duration-300`}>
                            <p>{item.answer}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Faq