import BlogDetails from '@/components/Blog/BlogDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader bgImage='/images/test/gallery-4.jpg' className='' title='Blog Details'/>
        <BlogDetails/>
    </div>
  )
}

export default page