import BlogDetails from '@/components/Blog/BlogDetails'
import Pageheader from '@/constants/Pageheader'
import { postPathsQuery, blogQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client';
import { sanityFetch } from '@/lib/sanityFetch';
import { Post } from '@/typings';
import { groq } from 'next-sanity';
import React from 'react'
// const page = () => {
//   return (
//     <div>
//         <Pageheader bgImage='/images/test/gallery-4.jpg' className='' title='Blog Details'/>
//         <BlogDetails/>
//     </div>
//   )
// }

// export default page
type Props = {
  params: {
      slug: string
  };
};

export async function generateStaticParam() {

  const query = groq`*[_type == "post"]
  {
    slug,
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }))

}

export default async function Page({params: {slug}, }:Props) {
  // const post = await sanityFetch<Post>({ query: blogQuery, params });
  const query = groq`*[_type=="post" && slug.current == $slug][0]{
    ...,
    ...,
  "tags": tags[]-> {
    title,
    slug,
  },
  "authors": authors[]->{
    name, 
    image,
    description,
    "socials": socials[]->{
        platform,
        url
    }
  },
  "postTags": postTags[]->{title,slug },
  "categories": categories[]->{title,number},
  "singlePostInformations": singlePostInformations[]->{
    postDescriptionIntro,
    image,
    blogTitle,
    blogDescriptionOne,
    blogSubInfoTitle,
    blogSubImageInfo,
    blogSubInfoDescription,
    quoteInfo,
    quoteFounderName,
    postDescriptionEnding,

  },
  "postTags": postTags[]->{title,slug },
  }
  `;
  const post:Post = await client.fetch(blogQuery, { slug });

  // const posts = await sanityFetch(blogQuery, {slug});

  return <BlogDetails post={post} />;
}