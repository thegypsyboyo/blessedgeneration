"use client"
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Layout from './Layout'
import { Achievements, CountUp } from '@/typings';
import urlFor from '@/lib/urlFor';

type Props = {
    achievements:Achievements[]
}

const Achievement = ({achievements}:Props) => {
    console.log("Achievements: ", achievements)

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
    <section className="w-full h-full py-[90px]">
        {achievements.map((item, index) => (
        <div className='w-full h-full' key={index}>
        <Layout>

        <div className='flex items-center flex-col  w-full h-full '>
            <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
                <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">{item.pageSubtitle}</span>
                <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">{item.pageTitle}</h2>
                <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">{item.pageDescription}</p>
            </div>
                </div>
        </Layout>
        <div className="relative w-full h-full lg:h-[400px] flex items-center justify-center flex-wrap">
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-full h-full transform scale-[1.18] bg-center bg-norepeat bg-cover" style={{backgroundImage: `url(${urlFor(item.image).url()})`}} />
            </div>
            <div className="bg-redDark opacity-[.8] h-full w-full top-0 left-0 absolute " /> */}
            <Layout>
                <div className="flex flex-wrap items-center justify-center text-dark z-[2] w-full h-full">
                    {item.countup.map((count, index) => (
                        <div className='flex-grow-0 flex-shrink-0 flex items-center justify-center lg:w-[33.333%] md:w-[50%] w-full' key={index}>
                            <div className="relative flex flex-col items-center justify-center w-full mb-[40px]">
                                <div className="p-0 max-w-[260px] my-0 flex flex-col items-center justify-center">
                                    <span className='block mb-[15px] lg:text-[65px] lg:leading-[75px] md:text-[55px] md:leading-[66px] text-[40px] leading-[50px]  xl:leading-[92px] xl:text-[80px] text-darkBlue text-center   font-bold'><AnimatedNumbers value={count.value}/>{count.suffix}</span>
                                    <span className="text-darkBlue font-bold uppercase mb-[12px] mt-[-6px] text-center">{count.title}</span>
                                    <p className='text-[16px] font-normal leading-[26px] text-center'>{count.description}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
        </div>
        ))}
    </section>
  )
}

export default Achievement