import Pageheader from '@/constants/Pageheader'
import React from 'react'
import DonationDetails  from '@/components/Donate/DonationDetails'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { CausesItem } from '@/typings';
import urlFor from '@/lib/urlFor';
import { Metadata, ResolvingMetadata } from 'next';


type Props = {
  params: {
      slug: string
  };
};

// export const metadata = {
//   title: 'Donate | Make a donation today and have an impact on a life',
//   description: 'Make a donation today to help someone in need',
// }


// export async function generateStaticParams() {

// const query = groq`*[_type == "cause"]
// {
//   slug,
// }`;

// const slugs: CausesItem[] = await client.fetch(query);
// const slugRoutes = slugs.map((slug) => slug.slug.current);
// return slugRoutes.map((slug) => ({
//   slug,
// }))

// }

// export default async function Page ({params: {slug}, }:Props) {

//   const query = groq`*[_type=="cause" && slug.current == $slug][0]{
//     ...,
//     "authors": authors[]->{
//         name, 
//         image,
//         socials[]->{
//           platform,
//           url
//         }
//     },
//     "tags": tags[]-> {
//         title,
//         slug,
//     },
//     "categories": categories[]->{
//       title,
//       number
//     },
  
//   }`;
    
//   const singlecause: CausesItem = await client.fetch(query, { slug });

  

//   console.log("Single cause: ", singlecause);
//   return (
//     <>
//     <div>
//         <Pageheader className='' title={singlecause.title} bgImage={urlFor(singlecause.image).url()}/>
//         <DonationDetails/>
//     </div>
//     </>
//   )
// }


async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // Fetch the single cause data
  const query = groq`*[_type=="cause" && slug.current == $slug][0]{
    title, // Ensure title is fetched
    description, // Ensure description is fetched
    ...
  }`;
  const singlecause: CausesItem = await client.fetch(query, { slug });

  // Optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Donation  | ${singlecause.title}`,
    description: singlecause.description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function Page({ params: { slug } }: Props) {
  // Fetch the single cause data
  const query = groq`*[_type=="cause" && slug.current == $slug][0]{
    ...
  }`;
  const singlecause: CausesItem = await client.fetch(query, { slug });

  console.log("Single cause: ", singlecause);

  return (
    <>
      <div>
        <Pageheader className='' title={singlecause.title} bgImage={urlFor(singlecause.image).url()} />
        <DonationDetails singlecause={singlecause} />
      </div>
    </>
  );
}

// Attach the generateMetadata function to the Page component for metadata generation
export { generateMetadata };