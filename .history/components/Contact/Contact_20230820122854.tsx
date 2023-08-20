import React from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

const Contact = () => {
  return (
    <section className="py-[120px] relative">
        <Layout className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-full h-full mb-[50px]">
                <div className="w-full lg:max-w-[66.66667%] flex-grow-0 flex-shrink-0 ">
                    <div className="text-center w-full">
                        <span className="mb-[9px] text-darkBlue inline-block font-semibold text-[14px] tracking-[0.04em]">CONTACT US</span>
                        <h3 className="text-[50px] lg:text-[60px] xl:text-[70px] font-bold tracking-[-.04em] text-darkBlue mb-[25px] xl:leading-[80px] lg:leading-[70px] leading-[60px]">Get in touch with us for more information</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap py-[120px] w-full bg-white shadow-custom relative z-[1] w-full h-full pt-[73px] px-[50px] lg:px-[100px] pb-[95px] border-0 ">
                <div className="flex-grow-0 flex-shrink-0 pl-[15px] pr-[15px] lg:max-w-full w-full">
                    <div className="w-full">
                        <h3 className="font-semibold text-[30px] tracking-[-0.04em] mb-[30px] tex-darkBlue">Send a message</h3>

                        <form action="#" className='w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pr-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name' required typeof='text' placeholder='Enter your name' className='w-full h-[60px] border outline-0 bg-lightBlue px-[25px] py-0 text-white'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pl-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name'  type='email' placeholder='Enter your email' className='w-full h-[60px] border outline-0 bg-lightBlue px-[25px] py-0 text-white'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pr-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name' required typeof='text' placeholder='Phone' className='w-full h-[60px] border outline-0 bg-lightBlue px-[25px] py-0 text-white'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full lg:pl-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name'  typeof='text' placeholder='Subject' className='w-full h-[60px] border outline-0 bg-lightBlue px-[25px] py-0 text-white'/>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex-grow-0 w-full mt-0">
                                    <div className="mt-[20px]">
                                        <textarea name='name'  typeof='text' placeholder='Your messege' required  className='w-full h-[160px] border outline-0 bg-lightBlue py-[23px] px-[25px] text-white'/>
                                    </div>
                                </div>
                                <button className={`relative inline-block align-middle appearance-none outline-none bg-orangeDefault text-white text-[14px] font-[800] uppercase tracking-[0]  py-[15px] px-[49px] overflow-hidden transition-all ease-linear duration-500 group z-[1] hover:text-white mt-[41px]`}>
                                    <div className={`absolute w-[200%] h-[200%] content-[] -top-[230%] left-[50%] transform -translate-x-[50%]  -z-[1] transition-all duration-1000 bg-primaryDark  group-hover:-top-[40%]`}/>

                                    send messege
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Contact