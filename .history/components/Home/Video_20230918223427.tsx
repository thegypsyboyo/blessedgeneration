import Image from 'next/image'
import React from 'react'
import Layout from './Layout'

const Video = () => {
  return (
    <>
        <section className="flex flex-col w-full items-center justify-center h-full mt-0 mr-0 mb">
                <Layout className="flex items-center justify-center">
                <div className="mx-auto w-[80%] flex items-center justify-center p-0 flex-col h-[500px]">
                    <Image src={"/images/testing/gallery-3.jpg"} alt='gallery-3' width={800} height={800} className="w-full h-full object-cover"/>
                </div>
                </Layout>
        </section>
        <section className="w-full h-full bg-[#4f46e5] ">
            <Layout>
                <div className="w-full h-full md:w-[83.333%] pt-[200px]">
                    content here
                </div>
            </Layout>
        </section>
    </>
  )
}

export default Video