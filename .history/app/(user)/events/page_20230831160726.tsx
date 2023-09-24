import CountDown from '@/components/Events/CountDown'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
      <Pageheader title='Upcoming Events'/>
      <CountDown/>
    </div>
  )
}

export default page