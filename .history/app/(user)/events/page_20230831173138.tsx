import CountDown from '@/components/Events/CountDown'
import Events from '@/components/Events/Events';
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const targetDate = new Date('2023-09-01T00:00:00');
const page = () => {
  return (
    <div>
      <Pageheader title='Upcoming Events'/>
      {/* <CountDown targetDate={targetDate}/> */}
      <Events/>
    </div>
  )
}

export default page