import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='mb-0 w-full h-screen pt-[150px] !m-auto'>
        <div className="bg-no-repeat bg-cover bg-center pb-0 h-full w-full" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="h-full flex !items-center !justify-center !overflow-visible">
                <div className="flex items-center flex-wrap w-full h-full justify-between mp-11">
                    <div className='bg-yellowColor '>text</div>
                    <div className=" lg:max-w-[41.666667%] w-full  flex flex-shrink-0 flex-grow-0">
                        <div className="p-14 relative z-[1] bg-darkBlue w-full bottom-[-80px] h-full h-[400px]">
                            content
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default AboutBg