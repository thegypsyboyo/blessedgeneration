import ProjectDetails from '@/components/Projects/ProjectDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader title='Project Detials' className=''/>
        <ProjectDetails/>
    </div>
  )
}

export default page