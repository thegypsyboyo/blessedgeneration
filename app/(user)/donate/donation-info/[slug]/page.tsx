import Pageheader from '@/constants/Pageheader'
import React from 'react'
import DonationDetails  from '@/components/Donate/DonationDetails'

const page = () => {
  return (
    <div>
        <Pageheader bgImage='/images/blog/img-1.jpg' className='' title='Donation Details'/>
        <DonationDetails/>
    </div>
  )
}

export default page