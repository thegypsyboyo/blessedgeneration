"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import { QA } from '@/typings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

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
  


  const [causesItem, setCausesItem] = useState(faqs); 
  const [filteredCauesItems, setFilteredCausesItems] = useState(faqs);
  const [activeFilter, setActiveFilter] = useState<string>("All");

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

  
useEffect(() => {
  setCausesItem(faqs)
  setFilteredCausesItems(faqs)
}, [faqs])

useEffect (() => {
  // filter causes item based on their active filters;
  if (activeFilter === "All") {
    setFilteredCausesItems(causesItem);
  } else {
    const filterData = causesItem.filter((item) => item.category.includes(activeFilter));
    setFilteredCausesItems(filterData);
  }
}, [activeFilter, causesItem]);


const handleFilterClick = (category: string) => {
  setActiveFilter(category);
};

  return (
    <section className='py-[120px] w-full h-full'>
      <Layout className='flex flex-col items-center'>
        <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
            <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">Q&A&apos;s</span>
            <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">Frequently asked questions </h2>
            <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">Gardenias’ mission is to provide our customers with responsive service and unsurpassed quality at an affordable price.</p>
        </div>
        <div className="relative w-full flex-wrap flex flex-col">
        <nav className=''>
              <div className='flex flex-wrap items-center justify-center space-x-3 mb-[35px] text-center'>
                {['All', 'Charity Faq', 'General Faq','Donation Faq' ].map((category) => (
                  <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`capitalize font-bold  my-2 py-[5px] px-[12px] text-darkBlue outline-none transition-all duration-200 hover:bg-darkBlue hover:text-white relative bg-[#f5f5f5] ${activeFilter === category ? '!bg-darkBlue text-white' : ''}`} 
                  >
                  {category}
                  <span className={`${activeFilter === category ? 'content-[] absolute bottom-[-6px] left-[calc(50%-6px)] w-[12px] h-[12px] bg-darkBlue transform rotate-[45deg]' : 'hidden'} content-[] absolute bottom-[-6px] left-[calc(50%-6px)] w-[12px] h-[12px] bg-darkBlue transform rotate-[45deg]`}/>
                  </button>
                ))}
              </div>
          </nav>
          <div className="flex-shrink-0 flex-grow-0 md:mt-0 mt-[20px]  md:max-w-[80%] mx-auto md:pl-[15px] w-full pl-0 h-full items-center jsutify-center ">
                    <div className="w-full h-full text-left transition-all duration-300">
                        {filteredCauesItems.map((item, index) =>(
                        <div className="mb-[13px] w-full transition-all duration-300" key={index}>
                            <div className={`${ index === openIndex ? "": "rounded-[10px]"} rounded-tl-[10px] rounded-tr-[10px] py-[20px] px-[30px] transitiona-all duration-300  bg-[#fafafa]`} onClick={() => handleToggleClick(index)}>
                                <span className="text-darkBlue float-right text-right">
                                    <span className={`${ index === openIndex ? "hidden": ""} text-[#ab3493] cursor-pointer text-[22px] `} onClick={() => handleToggleClick(index)}><FontAwesomeIcon icon={faPlusSquare}/></span>
                                    <span className={`${ index === openIndex ? "": "hidden"} text-[#ab3493] text-[22px] cursor-pointer`} onClick={() => handleToggleClick(index)}>
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