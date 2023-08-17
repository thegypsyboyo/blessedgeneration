import React from 'react'
import Layout from './Layout'

const AboutBg = () => {
  return (
    <section className='mb-0 w-full h-screen pt-[150px] '>
        <div className="bg-no-repeat bg-cover bg-center pb-0 h-full w-full" style={{backgroundImage: `url(/images/test/bg.jpg)`}}>

            <Layout className="">
                <div className="flex items-center justify-center flex-wrap "></div>
            </Layout>
        </div>
    </section>
  )
}

export default AboutBg