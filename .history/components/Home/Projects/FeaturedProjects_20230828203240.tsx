// FeaturedProjects.tsx
import React from 'react';
import Features from './Features';

const projectData = [
  { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1', width: '50%', mdColSpan: 6, lgColSpan: 6 },
  { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', width: '25%', mdColSpan: 3, lgColSpan: 6 },
  { image: '/images/test/gallery-3.jpg', slug: '', title: 'Project 3', width: '25%', mdColSpan: 3, lgColSpan: 6 },
  // ... add more projects
];

const FeaturedProjects = () => {
  return (
    <div className="w-full h-full">
      <Features projects={projectData} />
    </div>
  );
};

export default FeaturedProjects;
