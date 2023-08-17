"use client"

import {motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1
        }
    }
}


export const AnimatedText = ({text, className}) => {
  return (
    <span className="w-full">
        <motion.span 
            className={`inline-block w-full text-darkBlue font-bold capitalize text-8xl ${className}`}
            variants={quote}
            initial = "initial"
            whileInView = "animate"
        >
            {
                text.split(" ").map((word, index) => 
                    <motion.span 
                        key={word+'-'+index } className="inline-block"
                        variants={singleWord}
                        // animate="animate"
                        // initial="initial"
                    
                    >{word}&nbsp;</motion.span>
                )
            }
        </motion.span>
    </span>
  )
}
