import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

interface ImageInfo {
    image: string;
    title: string,
    slug: string,
    colSpan?: number | string ; // Add colSpan property
    colSpanMd?: number | string; // Add colSpan property
    colSpanLg?: number | string; // Add colSpan property
}

interface SingleImageGalleryProps {
    images: ImageInfo[];
}
const Project:React.FC<ImageInfo> = ({title, slug, image, colSpan,colSpanMd,colSpanLg}) => {
    return (
        <article className='flex flex-col items-center justify-center w-full h-full'>
            <Link href={slug} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg h-full'>
                <Image src={image} alt={title} width={400} height={500} className='w-full h-[400px] object-cover'/>
            </Link>

            {/* <div className='flex flex-col w-full items-start justify-between mt-4'>
             
                <Link href={""} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold '>{title}</h2>
                </Link>
               <div className='w-full flex mt-2 items-center justify-between'>
                    <Link href={""} target='_blank' className='text-lg font-semibold  underline underline-offset-2'>Visit Project</Link>
                    <Link href={slug} target='_blank' className='w-10'> <FaGithub/></Link>
               </div>
            </div> */}
        </article>
    )
}

const Features:React.FC<SingleImageGalleryProps>= ({images}) => {
  return (
    <section className='relative block pt-[120px] mt-[0] pb-[90px] px-0 w-full h-full' >
        <Layout>
            <div className="grid grid-cols-12 gap-4 w-full">
                {images.map((imageInfo, index) => (
                <div key={index} className={`w-full h-full bg-yellowColor col-span-12 lg:col-span-${imageInfo.colSpanLg} md:col-span-${imageInfo.colSpanMd} `}>
                <Project image={imageInfo.image} slug={imageInfo.slug} title={imageInfo.title}  colSpan={imageInfo.colSpan} colSpanLg={imageInfo.colSpanLg} colSpanMd={imageInfo.colSpanMd}/>
                </div>
                ))}
            </div>
        </Layout>

    </section>
  )
}

export default Features