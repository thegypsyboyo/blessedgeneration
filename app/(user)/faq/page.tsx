import Faq from '@/components/Faq/Faq'
import Pageheader from '@/constants/Pageheader'
import { faqQuery } from '@/lib/queries'
import { sanityFetch } from '@/lib/sanityFetch'
import { QA } from '@/typings'
import React from 'react'


export const metadata = {
  title: "FAQ's | Frequently  asked questions",
  description: 'Some of the most frequently asked questions',
}

export default async function page ()  {
  const faqs = await sanityFetch<QA[]>({ query: faqQuery });
  return (
    <div>
      <Pageheader title='Frequently asked questions'/>
      <Faq faqs={faqs}/>
      </div>
  )
}
