import Team from '@/components/Team/Team'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader title='Meet the Blessed Generation Team' />
        <Team />
    </div>
  )
}

export default page