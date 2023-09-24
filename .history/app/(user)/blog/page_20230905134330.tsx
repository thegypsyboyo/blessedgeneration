import Blog from '@/components/Blog/Blog'
import Pageheader from '@/constants/Pageheader'
import { postQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import { Post } from '@/typings';
import React from 'react'

// const blog = () => {
//   return (
//     <div className=''>
//         <Pageheader bgImage='/images/test/gallery-1.jpg' title="Consulted admitting is power acuteness." className=""/>
//         <Blog/>
//     </div>
//   )
// }

// export default blog

export default async function blog() {
  const posts = await sanityFetch<Post[]>({ query: postQuery });

  return <Blog posts={posts} />;
}