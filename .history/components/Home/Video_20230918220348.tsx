import Image from 'next/image'
import React from 'react'

const Video = () => {
  return (
    <>
        <section className="flex flex-col w-full h-full mt-0 mr-0 mb-[-262px]">
            <div className="flex-initial items-initial flex-auto flex-grow-1 flex-shring-1 max-w-[930px] self-auto">
                <div className="flex p-0 flex-col">
                    <Image src={"/images/testing/gallery-3.jpg"} alt='gallery-3' width={800} height={800} />
                </div>
            </div>
        </section>
        <section className="">content</section>
    </>
  )
}

export default Video