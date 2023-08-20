import Ria from '@/components/About/Ria'
import Pageheader from '@/constants/Pageheader'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pageheader bgImage='/images/test/gallery-1.jpg' className='' title='ria fennema & festas'/>
        <Ria/>
    </div>
  )
}

export default page