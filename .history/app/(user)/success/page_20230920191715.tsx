import SuccessPage from '@/components/Donate/SuccessPage'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
      <Pageheader title='Donation successful'/>
      <SuccessPage customer={[]}/>
      <div >Thank you for your generous donation </div>
    </div>
  )
}

export default page