import React from 'react'
import Layout from '../Home/Layout'

const Trip = () => {
  return (
    <section className='w-full h-full py-[120px]'>
        <Layout >
            <div className="w-full flex items-center flex-wrap ">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[33.3333%] h-full lg:pr-[15px]">
                    <div className="">
                        <h1 className='text-[30px] text-dark font-nun font-[700] leading-[45px]'>THE TOP 4 DAY TRIPS</h1>
                        <span>We are Backpack Traveler, Melissa and Johnatan (that’s us!)</span>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] h-full lg:pr-[15px]"></div>
            </div>
        </Layout>
    </section>
  )
}

export default Trip