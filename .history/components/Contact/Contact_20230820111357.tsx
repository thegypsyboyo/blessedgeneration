import React from 'react'
import Layout from '../Home/Layout'

const Contact = () => {
  return (
    <section className="py-[120px] relative">
        <Layout className="">
            <div className="flex flex-wrap items-center justify-center w-full h-full">
                <div className="w-full lg:max-w-[66.66667%] flex-grow-0 flex-shrink-0 ">
                    <div className="text-center w-full">
                        <span className="mb-[9px] text-darkBlue inline-block font-semibold text-[14px] tracking-[0.04em]">CONTACT US</span>
                        <h3 className="text-[50px] lg:text-[60px] xl:text-[70px] font-bold tracking-[-.04em] text-darkBlue mb-[25px] xl:leading-[80px] lg:leading-[70px] leading-[60px]">Get in touch with us for more information</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap py-[90px]">
                <div className="flex-grow-0 flex-shrink-0 pl-[15px] pr-[15px] lg:max-w-full">
                    <div className="bg-white shadow-custom relative z-[1] w-full h-full">

                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Contact