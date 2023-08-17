import React from 'react'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faHandHoldingDollar, faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'

const Support = () => {
  return (
    <>
    <section className='relative block mt-[60px] bg-primaryBase pt-[120px] pb-[246px] px-0 z-[1]'>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-center bg-cover bg-no-repeat mix-blend-luminosity opacity-[0.1] -z-[1]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-[100]">
                <div className='bg-center absolute bg-cover w-[1390px] h-[811.2px] overflow-hidden pointer-events-none ' style={{backgroundImage: `url(/images/events/image-1.jpg)`}} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[106px] bg-no-repeat bg-center bg-cover -z-[1]"  style={{backgroundImage: `url(/images/help-shape-1.jpg)`}}/>
        </div>
        <Layout className="">
            <div className="flex flex-wrap w-full items-center justify-center">
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.33333333%] lg:pr-[15px] mt-0">
                    <div className="relative block mb-[19px] w-full">
                        <div className="relative flex w-full items-center ">
                            <div className="relative block">
                                <span className='relative inline-block text-[65px] text-yellowColor transition-all duration-700 delay-75 transform scale-100 '><FontAwesomeIcon icon={faHandsHoldingCircle}/></span>
                            </div>
                            <div className="relative block -top-[2px] ml-[30px] w-full">
                                <h4 className='text-[20px] font-[900] leading-[20px] -tracking-[0.04em] mb-[17px] w-full'>
                                    <Link href="" className='text-white transition-all duration-700 hover:text-yellowColor'>Become A Volunteer</Link>
                                </h4>
                                <p className="text-[16px] text-white opacity-60">There are many variations of but the majority have simply free text suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.33333333%] lg:pl-[15px] lg:pr-[15px] mt-0">
                    <div className="relative block mb-[19px] w-full">
                        <div className="relative flex w-full items-center">
                            <div className="relative block">
                                <span className='relative inline-block text-[65px] text-yellowColor transition-all duration-700 delay-75 transform scale-100 '><FontAwesomeIcon icon={faHandHoldingDollar}/></span>
                            </div>
                            <div className="relative block -top-[2px] ml-[30px] w-full">
                                <h4 className='text-[20px] font-[900] leading-[20px] -tracking-[0.04em] mb-[17px] w-full'>
                                    <Link href="" className='text-white transition-all duration-700 hover:text-yellowColor'>Quick Fund Raising </Link>
                                </h4>
                                <p className="text-[16px] text-white opacity-60">There are many variations of but the majority have simply free text suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.33333333%] lg:pl-[15px] lg:pr-[15px] mt-0">
                    <div className="relative block mb-[19px] w-full items-center">
                        <div className="relative flex w-full items-center">
                            <div className="relative block">
                                <span className='relative inline-block text-[65px] text-yellowColor transition-all duration-700 delay-75 transform scale-100 '><FontAwesomeIcon icon={faAward}/></span>
                            </div>
                            <div className="relative block -top-[2px] ml-[30px] w-full">
                                <h4 className='text-[20px] font-[900] leading-[20px] -tracking-[0.04em] mb-[17px] w-full'>
                                    <Link href="" className='text-white transition-all duration-700 hover:text-yellowColor'>Support A Child </Link>
                                </h4>
                                <p className="text-[16px] text-white opacity-60">There are many variations of but the majority have simply free text suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>

    <section className='relative block -mt-[155px] mb-[200px] z-[1] w-full h-full'>
        <Layout className='' >
            <div className="relative block bg-primaryDark pt-[100px] pb-[90px] px-[100px] w-full z-[1] rounded-[30px]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center rounded-[30px] opacity-10 -z-[1]" style={{backgroundImage: `url(/images/events/image-4.jpg)`}} />
                <div className="relative block overflow-hidden mb-[37px]">
                    <div className="relative block float-left">
                        <div className="mb-0 relative block -mt-[4px]">
                            <span className="text-yellowColor text-[24px] font-[700] leading-[24px] mb-[10px] font-cav">Donate to urgent cause</span>
                            <h2 className="m-0 text-white text-[50px] leading-[60px] font-[900] -tracking-[0.04] mt-[6px]">Support a child through collage & University</h2>
                        </div>
                    </div>
                    <div className="relative block float-right text-right mt-0 ">
                        <p className="text-yellowColor text-[16px] font-nun">If you want details for this <span className='font-bold uppercase strong'>Cause</span>, click on this button</p>
                        <div className='relative block mt-[21px] mb-[19px]'>
                            <AnimatedButton style='hover:text-black' className=' bg-white ' link='/donate' text='Donate now'/>
                        </div>
                        <p className="text-[24px] text-white font-[700] font-cav leading-[24px] w-full mr-[10px]">10 Aug 2023</p>
                    </div>
                </div>
                <div className="relative block w-full z-[1]">
                    <div className="relative w-full h-[20px] bg-primaryBase rounded-[10px] mb-[13px] ">
                        <div className="relative block h-[12px] rounded-[6px] bg-white top-[4px] left-[5px] transition-all duration-[1500ms]"  style={{width: "40%"}}>
                            <div className="absolute right-0 bottom-[25px] text-white leading-[18px] text-center font-[500] transition-all duration-500 ">40%</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className="text-yellowColor font-[500] m-0  space-x-4">
                            <span className="text-[20px] text-white font-[500] leading-[28px] mr-2">Ksh.28,000</span>
                            Donated 

                        </p>
                        <p className="text-yellowColor font-[500] m-0  space-x-4">
                            <span className="text-[20px] text-white font-[500] leading-[28px] mr-2">Ksh.80,000</span>
                            Goal
                        </p>

                    </div>
                </div>
            </div>
        </Layout>
    </section>
    </>
  )
}

export default Support