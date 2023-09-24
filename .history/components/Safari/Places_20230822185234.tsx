import React from 'react'
import Layout from '../Home/Layout'

const Places = () => {
  return (
    <section className="py-[50px] w-full h-full">
        <Layout className='flex flex-col overflow-visible'>
            <div className="flex items-center flex-col w-full justify-center">
                <h2 className="text-[33px] leading-[43px] font-[400] text-[#000]">
                    NEVER ENDING FOOTSTEPS 
                </h2>
                <p className="text-primaryText text-[18px] leading-[34px] font-[400] mt-[13px] lg:w-[70%] text-center">
                Lorem ipsum dolor sit amet, pri in persius oporteat, usu ex erat aperiam nusquam. His liber verear ornatus eu. Nobis regione patrioque pri te. 
                </p>
            </div>
            <div className="mt-7 relative overflow-x-auto overflow-y-hidden h-[207px] min-w-screen">
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-map-image" style={{backgroundImage: `url(/images/timeline.svg)`}} />
                <div className="absolute top-[85px] left-3 bottom-auto" >
                    <div className="w-[20px] h-[24px] bg-center bg-no-repeat bg-contain"style={{backgroundImage: `url(/images/timeline-pin.png)`}} />
                    <div className="">
                        some content
                    </div>

                </div>
            </div>
        </Layout>
        {/* <div className="h-[207px] mt-[40px] w-full  relative overflow-x-auto overflow-y-hidden cursor-pointer" style={{backgroundImage: `url(/images/timeline.svg)`}}></div> */}


    </section>
  )
}

export default Places