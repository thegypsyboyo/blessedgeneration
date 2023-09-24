// FeaturedProjects.tsx
import React from 'react';
import Features from './Features';

const projectData = [
  { image: '/images/test/gallery-1.jpg', slug: '', title: 'Project 1', mdColSpan: 8, lgColSpan: 6 },
  { image: '/images/test/gallery-2.jpg', slug: '', title: 'Project 2', mdColSpan: 4, lgColSpan: 6 },
  { image: '/images/test/gallery-3.jpg', slug: '', title: 'Project 3', mdColSpan: 3, lgColSpan: 6 },
  // ... add more projects
];

const FeaturedProjects = () => {
  return (
    <div className="w-full h-full">
      <Features projects={projectData} />
      {/* <Features projects={} /> */}
    </div>
  );
};

export default FeaturedProjects;
