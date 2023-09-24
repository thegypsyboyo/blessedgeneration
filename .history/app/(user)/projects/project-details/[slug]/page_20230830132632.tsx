import ProjectDetails from '@/components/Projects/ProjectDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader title='Blessed Generation Malindi' className='' bgImage='/images/test/gallery-3.jpg' />
        <ProjectDetails/>
    </div>
  )
}

export default page