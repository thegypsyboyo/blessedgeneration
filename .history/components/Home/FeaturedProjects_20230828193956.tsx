import React from 'react'
import Features from './Features';


const images = [
    { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1',colSpan:4, colSpanMd: 6, colSpanLg: 6},
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan:4, colSpanMd:2, colSpanLg: 2  },
    { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', colSpan:4, colSpanMd:8, colSpanLg: 4  },
  ];
const FeaturedProjects = () => {
    
  return (
    <div className="w-full h-full">
        <Features images={images}/>
    </div>
  )
}

export default FeaturedProjects