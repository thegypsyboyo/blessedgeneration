import Pageheader from '@/constants/Pageheader'
import React from 'react'
import DonateNow from "@/components/Donate/DonateNow"

const page = () => {
  return (
    <div>
      <Pageheader bgImage='/images/events/image-1.jpg' className='h-[350px]' title='Donate Now'/>
        <DonateNow/>
    </div>
  )
}

export default page