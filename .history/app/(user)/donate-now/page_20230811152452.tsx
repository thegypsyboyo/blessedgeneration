import DonateNow from '@/components/Donate/DonateNow'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
      <Pageheader bgImage='/images/events/image-1.jpg' className='' title='Donate Now'/>
        <DonateNow/>
    </div>
  )
}

export default page