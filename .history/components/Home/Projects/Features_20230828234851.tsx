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
          <Link href={""} className="w-full h-full relative overflow-hidden block group">
            <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden opacity-[1] rounded-none transition-all duration-500 mr-0'>
                <Image src={image} alt={title} width={400} height={400} className='w-full h-[300px] object-cover'/>
            </Link>
            <div className="flex items-center flex-col  justify-end absolute z-[3] top-0 left-0 w-full h-full p-[25px] text-left transition-all duration-700 overflow-hidden opacity-0 transform translate-y-[150px] group-hover:visible group-hover:translate-y-[0px]  group-hover:opacity-[1] ">
              <div className="mb-[11px] ">
                <Link href={""} className='text-white bg-yellowColor px-[15px] h-[24px] inline-block leading-[24px] text-[12px] font-semibold uppercase transition-all duration-[900] hover:bg-redDark'>Child Care</Link>
              </div>
              <div className="text-center transition-all duration-700 mb-3 pt-2">
                <h4 className='text-white font-semibold font-nun text-[24px] leading-[33px] '>
                  <Link href={""}>How can supporting benefit a child.</Link>
                </h4>
              </div>
            </div>
            <div className='absolute z-[1] top-0 left-0 w-full h-full transition-all duration-700 overlay opacity-0 hidden group-hover:opacity-[1] group-hover:block'/>
          </Link>
        ): (
          <div className='relative w-full h-[300px] bg-yellowColor z-[1]'>
            <div className="bg-[#0B3D19] bg-center bg-cover pt-[1%] pb-[3%] pr-[5%] pl-[5%]  bg-no-repeat w-full h-full z-[2] absolute left-0 right-0 bottom-0 flex justify-start items-center content-[]">
              <div className="z-[2]">
                <span className="text-yellowColor font-cav text-[26px] font-[400] ">Our awesome portfolio</span>
                <h4 className="font-nun font-semibold mb-2 text-[42px] leading-[48px] tracking-tighter text-white">You Can Explore<br/>Our Incredible Projects</h4>
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
                <div className='md:col-span-6 lg:col-span-6 col-span-12'>
                  <Project 
                    // image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug='/'

                  />
                </div>
                <div className='xl:col-span-3 md:col-span-6 lg:col-span-6 col-span-12'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='xl:col-span-3 md:col-span-6 lg:col-span-6 col-span-12'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='xl:col-span-3 md:col-span-6 lg:col-span-6 col-span-12'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''

                  />
                </div>
                <div className='xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12'>
                  <Project 
                    image='/images/test/gallery-1.jpg'
                    title={" Crypto Screener Application"} 
                    slug=''
                  />
                </div>
                <div className='md:col-span-6 lg:col-span-6 col-span-12'>
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
