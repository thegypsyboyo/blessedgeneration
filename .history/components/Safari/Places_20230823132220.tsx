"use client"
import React, { useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'

const Places = () => {
    const [isDragging, setIsDragging] = useState(false);
    const handleMouseDown = () => {
        setIsDragging(true);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
  return (
    <section className="py-[50px] w-full h-full">
        <Layout className='flex flex-col overflow-visible'>
            <div className="flex items-center flex-col w-full justify-center">
                <h2 className="text-[33px] leading-[43px] font-[400] text-[#000]">
                    NEVER ENDING FOOTSTEPS 
                </h2>
                <p className="text-primaryText text-[18px] leading-[34px] font-[400] mt-[13px] lg:w-[70%] text-center">
                Lorem ipsum dolor sit amet, pri in persius oporteat, usu ex erat aperiam nusquam. His liber verear ornatus eu. Nobis regione patrioque pri te. 
                </p>
            </div>
        </Layout>
        <div className="flex items-center justify-center mt-7">
            <div className={`card relative  overflow-x-auto  bg-redLight min-w-full min-h-[200px] flex `} >
                {/* <div  style={{backgroundImage: `url(/images/timeline.svg)`}}/> */}
                {/* <div className="absolute top-[85px] left-3 bottom-auto" >
                    <div className="min-w-[20px] h-[24px] bg-center bg-no-repeat bg-contain"style={{backgroundImage: `url(/images/timeline-pin.png)`}} />
                    <div className="table mt-[20px]">
                        <div className="w-[45px] h-[45px] table-cell align-middle ">
                            <Image src="/images/test/gallery-1.jpg " alt="" width={45} height={45} className='w-full h-full object-cover'/>
                        </div>
                        <div className="pl-[10px]">
                            <p>Malindi</p>
                            <span>August 2023</span>
                        </div>
                    </div>

                </div>
                <div className="absolute left-[50%] top-0" >
                    <div className="min-w-[200px] h-[24px] bg-center bg-no-repeat bg-contain"style={{backgroundImage: `url(/images/timeline-pin.png)`}} />
                    <div className="table mt-[20px]">
                        <div className="w-[45px] h-[45px] table-cell align-middle ">
                            <Image src="/images/test/gallery-1.jpg " alt="" width={45} height={45} className='w-full h-full object-cover'/>
                        </div>
                        <div className="pl-[10px]">
                            <p>Malindi</p>
                            <span>August 2023</span>
                        </div>
                    </div>

                </div>
                <div className="absolute right-[0] top-[50px]" >
                    <div className="min-w-[20px] h-[24px] bg-center bg-no-repeat bg-contain"style={{backgroundImage: `url(/images/timeline-pin.png)`}} />
                    <div className="table mt-[20px]">
                        <div className="w-[45px] h-[45px] table-cell align-middle ">
                            <Image src="/images/test/gallery-1.jpg " alt="" width={45} height={45} className='w-full h-full object-cover'/>
                        </div>
                        <div className="pl-[10px]">
                            <p>Malindi</p>
                            <span>August 2023</span>
                        </div>
                    </div>

                </div> */}
                <div className="card--content bg-white min-w-[200px] m-2 ">
                    <div className="" >
                        <div className="min-w-[20px] h-[24px] bg-center bg-no-repeat bg-contain"style={{backgroundImage: `url(/images/timeline-pin.png)`}} />
                        <div className="table mt-[20px]">
                            <div className="w-[45px] h-[45px] table-cell align-middle ">
                                <Image src="/images/test/gallery-1.jpg " alt="" width={45} height={45} className='w-full h-full object-cover'/>
                            </div>
                            <div className="pl-[10px]">
                                <p>Malindi</p>
                                <span>August 2023</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
       


    </section>
  )
}

export default Places