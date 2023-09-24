import Image from 'next/image'
import React from 'react'
import Layout from './Layout'

const Video = () => {
  return (
    <>
        <section className="flex flex-col w-full items-center justify-center h-full mt-0 mr-0 mb-[-230px]">
                <Layout className="flex items-center justify-center">
                <div className="mx-auto w-f md:w-[83.333%] flex items-center justify-center p-0 flex-col h-[500px]">
                    <Image src={"/images/testing/gallery-3.jpg"} alt='gallery-3' width={800} height={800} className="w-full h-full object-cover"/>
                </div>
                </Layout>
        </section>
        <section className="w-full h-[550px] bg-[#4f46e5] ">
            <Layout>
                <div className="w-full h-full mx-auto md:w-[83.333%] pt-[290px]">
                    <div className='w-full h-full flex flex-wrap items-center justify-center'>
                        <div className="md:w-[50%] w-full h-full md:pr-[10px]">
                            <div className="w-full h-full">
                                <h5 className="mb-3 text-[#FFFFFF80] text-[18px] font-bold leading-[28px]"><span>Techwind Agency</span></h5>
                                <h2 className="text-white text-[30px] font-semibold leading-[45px]">We are a full-service digital company</h2>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full h-full md:pl-[10px]">
                            <div className="w-full h-full text-[#FFFFFF80] text-[16px] font-normal leading-[26px] ">                                
							Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    </>
  )
}

export default Video