import React from 'react'
import Features from './Features';


const images = [
    { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1', width: '100%' },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', width: '50%' },
    // ... add more images with their corresponding width values
  ];
const FeaturedProjects = () => {
    
  return (
    <div className="w-full h-full">
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects