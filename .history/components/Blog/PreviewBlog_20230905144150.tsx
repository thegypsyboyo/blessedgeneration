// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery}  from "@/lib/queries"
import Blog from "./Blog";
import { Post } from "@/typings";

export default function PreviewPosts({
  posts = [],
}: {
  posts: Post[];
}) {
  const [data] = useLiveQuery(posts, postQuery);

  return <Blog posts={data} />;
}