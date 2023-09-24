import React from 'react'
import Layout from '../Home/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import VideoComponent from '@/constants/VideoComponent'
import { AboutVideo } from '@/typings'
import urlFor from '@/lib/urlFor'

type Props = {
    videodata: AboutVideo[]
}

export  const Video = ({videodata}:Props) => {
  return (
    // <section className='py-[120px] mt-[90px]  w-full h-full bg-no-repeat bg-cover bg-center relative z-[5] ' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
    //     <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
    //     <Layout >
    //         <div className="flex flex-wrap w-full h-full items-center justify-center">
    //             <div className="lg:max-w-full w-full  flex-grow-0 flex-shrink-0 ">
    //                 <div className="text-center">
    //                     <div className="mb-[45px] ">
    //                         <span className="w-[120px] h-[120px] leading-[120px] bg-white inline-block rounded-full text-darkBlue cursor-pointer text-center relative">
    //                             <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/>
    //                             <i>
    //                                 <FontAwesomeIcon icon={faPlay}/>
    //                             </i>
    //                             <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/>
    //                         </span>
    //                     </div>
    //                     <div className="relative z-[2] w-full">
    //                         <h2 className="xl:text-[60px] font-bold text-white tracking-tighter uppercase lg:text-[50px] md:text-[40px] text-[28px] w-full ">With Design &amp; Conceptual Decisions We Create Value for the Object</h2>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </Layout>
    // </section>
    <>
          {videodata?.map((item, index) => (
          <div key={index}>
              <VideoComponent 
                  channel={item.channel}
                  description="Watch our latest video on how to improve productivity"
                  videoId={item.videoId}
                  bgImage={urlFor(item.bgImage).url()}
              />
          </div>
          ))}
    </>

  )
}

export default Video