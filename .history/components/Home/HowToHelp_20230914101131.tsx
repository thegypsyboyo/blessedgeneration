import React from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'

const HowToHelp = () => {
  return (
    <section className='w-full min-h-full mt-11 pt-[60px] py-[150px] bg-redDark'>
        <div className="h-full w-full flex flex-col  items-center" >
             <div className='w-full h-full text-center mb-[30px]'>
                <h4 className="text-white text-4xl uppercase font-bold">How can you help ?</h4>
            </div>
            <Layout className="h-full flex flex !items-center !justify-center !overflow-visible mt-[40px]">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    <div className='h-full md:w-[48%] w-full flex flex-shrink-0 flex-grow-0 md:mb-0 mb-3'>
                        <div className="w-full h-full">
                            how can you help
                        </div>
                    </div>
                    <div className="h-full md:w-[52%] w-full  flex flex-shrink-0 flex-grow-0 bg-yellowColor">
                        <div className="w-full h-full">
                            <VideoPlayer videoId='' className='!w-full'/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default HowToHelp