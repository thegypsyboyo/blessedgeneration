import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { SiWechat } from 'react-icons/si'
import Link from 'next/link'

const Volunteer = () => {
  return (
    <section className='py-[120px] relative block h-full w-full'>
        <Layout className='flex flex-col'>
            <div className='relative -mt-[40px] mb-[46px] flex flex-col items-center justify-center w-full'>
                <span className="text-[24px] text-primaryBase font-semibold leading-[24px] mb-[10px] font-man text-center">Register yourself with us</span>
                <h2 className="m-0 text-primaryDark text-[40px] leading-[45px] font-[800] -tracking-[0.04em] mt-[6px] text-center lg:text-[45px] lg:leading-[50px] xl:text-[50px] xl:leading-[60px]">Let’s join our community to <br/> become a volunteer</h2>
            </div>

            <div className="flex flex-wrap mx-auto mt-auto w-full">
                <div className="flex-shrink-0 flex-grow-0 xl:max-w-[50%] w-full lg:max-w-[50%]">
                    <div className="relative block bg-borderColor rounded-tl-[20px]  py-[60px] px-[60px]">
                        <div className="relative block ">
                            <Image src={"/images/slider/slide-2.jpg"} alt='main-image' width={400} height={500} className="w-full h-full object-fit rounded-[20px]"/>
                        </div>
                        <div className="relative block mt-[32px] ">
                            <h3 className="text-[30px] font-[900] leading-[40px] -tracking-[0.04em] text-primaryDark">Requirements</h3>
                            <p className="text-[16px] pt-[10px] pb-[33px] text-primaryText">
                            Aliquam hendrerit a augue insu image pellentes
                            que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                            Alienum phaedrum torquatos nec eu.
                            </p>
                            <ul className="relative block pl-0 list-none ">
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li>
                                <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Lorem Ipsum is not simply free text</p>
                                    </div>
                                </li>
                                {/* <li className='flex relative items-center'>
                                    <div className="h-[15px] w-[15px] bg-primaryBase text-[9px] rounded-[50%] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="ml-[10px]">
                                        <p className='text-[16px] text-primaryDark font-[700]'>Making this first true generator simply text</p>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                        <div className="relative flex items-center border-t-borderColor border-t-solid pt-[30px] mt-[50px] ">
                            <div className='relative flex items-center justify-center h-[65px] w-[65px] bg-yellowColor rounded-[50%] text-[35px] text-white'>
                                <SiWechat/>
                            </div>
                            <div className='relative -top-[2px] ml-[20px]'>
                                <span className='text-[18px] text-primaryBase font-[700] leading-[18px] font-cav'>Call Anytime</span>
                                <p className="text-[20px] font-[800] leading-[20px]"><Link href="tel:980009630" className='text-primaryDak transition-all duration-500 hover:text-primaryBase'>+98 (000) - 9630</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 xl:max-w-[50%] w-full lg:max-w-[50%]">
                    <div className="relative block bg-white shadow-custom border-borderColor border-solid rounded-tr-[20px] rounded-br-[20px] p-[60px] h-full">
                        <form action="#" className='relative block w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" required placeholder="Your Name" name="name" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0  xl:pr-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="email"
                                     required
                                     placeholder="Your Email" name="email" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-[50%] flex-shrink-0 flex-grow-0 xl:pl-[10px]">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" required placeholder="Your Phone" name="name" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Address" name="name" required className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>

                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Date of Birth" required name="name" className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <input typeof="text" placeholder="Your Occupation" name="name" required
                                     className='h-[58px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] py-0 px-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                </div>
                                <div className="w-full xl:max-w-full flex-shrink-0 flex-grow-0 ">
                                    <div className="relative block mb-[20px] ">
                                    <textarea typeof="text" placeholder="Write your message" name="message"
                                    required
                                    className='h-[150px] w-full border-none outline-none bg-borderColor text-primaryText] text-[14px] pt-[18px] px-[30px] pb-[30px] rounded-[20px] font-[400] '/>
                                    </div>
                                    <div className="bt">
                                        <button typeof='submit' className='relative inline-block outline-none bg-yellowColor  text-white text-[14px] font-[800] uppercase tracking-0 rounded-[30px] py-[15px] px-[49px] transition-all duration-500 z-[1] appearance-none '>
                                            send messege
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Volunteer