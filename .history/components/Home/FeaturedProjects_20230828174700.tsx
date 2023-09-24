import React from 'react'
import Features from './Features';


const images = [
    { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1', colSpan: "12", colSpanMd: 6, colSpanLg: 6 },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan: "6" },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan: "12",  },
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