import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='mb-0 w-full h-screen pt-[150px] flex items-center'>
        <div className="bg-no-repeat bg-cover bg-center pb-0 h-full w-full items-center m-auto" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="flex items-center justify-center">
                <div className="flex items-center flex-wrap w-full h-full bg-yellowColor justify-center">
                    <div className='lg:max-w-[58.333333%]'></div>
                    <div className=" lg:max-w-[41.666667%] w-full  flex flex-shrink-0 flex-grow-0 bg-orangeDefault items-center justify-center py-11">
                        content
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default AboutBg