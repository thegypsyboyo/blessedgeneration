// Features.tsx
import React from 'react';
import Layout from '../Layout';
import ProjectItem from './ProjectItem';
// import { ProjectItemProps } from '@/typings';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItemProps } from '@/typings';


// interface ProjectItemProps {
//   image: string;
//   title: string;
//   slug: string;
//   width?: string;
//   mdColSpan?: number;
//   lgColSpan?: number;
// }
interface FeaturesProps {
  projects: ProjectItemProps[];
}

const Project:React.FC<ProjectItemProps> = ({slug, title, image,lgColSpan, mdColSpan, width}) => {
  return (
      <article className='flex flex-col items-center justify-center'>
          <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
              <Image src={image? "": ""} alt={title} width={400} height={400} className='w-full h-[300px] object-cover'/>
          </Link>
      </article>
  )
}

const Features: React.FC<FeaturesProps> = ({projects}) => {
  return (
    <section className='relative block pt-[120px] mt-[0] pb-[90px] px-0 w-full h-full'>
      <Layout>
        <div className="grid grid-cols-12 gap-4 w-full h-full bg-transparent">
          {/* {projects.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              slug={project.slug}
              title={project.title}
              width={project.width}
              mdColSpan={project.mdColSpan}
              lgColSpan={project.lgColSpan}
            />
          ))} */}
            {/* {projects.map((item, index) => (
                  <div className={`col-span-${item.mdColSpan}`} key={index}>
                    <Project 
                      image={item.image}
                      title={" Crypto Screener Application"} 
                      slug=''
                    />
                  </div>
            ))} */}
                <div className='col-span-6'>
                  <Project 
                    // image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='col-span-3'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='col-span-3'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='col-span-3'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='col-span-3'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''
                  />
                </div>
                <div className='col-span-6'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
        </div>
      </Layout>
    </section>
  );
};

export default Features;
