import React from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'
import Image from 'next/image'

const HowToHelp = () => {
  return (
    <section className='w-full min-h-full mt-11 pt-[60px] py-[150px] bg-redDark'>
        <div className="h-full w-full flex flex-col  items-center" >
             <div className='w-full h-full text-center mb-[30px]'>
                <h4 className="text-white text-4xl uppercase font-bold">How can you help ?</h4>
            </div>
            <Layout className="h-full flex flex !items-center !justify-center !overflow-visible mt-[40px]">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    <div className='h-full md:w-[48%] w-full flex flex-shrink-0 flex-grow-0 md:mb-0 mb-3'>
                        <div className="w-full h-full relative mb-[30px] mr-[20px]">
                            <h3 className="text-2xl uppercase text-light font-bold pb-3 text-white">help for cause</h3>
                            <p className="text-white font-normal pb-5">Fourth Estate members are Invisible Children’s most faithful supporters. By giving what they can each month they advance all aspects of our mission to end the atrocities of Joseph Kony and his rebel army.</p>

                            <div className="flex flex-wrap w-full h-full">
                                <div className="w-[22%]">
                                    <Image src="/images/testing/gallery-1.jpg" className='' alt='help-1' width={800} height={800} />
                                    <h4 className="text-center text-4 uppercase leading-[22px] text-white mt-2 font-bold">MEDIA</h4>
                                </div>
                                <div className="w-[22%]">
                                    <Image src="/images/testing/gallery-1.jpg" className='' alt='help-1' width={800} height={800} />
                                    <h4 className="text-center text-4 uppercase leading-[22px] text-white mt-2 font-bold">MEDIA</h4>
                                </div>
                                <div className="w-[22%]">
                                    <Image src="/images/testing/gallery-1.jpg" className='' alt='help-1' width={800} height={800} />
                                    <h4 className="text-center text-4 uppercase leading-[22px] text-white mt-2 font-bold">MEDIA</h4>
                                </div>
                                <div className="w-[22%]">
                                    <Image src="/images/testing/gallery-1.jpg" className='' alt='help-1' width={800} height={800} />
                                    <h4 className="text-center text-4 uppercase leading-[22px] text-white mt-2 font-bold">MEDIA</h4>
                                </div>
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