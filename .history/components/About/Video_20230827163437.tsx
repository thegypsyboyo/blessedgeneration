import React from 'react'
import Layout from '../Home/Layout'

const Video = () => {
  return (
    <section className='py-[120px] mt-[90px] mb-[90px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[5] ' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
        <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
        Video
        <Layout >
            <div className="flex flex-wrap w-full h-full">
                <div className="lg:max-w-full flex-grow-0 flex-shrink-0 ">
                    <div className="text-center">
                        <div className="mb-[45px] ">
                            <span className="w-[120px] h-[120px] leading-[120px] bg-white inline-block rounded-full text-darkBlue cursor-pointer text-center ">play</span>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Video