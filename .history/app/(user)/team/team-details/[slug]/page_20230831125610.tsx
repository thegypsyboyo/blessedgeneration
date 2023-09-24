import TeamDetails from '@/components/Team/TeamDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
      <Pageheader title='Lewis Meta'/>
      <TeamDetails/>
    </div>
  )
}

export default page