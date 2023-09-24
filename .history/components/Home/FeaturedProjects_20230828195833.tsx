import React from 'react'
import Features from './Features';


const images = [
  { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1', width: '50%', mdColSpan: 6, lgColSpan: 6 },
  { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', width: '25%', mdColSpan: 6, lgColSpan: 6 },
  // ... add more images with their corresponding values
];
const FeaturedProjects = () => {
    
  return (
    <div className="w-full h-full">
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects