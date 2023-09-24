"use client"
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Layout from './Layout'


const Achievement = () => {

    const AnimatedNumbers = ({value}:any) => {
        const ref = useRef(null);

        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, {duration: 3000})
        const isInView = useInView(ref, {once: false})

        useEffect(() => {
            if(isInView){
                motionValue.set(value);
            }
        }, [isInView, value, motionValue]);

        useEffect(() => {
          springValue.on("change", (latest:any) =>{
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
            // console.log(latest);
          })
        }, [value,springValue, motionValue]);
        return(
            <span ref={ref}></span>
        )
    }
  return (
    <section className="w-full h-full py-[120px]">
        <Layout>
        <div className='flex items-center  justify-between w-full h-full'>
                    <div className='flex items-end flex-col'>
                        <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={50}/>+</span>
                        <h2>satisfied clients</h2>
                    </div>
                    <div className='flex items-end flex-col'>
                        <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={40}/>+</span>
                        <h2>projects completed</h2>
                    </div>
                    <div className='flex items-end flex-col'>
                        <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={4}/>+</span>
                        <h2>years experience</h2>
                    </div>

                </div>

        </Layout>
    </section>
  )
}

export default Achievement