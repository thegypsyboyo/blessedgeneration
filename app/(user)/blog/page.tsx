import Blog from '@/components/Blog/Blog'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const blog = () => {
  return (
    <div className=''>
        <Pageheader bgImage='/images/slider/slide-1.jpg' title="Consulted admitting is power acuteness." className=""/>
        <Blog/>
    </div>
  )
}

export default blog