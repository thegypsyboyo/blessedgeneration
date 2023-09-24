// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { Post } from "@/typings";
import { postQuery } from "@/lib/queries";
import Blog from "./Blog";

export default function PreviewPosts({
  posts = [],
}: {
  posts: Post[];
}) {
  const [data] = useLiveQuery(posts, postQuery);

  return <Blog posts={data} />;
}