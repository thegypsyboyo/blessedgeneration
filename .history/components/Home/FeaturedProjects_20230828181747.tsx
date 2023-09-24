import React from 'react'
import Features from './Features';


const images = [
    { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1',colSpan: 6, colSpanMd: 6, colSpanLg: 4  },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan: 4 },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan: 3 },
    // ... add more images with their corresponding colSpan values
  ];
const FeaturedProjects = () => {
    
  return (
    <div className="w-full h-full">
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects