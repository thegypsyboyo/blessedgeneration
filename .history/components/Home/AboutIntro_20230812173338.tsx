import React from 'react'
import Layout from './Layout'
import Image from 'next/image'

const AboutIntro = () => {
  return (
    <section className='py-[120px] w-full h-full'>
        <Layout className="w-full h-full">
            <div className="flex items-center flex-wrap w-full h-full justify-between">
                <div className="ld:max-w-1/2 flex-grow-0 flex-shrink-0 w-full">
                    <div className="mr-[100px] relative z-[1]">
                        <Image src="/images/test/gallery-1.jpg" alt='main-image' width={200} height={200} priority className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </Layout>
    </section>
  )
}

export default AboutIntro