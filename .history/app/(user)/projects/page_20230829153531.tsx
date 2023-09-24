import Projects from '@/components/Projects/Projects'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader title='projects'/>
        <Projects/>

    </div>
  )
}

export default page