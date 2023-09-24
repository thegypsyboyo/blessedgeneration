import Pageheader from '@/constants/Pageheader'
import React from 'react'
import DonationDetails  from '@/components/Donate/DonationDetails'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { CausesItem } from '@/typings';

type Props = {
  params: {
      slug: string
  };
};

export async function generateStaticParams() {

const query = groq`*[_type == "cause"]
{
  slug,
}`;

const slugs: CausesItem[] = await client.fetch(query);
const slugRoutes = slugs.map((slug) => slug.slug.current);
return slugRoutes.map((slug) => ({
  slug,
}))

}

export default async function Page ({params: {slug}, }:Props) {

  const query = groq`*[_type=="cause" && slug.current == $slug][0]{
    ...,
    "authors": authors[]->{
        name, 
        image,
        socials[]->{
          platform,
          url
        }
    },
    "tags": tags[]-> {
        title,
        slug,
    },
    "categories": categories[]->{
      title,
      number
    },
  
  }`;
    
  const singlecause: CausesItem = await client.fetch(query, { slug });

  console.log("Single cause: ", singlecause);
  return (
    <div>
        <Pageheader className='' title='Donation Details'/>
        <DonationDetails/>
    </div>
  )
}

// export default page