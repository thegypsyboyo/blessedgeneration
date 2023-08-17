import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='mb-0 w-full h-screen pt-[150px] !m-auto'>
        <div className="bg-no-repeat bg-cover bg-center pb-0 h-full w-full" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="flex !items-center !justify-center mp-11">
                <div className="flex items-center flex-wrap w-full h-full bg-yellowColor justify-between">
                    <div></div>
                    <div className=" lg:max-w-[41.666667%] w-full  flex flex-shrink-0 flex-grow-0 bg-orangeDefault py-11">
                        test
                    </div>
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default AboutBg