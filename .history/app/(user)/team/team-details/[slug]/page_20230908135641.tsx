import TeamDetails from '@/components/Team/TeamDetails'
import Pageheader from '@/constants/Pageheader'
import { client } from '@/lib/sanity.client';
import { TeamMember } from '@/typings';
import { groq } from 'next-sanity';
import React from 'react'


type Props = {
  params: {
      slug: string
  };
};


export async function generateStaticParams() {

  const query = groq`*[_type == "team"]
  {
    slug,
  }`;
  
  const slugs: TeamMember[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }))
  
}

export default async function page ({params: {slug}, }:Props) {


  const query = groq`*[_type=="team" && slug.current == $slug][0]{
    name,
    position,
    image,
    "socials": socials[]->{
      platform,
      url
    },
    "teamDetails": teamDetails[]->{
    skills[]->{
      title,
      percentage,
    },
    phone,
    email,
    bio,
    location
  },
  }
  `;

  const memberdata: TeamMember = await client.fetch(query, { slug });


  return (
    <div>
      <Pageheader title={memberdata.name}/>
      <TeamDetails memmberdata={memberdata}/>
    </div>
  )
}

// export default page