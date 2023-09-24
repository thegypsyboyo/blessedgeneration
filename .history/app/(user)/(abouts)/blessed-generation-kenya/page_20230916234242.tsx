import BgKenya from '@/components/About/BgKenya';
import Ria from '@/components/About/Ria'
import Pageheader from '@/constants/Pageheader'
import { bgQuery, riaQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import urlFor from '@/lib/urlFor';
import { RiaProps } from '@/typings';
import React from 'react'

export async function page () {
  const aboutBg = await sanityFetch<RiaProps[]>({ query: bgQuery });
  console.log("Ria Query:", aboutBg)

 

  return (
    <>
    {aboutBg.map((item, index) => (
    <div key={index}>
        <Pageheader className='' title={item.name}/>
        <BgKenya aboutBg={aboutBg}/>
    </div>

    ))}
    </>
  )
}

export default page