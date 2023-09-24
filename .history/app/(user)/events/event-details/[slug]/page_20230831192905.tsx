import EventDetails from '@/components/Events/EventDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader title='Event details' />
        <EventDetails  />
    </div>
  )
}

export default page