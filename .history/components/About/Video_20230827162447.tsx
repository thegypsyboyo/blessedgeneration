import React from 'react'

const Video = () => {
  return (
    <section className='py-[120px] mt-[90px] mb-[90px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[5] ' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
        <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
        Video
    </section>
  )
}

export default Video