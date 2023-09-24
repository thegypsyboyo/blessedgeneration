import React from 'react'
import Layout from '../Home/Layout'

const Team = () => {
  return (
    <section className="w-full h-full py-[120px] bg-transparent">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto w-full h-full">
            <div className="flex flex-wrap w-full h-full justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[66.666%]">
                <div className="flex flex-col w-full h-full">
                  <span className='text-redDark font-cav text-[30px] font-extrabold'>Our perfect stuff</span>
                  <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Meet Our Specialists</h2>
                </div>
              </div>
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%]">
                <div className="flex items-end w-full justify-end">
                view more
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default Team