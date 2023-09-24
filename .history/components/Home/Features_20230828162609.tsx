import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'

interface ImageInfo {
    url: string;
    width: string;
}

interface SingleImageGalleryProps {
    images: ImageInfo[];
}
const Features:React.FC<SingleImageGalleryProps>  = ({images}) => {
   
  return (
    <section className='relative block pt-[270px] mt-[0] pb-[90px] px-0 w-full' >
        <Layout>
        <div className="grid grid-cols-12 gap-4 w-full">
      {images?.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            style={{ width: image.width }}
            width={400}
            height={400}
            className="rounded-md h-[400px] object-cover"
          />
        );
      })}
    </div>
        </Layout>

    </section>
  )
}

export default Features