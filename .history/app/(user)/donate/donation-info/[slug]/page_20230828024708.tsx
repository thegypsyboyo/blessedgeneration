import Pageheader from '@/constants/Pageheader'
import React from 'react'
import DonationDetails  from '@/components/Donate/DonationDetails'

const page = () => {
  return (
    <div>
        <Pageheader className='' title='Donation Details'/>
        <DonationDetails/>
    </div>
  )
}

export default page