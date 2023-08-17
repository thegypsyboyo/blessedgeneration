import BlogDetails from '@/components/Blog/BlogDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader bgImage='/images/slider/slide-1.jpg' className='h-[300px]' title='Blog Details'/>
        <BlogDetails/>
    </div>
  )
}

export default page