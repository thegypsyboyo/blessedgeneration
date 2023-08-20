import React from 'react'
import Layout from '../Home/Layout'

const Contact = () => {
  return (
    <section className="py-[120px] relative">
        <Layout className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-full h-full">
                <div className="w-full lg:max-w-[66.66667%] flex-grow-0 flex-shrink-0 ">
                    <div className="text-center w-full">
                        <span className="mb-[9px] text-darkBlue inline-block font-semibold text-[14px] tracking-[0.04em]">CONTACT US</span>
                        <h3 className="text-[50px] lg:text-[60px] xl:text-[70px] font-bold tracking-[-.04em] text-darkBlue mb-[25px] xl:leading-[80px] lg:leading-[70px] leading-[60px]">Get in touch with us for more information</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap py-[90px] w-full bg-white shadow-custom relative z-[1] w-full h-full pt-[73px] px-[100px] pb-[95px] border-0 ">
                <div className="flex-grow-0 flex-shrink-0 pl-[15px] pr-[15px] lg:max-w-full w-full">
                    <div className="w-full">
                        <h3 className="font-semibold text-[30px] tracking-[-0.04em] mb-[30px] tex-darkBlue">Send a message</h3>

                        <form action="#" className='w-full'>
                            <div className="flex flex-wrap w-full">
                                <div className="flex-shrink-0 flex-grow-0 w-[50%] pr-[15px] mt-0">
                                    <div className="mt-[20px]">
                                        <input name='name' typeof='text' placeholder='enter your name' className='w-full h-[60px] border outline-0 bg-primaryText px-[25px] py-0 text-darkBlue'/>
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

export default Contact