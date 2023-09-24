
import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "./sanity.client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

// export const token = process.env.SANITY_API_READ_TOKEN;
export const token = "sksJY7iL4YWVwvQNh66xmLK8PCs9s9xn7pj04s2sGhFPNkEvjo1bEKoAVF8oIdGFkChR0wRRNKcr3Odp9V7DZpoA4GcckI8dtqYbuSFV8ytlQhGAFbaJdPguY9Oig1arOzq7Y5d4e1wKwku1ENW5t7zkchHgI9HVQbixRvtNfBUnfspZXaG8"

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}