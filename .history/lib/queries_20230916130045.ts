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

// Get a single post by its slug
export const blogQuery = groq`*[_type=="post" && slug.current == $slug][0]{
      ...,
      "tags": tags[]-> {
      title,
      slug,
    },
    "authors": authors[]->{
      name, 
      image,
      description,
      "socials": socials[]->{
          platform,
          url
      }
    },
    "postTags": postTags[]->{title,slug },
    "categories": categories[]->{title,number},
    "singlePostInformations": singlePostInformations[]->{
      postDescriptionIntro,
      image,
      blogTitle,
      blogDescriptionOne,
      blogSubInfoTitle,
      blogSubImageInfo,
      blogSubInfoDescription,
      quoteInfo,
      quoteFounderName,
      postDescriptionEnding,

    },
    "postTags": postTags[]->{title,slug },
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// pageIntro query;
export const pageheaderQuery = groq`*[_type == "sliderInfo"] {
  sinceFrom,
  activeReviews,
  sliders[] -> {
    image,
    description,
    title
  }
}`


// team
export const teamQuery = groq`*[_type == "team"] {
  ...,
  "socials": socials[]->{
  platform,
  url
  }
} | order(_createdAt asc)`
export const riaQuery = groq`*[_type == "ria"] {
  ...,
  "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
  },
} | order(_createdAt asc)`

export const aboutVideoQuery = groq`*[_type == "aboutusVideo"] {
  ...,
} | order(_createdAt desc)`

export const navbarQuery = groq`*[_type == "navbar"] {
  ...,
  socials[]->{
      platform,
      url
  }
}`


export const contactQuery = groq`*[_type == "contactInfo"] {
  subtitle,
  Title,
  image,
  buttonName,
} | order(_createdAt asc)`

export const mapQuery = groq`*[_type == "contactMap"] {
          "coordinates":coordinates[]->{
            name,
            mapCoordinates[]->{
              latitude,
              longitude,
            },
          },
          "infoMedia":infoMedia[]->{
            title,
            phone,
            email,
            location,
          }
} | order(_createdAt asc)`