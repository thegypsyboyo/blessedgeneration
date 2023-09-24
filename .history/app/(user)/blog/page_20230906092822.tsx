import Blog from '@/components/Blog/Blog'
import PreviewBlogs from '@/components/Blog/PreviewBlogs';
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
        {/* <PreviewBlogs posts={posts} /> */}
        <div className="prose prose-blue p-8">
          <a href="/api/exit-preview">
            Exit preview
          </a>
        </div>
      </PreviewProvider>
    );
  }

  return ( 
    <>
      {/* <Pageheader title="Our latest news & Blog insights" className="" />
      <Blog posts={posts} /> */}
      posts not in preview
    </>
  );
}