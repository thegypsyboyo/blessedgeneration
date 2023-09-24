import Blog from '@/components/Blog/Blog'
import PreviewPosts from '@/components/Blog/PreviewBlog';
import PreviewProvider from '@/components/SANITY/PreviewProvider';
import Pageheader from '@/constants/Pageheader'
import { postQuery } from '@/lib/queries';
import { sanityFetch, token } from '@/lib/sanityFetch';
import { Post } from '@/typings';
import { draftMode } from "next/headers";


export default async function blog() {
  const posts = await sanityFetch<Post[]>({ query: postQuery });
  const isDraftMode = draftMode().isEnabled;


  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return ( 
    <>
      <Pageheader title="Our latest news & Blog insights" className="" />
      <Blog posts={posts} />
    </>
  );
}