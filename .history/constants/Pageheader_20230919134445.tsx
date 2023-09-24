
import Link from "next/link"
import React from "react"
import { FaHome } from "react-icons/fa"

interface PropsHeader {
    title: string,
    bgImage?: string,
    className?: string,
}

const Pageheader:React.FC<PropsHeader> = ({title, bgImage, className}) => {
  return (
    <>
    {!bgImage ? (
      <div className={`relative py-[150px] z-[1] h-[400px] px-0 overflow-hidden break-words bg-cover bg-center  ${className}`} >
          <div className="elementBefore"/>
          <div className="aferShadow"/>
          <div className="w-full h-[400px]"
          >
              <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full mt-[100%] ">
                  <h1 className="text-white font-[600] tracking-[-0.04em]  lg:text-[40px] lg:leading-[40px] text-[30px] leading-[30px] px-[30px] mb-[20px] inline-block font-man mt-[-10px] capitalize pt-[100px]">{title}</h1>
                  <ul className="relative z-1 space-x-4">
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        <Link href="/"  className="relative flex items-center text-white  text-center ">
                        <FaHome className="mr-2"/>
                        Home 
                        </Link>
                        </li>
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        {title}
                        <span className="lineStraight" /> 
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    ):(
      <div className={`relative py-[150px] z-[1]  h-[400px] px-0 overflow-hidden break-words bg-cover bg-center ${className}`}
      style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className="w-full h-[400px]"
        >
            <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full pt-[100px]">
                <h1 className="text-white font-[600]  px-[30px] tracking-[-0.04em] mb-[20px] lg:text-[40px] lg:leading-[56px] text-[30px] leading-[45px]   inline-block font-man capitalize w-[650px]  text-center ">{title}</h1>
                <ul className="relative z-1 space-x-4">
                      <li className="relative inline-block text-white font-nun font-[500] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        <Link href="/"  className="relative flex items-center text-white  text-center ">
                        <FaHome className="mr-2"/>
                        Home</Link>
                        </li>
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px] ">
                        {title}
                        <span className="lineStraight" /> 
                      </li>
                </ul>
            </div>
        </div>
        <div className="bg-layer"/>
    </div>
    )}
    </>
  )
}

export default Pageheader