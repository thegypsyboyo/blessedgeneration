import React from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'
import Image from 'next/image'

interface HelpInfo {
    image: string;
    title: string;
}

const HowToHelp = () => {
    const helpInfo:HelpInfo[] = [
        {
            image: "/images/testing/gallery-1.jpg",
            title: "media",
        },
        {
            image: "/images/testing/gallery-1.jpg",
            title: "mobolization",
        },
        {
            image: "/images/testing/gallery-1.jpg",
            title: "projection",
        },
        {
            image: "/images/testing/gallery-1.jpg",
            title: "support",
        },

    ]
  return (
    <section className='w-full min-h-full mt-11 pt-[120px] py-[90px] bg-redDark'>
        <div className="h-full w-full flex flex-col  items-center" >
             <div className='w-full h-full text-center mb-[30px]'>
                <h4 className="text-white lg:text-6xl text-4xl uppercase font-bold">How can you help ?</h4>
            </div>
            <Layout className="h-full flex items-center !justify-center !overflow-visible mt-[40px]">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    <div className='h-full md:w-[48%] w-full flex flex-shrink-0 flex-grow-0 md:mb-0 mb-3'>
                        <div className="w-full h-full relative mb-[30px] mr-[20px]">
                            <h3 className="text-2xl uppercase text-light font-bold pb-3">help for cause</h3>
                            <p className="text-white font-normal pb-8">Fourth Estate members are Invisible Children’s most faithful supporters. By giving what they can each month they advance all aspects of our mission to end the atrocities of Joseph Kony and his rebel army.</p>

                            <div className="flex flex-wrap w-full h-full mt-6">
                                {helpInfo.map((item, index) => (
                                <div className="w-[22%] mx-2 " key={index}>
                                    <div className="bg-yellowColor h-full w-full p-1 mr-2 text-center">
                                        <Image src={item.image} alt='' width={800} height={800}/>
                                    </div>
                                    <div className="w-full h-full bg-darkBlue"></div>
                                    <span className="uppercase text-center mt-4">{item.title}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-full md:w-[52%] w-full  flex flex-shrink-0 flex-grow-0 bg-yellowColor">
                        <div className="w-full h-full">
                            <VideoPlayer videoId='' className='!w-full'/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default HowToHelp