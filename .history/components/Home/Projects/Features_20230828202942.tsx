// Features.tsx
import React from 'react';
import Layout from '../Layout';
import ProjectItem from './ProjectItem';
import { ProjectItemProps } from '@/typings';

interface FeaturesProps {
  projects: ProjectItemProps[];
}

const Features: React.FC<FeaturesProps> = ({ projects }) => {
  return (
    <section className='relative block pt-[120px] mt-[0] pb-[90px] px-0 w-full h-full'>
      <Layout>
        <div className="grid grid-cols-12 gap-4 w-full h-full bg-yellowColor">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              slug={project.slug}
              title={project.title}
              width={project.width}
              mdColSpan={project.mdColSpan}
              lgColSpan={project.lgColSpan}
            />
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default Features;
