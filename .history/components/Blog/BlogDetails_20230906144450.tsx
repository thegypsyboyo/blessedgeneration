// "use client"

import React, {useEffect, useState} from 'react'
import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import { footerVariants } from '@/utils/motion'
import { BsClock, BsClockHistory, BsFacebook, BsFolder2, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import AnimatedButton from '@/constants/AnimatedButton'
import SocialShareButton from '@/constants/SocialShareButton'
import { Post, Socials } from '@/typings'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

type Props = {
  post: Post;
}
interface BlopProps {
    image: string,
    author: string,
    title: string,
    decription: string,
    slug: string,
    date: string,
    socials: Socials[];
}
interface Cat {
    title: string,
    id: number,
}
interface Tag {
    title: string,
    id: number,
}
const data:BlopProps[] = [
    {
        author: "Lewmeta",
        date: "7/30/2023",
        decription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage. ",
        image: "/images/testing/gallery-1.jpg",
        slug: "how-does-the-malnutrition-affect-children",
        title: "How does the malnutrition affect children?",
        socials: [
          {
            platform: "facebook",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life"
          },
          {
            platform: "instagram",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
          },
          {
            platform: "linkedin",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
          },
      ],
    },
]
const category:Cat[] = [
    {
        id: 1,
        title: "Donations",
    },
    {
        id: 2,
        title: "Charity",
    },
    {
        id: 3,
        title: "Food & Water",
    },
    {
        id: 4,
        title: "Kids Education",
    },
]
const tags:Tag[] = [
    {
        title: "kids",
        id: 1,
    },
    {
        title: "donation",
        id: 2,
    },
    {
        title: "water",
        id: 6,
    },
    {
        title: "charity",
        id: 7,
    },
    {
        title: "fundraising",
        id: 8,
    },

]

interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  parentId?: string | null;
  image: string;
}


const relatedPost  = [ ...data, ...data, ...data, ...data] 

const Blog = ({post}:Props) => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const [comments, setComments] = useState<Comment[]>([]);
  // const [replyTo, setReplyTo] = useState<string | null>(null);


  
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };


  // const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (formData.message.trim() !== '') {
  //     const newComment: Comment = {
  //       id: Date.now().toString(),
  //       name: formData.name,
  //       email: formData.email,
  //       message: formData.message,
  //       parentId: replyTo,
  //       image: '/images/test/gallery-1.jpg',
  //     };

  //     setComments([...comments, newComment]);
  //     setFormData({ ...formData, message: '' });
  //     setReplyTo(null);
  //   }
  // };

  // // Load comments from Local Storage on component mount
  // useEffect(() => {
  //   const storedComments = localStorage.getItem('comments');
  //   if (storedComments) {
  //     setComments(JSON.parse(storedComments));
  //   }
  // }, []);

  // // Save comments to Local Storage whenever the comments state changes
  // useEffect(() => {
  //   localStorage.setItem('comments', JSON.stringify(comments));
  // }, [comments]);

  return (
    <section className='block py-[120px] relative'>
        {post.title}
    </section>
  )
}

export default Blog