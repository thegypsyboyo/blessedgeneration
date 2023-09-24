import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

interface ImageInfo {
    image: string;
    title: string,
    slug: string,
    colSpan?: string; // Add colSpan property
}

interface SingleImageGalleryProps {
    images: ImageInfo[];
}
const Project:React.FC<ImageInfo> = ({title, slug, image, colSpan}) => {
    return (
        <article className='border border-solid border-dark bg-light p-6 rounded-2xl flex flex-col items-center justify-center'>
            <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={image} alt={title} width={400} height={500} className='w-full h-[400px] object-cover'/>
            </Link>

            <div className='flex flex-col w-full items-start justify-between mt-4'>
             
                <Link href={""} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold '>{title}</h2>
                </Link>
               <div className='w-full flex mt-2 items-center justify-between'>
                    <Link href={""} target='_blank' className='text-lg font-semibold  underline underline-offset-2'>Visit Project</Link>
                    <Link href={slug} target='_blank' className='w-10'> <FaGithub/></Link>
               </div>
            </div>
        </article>
    )
}

const Features:React.FC<SingleImageGalleryProps>= ({images}) => {
  return (
    <section className='relative block pt-[120px] mt-[0] pb-[90px] px-0 w-full h-full' >
        <Layout>
            <div className="grid grid-cols-12 gap-24 w-full">
                {images.map((imageInfo, index) => (
                <div key={index} className={`col-span-6 w-full h-full bg-yellowColor`}>
                <Project image={imageInfo.image} slug={imageInfo.slug} title={imageInfo.title}/>
                </div>
                ))}
            </div>
        </Layout>

    </section>
  )
}

export default Features