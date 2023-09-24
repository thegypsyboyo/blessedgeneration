import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='w-full min-h-full pt-[150px] '>
        <div className="bg-no-repeat bg-cover bg-center h-full w-full" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="h-full flex !items-center !justify-center !overflow-visible ">
                <div className="flex items-center flex-wrap w-full h-full justify-between mp-11 ">
                    <div className='' />
                    <div className=" lg:max-w-[56.666667%] w-full  flex flex-shrink-0 flex-grow-0">
                        <div className="p-14 relative z-[2] bg-redDark w-full mt-[180px] mb-[-80px] min-h-[500px]">
                        <h2 className="font-bold -mt-1 mb-6 text-white text-[30px] font-man">Blessed Generation is a Kenya-based Non Governmental Organization (NGO) registered as a Charitable Children's Institution.</h2>
                        <p className='text-light font-normal text-base'>
                        Together with around 100 qualified Kenyan employees, Ria Fennema from Hurdegaryp in Friesland and her husband Fester are committed to giving more than 1000 vulnerable children a chance again. This is done in close cooperation with the Kenyan child protection.
                            </p>
                            <ul className='list-none flex items-center '>
                                <li className="mr-12 pr-12 border-r border-r-[#ffff] mt-7">
                                    <h5 className='capitalize font-semibold mb-1 text-white'>Education for the children</h5>
                                    <p className='text-[#cccccc]'>Easy to customize</p>
                                </li>
                                <li className="float-right pr-12  mt-7">
                                    <h5 className='capitalize font-semibold mb-1 text-white'>chance to better a life</h5>
                                    <p className='text-[#cccccc]'>Blessed generation provides the children a chance at a better life</p>
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