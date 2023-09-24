// ProjectItem.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ProjectItemProps } from '@/typings';


const ProjectItem: React.FC<ProjectItemProps> = ({ title, slug, image, width, mdColSpan, lgColSpan }) => {
  return (
    <article className={`col-span-12 md:col-span-${mdColSpan} lg:col-span-${lgColSpan}`}>
      <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={image} alt={title} width={400} height={500} className='w-full h-[300px] object-cover' />
      </Link>
      {/* Add more content here */}
    </article>
  );
};

export default ProjectItem;
