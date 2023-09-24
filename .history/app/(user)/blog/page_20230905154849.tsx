
import { GetStaticProps } from "next";
import Blog from '@/components/Blog/Blog'
import PreviewPosts from '@/components/Blog/PreviewBlog';
import PreviewProvider from '@/components/SANITY/PreviewProvider';
import Pageheader from '@/constants/Pageheader'
import { getClient } from '@/lib/getClient';
import { postQuery } from '@/lib/queries';
import { sanityFetch, token } from '@/lib/sanityFetch';
import { Post } from '@/typings';
import { draftMode } from "next/headers";
// import React from 'react'

// const blog = () => {
//   return (
//     <div className=''>
//         <Pageheader bgImage='/images/test/gallery-1.jpg' title="Consulted admitting is power acuteness." className=""/>
//         <Blog/>
//     </div>
//   )
// }

// export default blog

// export default async function blog() {
//   const posts = await sanityFetch<Post[]>({ query: postQuery });
//   const isDraftMode = draftMode().isEnabled;


//   if (isDraftMode && token) {
//     return (
//       <PreviewProvider token={token}>
//         <PreviewPosts posts={posts} />
//       </PreviewProvider>
//     );
//   }

//   return <Blog posts={posts} />;
// }


export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  if (preview && !previewToken) {
    throw new Error(`Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`);
  }
  const client = getClient(previewToken);

  const data = await client.fetch(postQuery);

  return { props: { data, preview, previewToken } };
};



export default function Home({
  data,
  preview,
  previewToken,
}: {
  data: Post[];
  preview: boolean;
  previewToken?: string;
}) {
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <PreviewPosts posts={data} />
        <div className="prose prose-blue p-8">
          <a href="/api/exit-preview">
            Exit preview
          </a>
        </div>
      </PreviewProvider>
    );
  }

  return <Blog posts={data} />;
}
