import BlogDetails from '@/components/Blog/BlogDetails';
import Pageheader from '@/constants/Pageheader';
import { client } from '@/lib/sanity.client';
import { sanityFetch } from '@/lib/sanityFetch'; // Import your custom sanityFetch function
import { Post } from '@/typings';
import { groq } from 'next-sanity';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// Replace generateStaticParam with getStaticPaths
export async function getStaticPaths() {
  // Fetch all post slugs using sanityFetch
  const query = groq`*[_type == "post"] {
    slug {
      current
    }
  }`;
  const slugs: { slug: { current: string } }[] = await client.fetch(query);

  // Create an array of paths for Next.js
  const paths = slugs.map((slug) => ({
    params: { slug: slug.slug.current },
  }));

  return {
    paths,
    fallback: false, // Set to 'true' if you want to enable fallback for undefined paths
  };
}

export async function getStaticProps({ params }: Props) {
  // Fetch the post data using sanityFetch based on the slug
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    ...,
    ...,
    "tags": tags[]-> {
      title,
      slug,
    },
    // Include your other fields here
  }`;

  const post: Post = await sanityFetch<Post>({ query, params });

  return {
    props: {
      post,
    },
  };
}

export default function Page({ post }: { post: Post }) {
  return <BlogDetails post={post} />;
}
