import React from 'react'
import Features from './Features';


const images = [
    { url: 'image1.jpg', width: '70%' },
    { url: 'image2.jpg', width: '30%' },
    { url: 'image3.jpg', width: '20%' },
    { url: 'image4.jpg', width: '20%' },
    { url: 'image5.jpg', width: '60%' },
];
const FeaturedProjects = () => {
    
  return (
    <div>
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects