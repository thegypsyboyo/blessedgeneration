import Head from '@/components/Safari/Head'
import Header from '@/components/Safari/Header'
import Places from '@/components/Safari/Places'
import Trip from '@/components/Safari/Trip'
import React from 'react'

const page = () => {
  return (
    <div>
        <Head/>
        <Header/>
        <Trip/>
        {/* <Places/> */}
    </div>
  )
}

export default page