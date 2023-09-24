import { groq } from "next-sanity";



// Get all posts
// export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
//     _id, title, slug
//   }`;

export const postQuery = groq`*[_type=='post' && defined(slug.current)]{
    ...,
    "tags": tags[]-> {
      title,
      slug,
    },
    "authors": authors[]->{
      name, 
      image,
      "socials": socials[]->{
          platform,
          url
      }
    },
    "postTags": postTags[]->{title,slug },
    "categories": categories[]->{
        _id,
        title,
        number,
      }
  
} | order(_createdAt desc)`;