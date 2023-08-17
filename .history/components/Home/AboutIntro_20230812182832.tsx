import React from 'react'
import Layout from './Layout'
import Image from 'next/image'

const AboutIntro = () => {
  return (
    <section className='py-[120px] w-full h-full'>
        <Layout className="h-full">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full mb-8">
                    <div className="mr-[100px] relative z-[1]">
                        <Image src="/images/test/gallery-1.jpg" alt='main-image' width={200} height={200} priority className='w-full h-full object-cover'/>
                        <div className='absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]'/>
                        <div className="absolute right-[-100px] bottom-[100px]  bg-[#f9f9f9] shadow-custom rounded-[30px] p-[50px]">
                            <div className="text-orangeDefault relative flex text-[50px] font-extrabold mb-1 ">
                                <div className="" data-to="26" data-speed="2000">26</div>
                                <div className="">K</div>
                            </div>
                            <span className="font-semibold ">World Class Worker</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0">
                    <div className="lg:pl-[30px]">
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-darkBlue'>Developing powerful brands &amp; business identities</h2>
                        <p>
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.

                            </p>

                            <ul className='mt-[30px] overflow-hidden ml-0 list-none'>
                                <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] text-darkBlue">
                                    <h5 className='font-bold text-[20px] capitalize'>Highest Success Rates</h5>
                                    <p className='mt-5'>
                                        Resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch
                                    </p>
                                    <span className='absolute '/>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default AboutIntro