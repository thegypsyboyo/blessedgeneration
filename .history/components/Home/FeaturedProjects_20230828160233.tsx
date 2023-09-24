import React from 'react'
import Features from './Features';


const images = [
    { url: '/images/test/gallery-1.jpg', width: '70%' },
    { url: '/images/test/gallery-2.jpg', width: '30%' },
    { url: '/images/test/gallery-3.jpg', width: '20%' },
    { url: '/images/test/gallery-4.jpg', width: '20%' },
    { url: '/images/test/gallery-1.jpg', width: '60%' },
];
const FeaturedProjects = () => {
    
  return (
    <div>
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects