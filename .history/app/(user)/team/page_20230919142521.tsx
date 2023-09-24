import Team from '@/components/Team/Team'
import Pageheader from '@/constants/Pageheader'
import { teamQuery } from '@/lib/queries';
import { client } from '@/lib/sanity.client';
import { sanityFetch } from '@/lib/sanityFetch';
import { TeamMember } from '@/typings';
import { groq } from 'next-sanity';
import React from 'react'


export default async function page ()  {
  const teamMember = await sanityFetch<TeamMember[]>({ query: teamQuery });

  return (
    <div>
        <Pageheader title='Meet the Blessed Generation Team' />
        <Team teamMember={teamMember}/>
    </div>
  )
}

// export default page