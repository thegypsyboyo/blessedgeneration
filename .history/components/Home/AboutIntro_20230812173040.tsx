import React from 'react'
import Layout from './Layout'
import Image from 'next/image'

const AboutIntro = () => {
  return (
    <section className='px-[120px] w-full h-full'>
        <Layout className="">
            <div className="flex items-center justify-center flex-wrap w-full h-full">
                <div className="ld:max-w-1/2 flex-grow-0 flex-shrink-0">
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