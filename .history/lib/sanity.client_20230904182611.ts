import {createClient} from "next-sanity"
import type { QueryParams } from '@sanity/client'


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"


// Shared on the server and the browser

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "published",
})

// Only defined on the server, passed to the browser via a `loader`
export const token =
  typeof process === 'undefined' ? '' : process.env.SANITY_API_READ_TOKEN!

const DEFAULT_PARAMS = {} as QueryParams


// Utility for fetching data on the server, that can toggle between published and preview drafts
export async function sanityFetch<QueryResponse>({
    previewDrafts,
    query,
    params = DEFAULT_PARAMS,
  }: {
    previewDrafts?: boolean
    query: string
    params?: QueryParams
  }): Promise<QueryResponse> {
    if (previewDrafts && !token) {
      throw new Error(
        'The `SANITY_API_READ_TOKEN` environment variable is required.',
      )
    }
    return client.fetch<QueryResponse>(
      query,
      params,
      previewDrafts
        ? {
            token,
            perspective: 'previewDrafts',
          }
        : {},
    )
  }