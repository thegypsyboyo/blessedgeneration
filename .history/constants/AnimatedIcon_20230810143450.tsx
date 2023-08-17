import Link from 'next/link';
import React, { ReactNode } from 'react'

interface AnimatedLinkProps {
    href: string;
    icon: ReactNode;
    // animationDelay: string;
}

const AnimatedIcon:React.FC<AnimatedLinkProps> = ({ href, icon }) => {
  return (
    <Link 
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-primaryDark bg-borderColor relative gap-[10px] h-[40px] w-[40px] flex items-center justify-center text-center text-[14px] rounded-full z-[1] hover:text-white group overflow-hidden transition-all duration-500'
    >
        <span className='absolute content-[] top-0 left-0 right-0 h-full bg-primaryBase delay-[0.1s] ease-in-out transition-all duration-500 opacity-100  transform origin-top scale-y-0 -z-[1] group-hover:opacity-100 group-hover:transform group-hover:scale-y-100'/>
        {icon}
    </Link>
  )
}

export default AnimatedIcon