import Ria from '@/components/About/Ria'
import Pageheader from '@/constants/Pageheader'
import { riaQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import urlFor from '@/lib/urlFor';
import { RiaProps } from '@/typings';
import React from 'react'

export async function page () {
  const aboutRia = await sanityFetch<RiaProps[]>({ query: riaQuery });
  console.log("Ria Query:", aboutRia)

 

  return (
    <>
    {aboutRia.map((item, index) => (
    <div key={index}>
        <Pageheader className='' title={item.name}/>
        <Ria aboutRia={aboutRia}/>
    </div>

    ))}
    </>
  )
}

export default page