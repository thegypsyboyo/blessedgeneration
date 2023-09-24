import EventDetails from '@/components/Events/EventDetails'
import Pageheader from '@/constants/Pageheader'
import { groq } from 'next-sanity';
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';
import { EventsProps } from '@/typings';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';



type Props = {
  params: {
      slug: string
  };
};


async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // Fetch the single cause data
  const query = groq`*[_type=="event" && slug.current == $slug][0]{
    title, 
    description,
    ...
  }`;
  const singleEvent: EventsProps = await client.fetch(query, { slug });
  const title = singleEvent?.title;
  const formattedTitle = title ? title.toLowerCase() : ''; // or title.toUpperCase()


  return {
    title: `Upcoming Events  | ${formattedTitle}`,
    // title: `Projects  | Project Details`,
    description: singleEvent?.description,
  };
}


// const page = () => {
//   return (
//     <div>
//         <Pageheader title='Event details' />
//         <EventDetails  />
//     </div>
//   )
// }

// export default page

export default async function Page({ params: { slug } }: Props) {
  // Fetch the single cause data
  const query = groq`*[_type=="event" && slug.current == $slug][0]{
    ...,
     "tags": tags[]-> {
      title,
      slug,
  },
  "categories": categories[]->{
    title,
    number
  },
  "eventPhotos": eventPhotos[]->{
  image,
  id
  },
    
  }`;
  const singleEvent: EventsProps = await client.fetch(query, { slug });

  console.log("Single Event: ", singleEvent);
  return (
    <div>
        <Pageheader title={singleEvent.title} className=''  />
        <EventDetails singleEvent={singleEvent}/>
    </div>
  )
}

export { generateMetadata };