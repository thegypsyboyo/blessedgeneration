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
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] w-full h-full lg:pl-[15px]">
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
                            {/* <div className="relative block bg-white shadow-custom border-solid border-borderColor pt-[22px] pb-[30px] px-[30px] border-t-0">
                                <h3 className="text-[26px] leading-[26px] font-[800] -tracking-[0.04em] ">
                                    <Link href={`/donate/donation-info/${item.slug}`} className='text-redLight transition-all duration-500 hover:text-darkBlue'>{item.title}</Link>
                                </h3>
                                <p className="pt-[11px] pb-[21px] text-primaryText">{item.description}</p>
                                <div className="relative block w-full pt-[49px] px-[29px] pb-[20px] bg-borderColor rounded-[20px] border-solid border-borderColor z-[1]">
                                    <div className="relative w-full h-[7%] bg-white rounded-[5px] mb-[3px]">
                                        <div className="relative block h-[7px] rounded-[5px] bg-redLight transition-all duration-[1500ms] " style={{width: item.percentageAchieved}}>
                                            <div className="absolute right-0 bottom-[11px] text-redLight leading-[20px] text-[12px] text-center font-[700] transition-all duration-500 ease-in">
                                                <div className='absolute left-[12px] top-[24px] h-[6px] w-[6px] bg-white rounded-[50%] z-[1] content-[]'/>
                                               {item.percentageAchieved}
                                                <div className='content-[]  absolute left-[5px] top-[17px] h-[20px] w-[20px] bg-redLight rounded-[50%]'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between items-center">
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.raisedAmount}</span>
                                            Raised
                                        </p>
                                        <p className="text-[14px] text-primaryText font-[400] m-0">
                                            <span className="text-[14px] text-primaryDark font-[700] leading-[28px] mr-[5px]">Ksh.{item.goalAmount}</span>
                                            Goal
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Trip