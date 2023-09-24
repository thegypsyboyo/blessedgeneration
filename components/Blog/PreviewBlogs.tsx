// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery}  from "@/lib/queries"
import Blog from "./Blog";
import { Post } from "@/typings";


// export default function PreviewBlogs({ posts = [] }: { posts: Post[] }) {
// const [data] = useLiveQuery(posts, postQuery)

//   return <Blog posts={data} />;
// }

export default function PreviewBlogs({
  posts = [],
}: {
  posts: Post[];
}) {
  const [data] = useLiveQuery(posts, postQuery);

  return <Blog posts={data} />;
}