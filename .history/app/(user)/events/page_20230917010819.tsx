import CountDown from '@/components/Events/CountDown'
import Events from '@/components/Events/Events';
import Pageheader from '@/constants/Pageheader'
import { eventQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import { EventsProps } from '@/typings';
import React from 'react'

const targetDate = new Date('2023-09-01T00:00:00');

export const metadata = {
  title: 'Projets | Upcoming Events',
  description: 'Some of the upcoming events',
}

export default async function Page () {
  const eventdata = await sanityFetch<EventsProps[]>({ query: eventQuery });
  console.log("Project: ", eventdata)

  return (
    <div>
      <Pageheader title='Upcoming Events'/>
      {/* <CountDown targetDate={targetDate}/> */}
      <Events eventdata={eventdata}/>
    </div>
  )
}
