import ProjectDetails from '@/components/Projects/ProjectDetails'
import Pageheader from '@/constants/Pageheader'
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';
import { groq } from 'next-sanity';
import { ProjectProps } from '@/typings';
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
  const query = groq`*[_type=="project" && slug.current == $slug][0]{
    title, 
    description,
    ...
  }`;
  const singleproject: ProjectProps = await client.fetch(query, { slug });

  return {
    title: `Projects  | ${singleproject?.title}`,
    // title: `Projects  | Project Details`,
    description: singleproject?.description,
  };
}


export default async function Page({ params: { slug } }: Props) {
  // Fetch the single cause data
  const query = groq`*[_type=="project" && slug.current == $slug][0]{
    ...,
   
  }`;
  const singleproject: ProjectProps = await client.fetch(query, { slug });

  console.log("Single Project: ", singleproject);
  return (
    <div>
        <Pageheader title={singleproject.title}  bgImage={urlFor(singleproject.image).url()} className=''  />
        <ProjectDetails singleproject={singleproject}/>
    </div>
  )
}

export { generateMetadata };