"use client"

import React from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"
import SocialShareButton from '@/constants/SocialShareButton'
import { ProjectProps } from '@/typings'
import urlFor from '@/lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponent } from '@/constants/RichTextComponent'

type Props = {
    singleproject: ProjectProps
}
const ProjectDetails = ({singleproject}:Props) => {
    
  return (
    <section className='block py-[120px] pt-[160px] relative'>
      Testing. 
    </section>
  )
}

export default ProjectDetails