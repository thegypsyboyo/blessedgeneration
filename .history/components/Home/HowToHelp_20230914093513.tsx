import React from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'

const HowToHelp = () => {
  return (
    <section className='w-full min-h-full pt-[150px] '>
        <div className="h-full w-full" >
            <Layout className="h-full flex !items-center !justify-center !overflow-visible ">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    <div className='h-full md:w-[48%] w-full flex flex-shrink-0 flex-grow-0'>

                    </div>
                    <div className="h-full md:w-[52%] w-full  flex flex-shrink-0 flex-grow-0">
                        <VideoPlayer videoId='' className=''/>
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default HowToHelp