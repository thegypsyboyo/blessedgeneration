import CountDown from '@/components/Events/CountDown'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const targetDate = new Date('2023-08-31T00:00:00');
const page = () => {
  return (
    <div>
      <Pageheader title='Upcoming Events'/>
      <CountDown targetDate={targetDate}/>
    </div>
  )
}

export default page