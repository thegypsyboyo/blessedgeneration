import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='w-full min-h-full mb-[200px] pt-[150px]'>
        <div className="bg-no-repeat bg-cover bg-center pb-0 h-screen w-full" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="h-full flex !items-center !justify-center !overflow-visible">
                <div className="flex items-center flex-wrap w-full h-full justify-between mp-11">
                    <div className='bg-yellowColor '>text</div>
                    <div className=" lg:max-w-[56.666667%] w-full  flex flex-shrink-0 flex-grow-0">
                        <div className="p-14 relative z-[2] bg-darkBlue w-full mt-[180px] mb-[-80px] min-h-[500px]">
                        <h2 className="font-bold -mt-1 mb-6 text-white text-4xl font-man">We Create digital products That Make people’s Lives More Easier.</h2>
                        <p className='text-[#cccccc] font-normal text-base'>
                                Common indeed garden you his ladies out yet. Preference imprudence contrasted to remarkably in on. Taken now you him trees tears any. Her object giving end sister except oppose. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch .
                            </p>
                            <ul className='list-none flex items-center '>
                                <li className="mr-12 pr-12 border-r border-r-[#ffff] mt-7">
                                    <h5 className='capitalize font-semibold mb-1 text-white'>Innovative Business</h5>
                                    <p className='text-[#cccccc]'>Easy to customize</p>
                                </li>
                                <li className="float-right pr-12  mt-7">
                                    <h5 className='capitalize font-semibold mb-1 text-white'>Innovative Business</h5>
                                    <p className='text-[#cccccc]'>Easy to customize</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default AboutBg