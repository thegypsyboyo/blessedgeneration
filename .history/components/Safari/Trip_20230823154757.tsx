import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'

const Trip = () => {
  return (
    <section className='w-full h-full py-[120px]'>
        <Layout >
            <div className="w-full h-full flex justify-between flex-wrap ">
                <div className="flex-grow-0 flex-shrink-0 w-full mb-4 lg:max-w-[33.3333%] h-full lg:pr-[15px]">
                    <div className="w-full h-full">
                        <h1 className='text-[30px] text-redLight font-nun font-[700] leading-[40px]'>THE TOP 4 DAY TRIPS</h1>
                        <span className="text-[26px] leading-[37px] pb-4 font-[300]  text-primaryText">We are Backpack Traveler, Melissa and Johnatan (that’s us!)</span>
                        <p className="text-primaryText font-[400] leading-[32px] text-[16px] mt-4"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Ad enim iracundia nam, alii at usu. Per eu soluta, sed non mauris vitae erat consequat auctor eu in elit.</p>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] w-full h-full lg:pl-[15px] bg-darkBlue">
                    <div className='w-full h-full flex flex-wrap'>
                    <div className="w-full px-[15px] md:max-w-[50%]
                    flex-grow-0 flex-shrink-0 group flex items-center m-auto justify-center " >
                        <div className="relative mb-[30px] flex flex-col items-center justify-items-center ">
                            <div className="relative block overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt='main-image' width={400} height={400} className='w-full h-full object-cover transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       content
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-[15px] md:max-w-[50%]
                    flex-grow-0 flex-shrink-0 group flex items-center m-auto justify-center " >
                        <div className="relative mb-[30px] flex flex-col items-center justify-items-center ">
                            <div className="relative block overflow-hidden z-[1]">
                                <div className="absolute content-[]  left-0 bottom-0 w-full h-[0] bg-primaryDark bg-opacity-[0.7] opacity-[0] transform  rotate-90 translate-y-[50px] transition-all duration-[900ms] z-[1] group-hover:visible group-hover:opacity-[1] group-hover:h-full  group-hover:rotate-[0] group-hover:translate-y-[0px]"/>
                                <Image src="/images/test/gallery-1.jpg" alt='main-image' width={400} height={400} className='w-full h-full object-cover transform scale-[1] transition duration-500 ease group-hover:scale-[1.05]'/>
                                <div className='absolute bottom-[30px] left-[30px] bg-redLight py-[6px] px-[25px] rounded-[15px] z-[2]'>
                                    <p className='text-[18px] text-white leading-[18px] font-cav font-[700]'>
                                       content
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Trip