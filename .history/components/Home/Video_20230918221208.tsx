import Image from 'next/image'
import React from 'react'

const Video = () => {
  return (
    <>
        <section className="flex flex-col w-full items-center justify-center h-full mt-0 mr-0 mb">
            <div className="items-center justify-center flex-grow-1 flex-shrink-1  max-w-[930px] self-auto">
                <div className="flex p-0 flex-col h-[500px]">
                    <Image src={"/images/testing/gallery-3.jpg"} alt='gallery-3' width={800} height={800} className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
        <section className="">content</section>
    </>
  )
}

export default Video