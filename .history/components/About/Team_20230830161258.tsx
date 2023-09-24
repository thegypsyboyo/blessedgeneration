import React from 'react'
import Layout from '../Home/Layout'

const Team = () => {
  return (
    <section className="w-full h-full py-[120px] bg-yellowColor">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto ">
            <div className="flex flex-wrap w-full h-full justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[66.666%]">
                <span className='text-redDark font-cav font-extrabold'>Our perfect stuff</span>
                <span className="">Meet Our Specialists</span>
              </div>
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%]">
                view more
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default Team