import { textContainer, textVariant2 } from '@/utils/motion';
import {motion} from 'framer-motion'

export const TypingText = ({title, className}) => (
    <motion.div
    variants={textContainer}
    className = {`text-[24px] relative leading-[24px] font-[500] mb-[10px] text-primaryBase flex  ${className}`}
    >
      {/* <span className='fill-primaryBase border-solid border-[2px]'/> */}
      <span className='h-[20px] bg-yellowColor w-[2px] mr-4'/>
      {Array.from(title).map((letter, index) =>(
        <motion.span
        variants={textVariant2}
        key={index}
        className='!ml-4'
        >
          {letter === " " ? '\u00A0' : letter}
  
        </motion.span>
      ))}
    </motion.div>
  );