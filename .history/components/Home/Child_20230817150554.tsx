import React from 'react'
import Layout from './Layout'

const Child = () => {
  return (
    <section>
        <div className="w-full h-full">
            <Layout className="flex items-center flex-col">
            <div className='relative -mt-[40px] mb-[46px] flex flex-col items-center justify-center w-full'>
                <span className="text-2xl text-orangeDefault font-normal leading-[24px] mb-[10px] font-man uppercase text-center">News & articles</span>
                <h2 className="m-0 text-darkBlue text-3xl leading-7 font-bold -tracking-[0.04em] mt-[6px] text-center lg:text-4xl lg:leading-9 xl:text-5xl lg:max-w-[650px] xl:leading-[60px] relative pb-6">Most popular breaking news & top stories
                <span className="absolute content-[] bg-orangeDefault left-1/2 bottom-0 h-0.5 w-16 -ml-6"/>
                </h2>
            </div>
            </Layout>
        </div>
    </section>
  )
}

export default Child