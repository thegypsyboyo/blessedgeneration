// Features.tsx
import React from 'react';
import Layout from '../Layout';
import ProjectItem from './ProjectItem';
// import { ProjectItemProps } from '@/typings';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItemProps } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';


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
        {image ? (
          <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden'>
              <Image src={image} alt={title} width={400} height={400} className='w-full h-[300px] object-cover'/>
          </Link>
        ): (
          <div className='relative w-full h-[300px] bg-yellowColor z-[1]'>
            <div className="bg-[#0B3D19] bg-center bg-cover pt-[1%] pb-[3%] pr-[5%] pl-[5%]  bg-no-repeat w-full h-full z-[2] absolute left-0 right-0 bottom-0 flex justify-start items-center content-[]">
              <div className="z-[2]">
                <span className="text-yellowColor font-cav text-[26px] font-[400] ">Our awesome portfolio</span>
                <h4 className="font-man font-semibold mb-2 text-[42px] leading-[48px] tracking-tighter text-white">You Can Explore<br/>Our Incredible Projects</h4>
                <AnimatedButton className='bg-yellowColor' link='' text='Explore more' style='!mt-[20px] rounded-none'/>
              </div>
            </div>
          </div>
        )}
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
