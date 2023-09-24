"use client"
import Blog from '@/components/Blog/Blog'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const blog = () => {
  return (
    <div className=''>
        <Pageheader bgImage='/images/test/gallery-1.jpg' title="Consulted admitting is power acuteness." className=""/>
        <Blog/>
    </div>
  )
}

export default blog