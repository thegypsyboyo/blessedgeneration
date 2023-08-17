import React from 'react'
import Layout from './Layout'
import Image from 'next/image'

const AboutIntro = () => {
  return (
    <section className='py-[120px] w-full h-full'>
        <Layout className="h-full">
            <div className="flex items-center flex-wrap w-full h-full justify-between">
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full">
                    <div className="mr-[100px] relative z-[1]">
                        <Image src="/images/test/gallery-1.jpg" alt='main-image' width={200} height={200} priority className='w-full h-full object-cover'/>
                        <div className='absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]'/>
                        <div className="absolute right-[-100px] bottom-1/2  bg-[#f9f9f9] shadow-custom rounded-[30px] p-[50px]">
                            <div className="text-orangeDefault relative flex text-[50px] font-extrabold mb-1 ">
                                <div className="" data-to="26" data-speed="2000">26</div>
                                <div className="">K</div>
                            </div>
                            <span className="font-semibold ">World Class Worker</span>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </Layout>
    </section>
  )
}

export default AboutIntro