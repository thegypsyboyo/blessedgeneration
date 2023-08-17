import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  text: string,
  link: string,
  className:string,
  style?:string,
}
const AnimatedButton = ({text, link, className, style}:ButtonProps) => {
  return (
    <Link href={link} className={`relative inline-block align-middle appearance-none outline-none bg-yellowColor text-primaryDark text-[14px] font-[800] uppercase tracking-[0] rounded-[30px] py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px] ${style} `}>
        <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%] rounded-[50%] -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%] ${className}`}/>
        {text}
    </Link>
  )
}

export default AnimatedButton