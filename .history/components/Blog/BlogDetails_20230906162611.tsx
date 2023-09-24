"use client"

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
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '@/constants/RichTextComponent'
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

type  Props = {
  post: Post;
}
const relatedPost  = [ ...data, ...data, ...data, ...data] 

const Blog = ({post}:Props) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [comments, setComments] = useState<Comment[]>([]);
  const [replyTo, setReplyTo] = useState<string | null>(null);


  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.message.trim() !== '') {
      const newComment: Comment = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        parentId: replyTo,
        image: '/images/test/gallery-1.jpg',
      };

      setComments([...comments, newComment]);
      setFormData({ ...formData, message: '' });
      setReplyTo(null);
    }
  };

  // Load comments from Local Storage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to Local Storage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <section className='block py-[120px] relative'>
        <Layout>
            <div className="flex flex-wrap w-full">
                <div className="w-full xl:max-w-[66.66666%] lg:max-w-[58.333333%] mb-[30px] flex-shrink-0">
                    <div className="relative block w-full">
                        <div className="relative block space-y-4 w-full ">
                            {data?.map((item, index) => (
                            <div 
                            className="relative block" key={index}>
                            <div className="relative block -[20px]">
                              <Image src={item.image} alt='main-image' width={400} height={400} className='w-full h-full md:h-[550px] object-cover rounded-tl-lg rounded-tr-lg'/>
                                <div className="absolute left-[30px] bg-orangeDefault py-[6px] px-[25px] bottom-[30px] z-[2] -[15px]">
                                  <p className='text-[18px] text-white font-cav leading-[18px] font-[700]'>{item.date}</p>
                              </div>
                            </div>

                            <div className="p-[20px] px-[30px] bg-white shadow-custom">
                            <PortableText value={post.body} components={RichTextComponent}/>
                              <p 
                                  className='mb-[15px]'>
                                    {tags.map((item, key) => (
                                          <Link href="#" key={item.id * key} className='relative text-primaryDark text-[10px] bg-[#f7f7f7] mr-[2px] mb-[5px] inline-block py-[10px] px-[15px] font-[800] uppercase transition-all duration-500   hover:bg-primaryBase mt-[10px] hover:text-white'>
                                            {item.title}
                                          </Link>
                                  ))}
                              </p>
                              <span className="uppercase text-[15px] text-black mb-[20px]">share this</span>
                              <div 
                                  className="flex items-center !ml-0 space-x-2 w-full">
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsInstagram/>} />

                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsFacebook/>} />
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsTwitter/>} />
                                  <SocialShareButton platform='facebook' url='' title='' body='' icon={<BsYoutube/>} />
                              </div>

                            </div>

                            <div className="flex items-center justify-between flex-wrap py-[30px] mt-[50px] border-t-[1px] border-borderColor">
                            </div>

                            <div 
                            className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                            >
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>About the Author</span>
                                </div>
                                <div className="w-full flex h-full">
                                  <div className="max-w-[150px] pr-[25px]">
                                    <Image src={"/images/test/gallery-1.jpg"} alt='author' width={200} height={200} className='w-full h-full object-cover'/>
                                  </div>
                                  <div className="">
                                    <div className="font-[600] mb-[5px] uppercase">
                                      <Link href={"/team/team-details/3"}>
                                        {item.author}
                                      </Link>
                                    </div>
                                    <p className="text-primaryText">
                                    Introducing our esteemed guest blogger! With years of experience in the events industry, Venessa&apos;s insightful posts will provide valuable tips and inspiration for planning your next big event.
                                    </p>
                                    <ul className="w-full h-full flex mt-2">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className="mr-2 w-[30px] h-[30px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "!bg-blue-800":""} ${social.platform === "instagram" ? "!bg-[#F56040] ":""}  ${social.platform === "linkedin" ? "!bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600":"bg-blue-600"}  ${social.platform === "youtube" ? "!bg-[#c4302b]":""} ${social.platform === "twitch" ? "!bg-[#6441A4]":""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[1]`}>
                                              {social.platform === "facebook" && <FaFacebookF className=""/>}
                                              {social.platform === "instagram" && <FaInstagram/>}
                                              {social.platform === "linkedin" && <FaLinkedinIn/>}
                                              {social.platform === "twitter" && <FaTwitter/>}
                                              {social.platform === "twitch" && <FaTwitch/>}
                                              {social.platform === "youtube" && <FaYoutube/>}
                                          </Link>
                                          </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                            </div>


                            <div 
                            className='relative block  bg-white shadow-custom  mt-11 p-[30px] group rounded-[5px] w-full '
                            >
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>Related posts</span>
                                </div>
                                <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full ">
                                <div className="w-full  h-full flex flex-wrap relative pb-[30px]">
                                    {relatedPost.map((item, index) => (
                                    <div className="flex-grow-0 flex-shrink-0 md:w-[50%] w-full sm:w-[50%] h-full p-2" key={index}>
                                        <div className="w-full h-full flex flex-col items-center">
                                            <div className="w-full h-full">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='w-full  rounded-1 rounded-[5px] h-[240px] object-cover'/>
                                                </Link>
                                            </div>
                                            <div className="w-full ">
                                            <div className="w-full h-full font-[600] text-[14px] mb-[10px] break-words pt-2">
                                              <Link href={""} className='w-full'>
                                                  Top 20 Events and Conference Countries
                                              </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                                </div>
                        
                            </div>


                            <div className="mt-[30px] w-full relative block  bg-white shadow-custom  p-[30px] group rounded-[5px]">
                                <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>Comments: {comments.length}</span>
                                </div>

                                <div className="w-full">
                                  {comments.map((comment, index) => (
                                    <div className="flex items-start justify-start py-[30px] px-0" key={index}>
                                      <div className="overflow-hidden rouded-[4px]">
                                        <Image src={comment.image} width={100} height={100} alt='avatar' className='w-[50px] h-[50px] object-cover'/>
                                      </div>
                                      {comment ? (
                                        <div className='pl-[24px] w-[calc(100% - 50px)] flex-1'>
                                          <div className="font-[700] mb-[5px]">
                                          {comment.name}
                                          </div>
                                          <p>{comment.message}</p>
                                          <div className="flex items-center justify-start flex-wrap text-[0.8rem] uppercase font-medium">
                                            <div className="flex items-center pt-3">
                                              <BsClock className="mr-[6px]"/>
                                              <p className="text-primaryText">09/01/2023</p>
                                            </div>
                                            <div className="flex items-center pt-3 ml-3">
                                            <button onClick={() => setReplyTo(comment.id)}>Reply</button>

                                            {replyTo === comment.id && (
                                                <form onSubmit={handleCommentSubmit} className="ml-4">
                                                  <textarea
                                                    name="message"
                                                    placeholder="Write your reply"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="h-20 w-full border-none bg-gray-200 px-4 py-2 rounded-lg outline-none"
                                                    required
                                                  />
                                                  <div>
                                                    <button type="submit">Submit Reply</button>
                                                    {/* Include the "Cancel" button to cancel the reply */}
                                                    <button type="button" onClick={() => setReplyTo(null)}>Cancel</button>
                                                  </div>
                                                </form>
                                              )}

                                            <ul>
                                            {comments
                                              .filter((reply) => reply.parentId === comment.id)
                                              .map((reply) => (
                                                <li key={reply.id} className="ml-4">
                                                  <div className="flex">
                                                    <div>
                                                      <Image src={reply.image} alt={reply.name} width={100} height={100} className="w-6 h-6 rounded-full mr-2" />
                                                    </div>
                                                    <div>
                                                      <strong>{reply.name}:</strong> {reply.message}
                                                    </div>
                                                  </div>
                                                  <button onClick={() => setReplyTo(reply.id)}>Reply</button>
                                                </li>
                                              ))}
                                          </ul>
                                            </div>
                                          </div>
                                        </div>
                                      ) : ( 
                                        <div>Be the first to comment</div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                            </div>


                            <div 
                            className="mt-[30px] w-full relative block  bg-white shadow-custom  p-[30px] group rounded-[5px]">
                               <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                    <span className='mr-[10px]'>Leave a comment</span>
                                </div>
                              <form onSubmit={handleCommentSubmit} className='w-full'>
                              <div className="row flex flex-wrap ml-auto mr-auto w-full">
                              <div className="col flex-shrink-0 flex-grow-0 lg:pr-[20px] mt-0 w-full xl:max-w-[50%]">
                              <div className='relative block mb-[20px] w-full'>
                                <input 
                                  type='text ' 
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Your name"
                                  required
                                  className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block tracking-[0.01em] font-[500]'/>
                                </div>
                                </div>
                                <div className="col flex-shrink-0 flex-grow-0 pr-[0px] mt-0 w-full xl:max-w-[50%]">
                                <div className='relative block mb-[20px] w-full'>
                                      <input 
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      placeholder="Your email"
                                      required
                                      className=' h-[60px] w-full border-none bg-borderColor pl-[30px] pr-[30px] outline-none text-[14px] text-[#707876] block tracking-[0.01em] font-[500]'/>
                                </div>
                                </div>
                                </div>
                                <div className="flex flex-wrap ml-auto mr-auto w-full">
                                          <div className="h-[150px] relative block mb-[20px] w-full">
                                          <textarea 
                                          name="message"
                                          value={formData.message}
                                          onChange={handleChange}
                                          placeholder="Write your comment"
                                          required  
                                          className="text-[14px] text-[#707876] h-[150px] w-full bg-borderColor pt-[15px] pb-[30px] px-[30px] border-none outline-none mb-[0px] font-[500]"/>
                                          </div>
                                          <div className="">
                                          </div>
                                          <button
                                          type="submit"
                                          className="mt-4 bg-[#ffbb00] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                                        >
                                          Submit comment
                                        </button>
                                </div>
                              </form>
                          </div>


                          {/* {post?.body ? PortableText value={post.body} components={RichTextComponent}/> /> : null} */}

                          {/* <PortableText value={post.body} components={RichTextComponent}/> */}

                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full xl:max-w-[33.333333%] lg:max-w-[41.666666%] mb-[30px] lg:pr-[15px] lg:pl-[35px] flex-shrink-0">
                    <div className="relative block space-y-[30px]">
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] rounded-[5px] w-full '>
                          <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                            <span className='mr-[10px]'>Related Reads</span>
                          </div>
                          <div>
                            <div className="mt-0 mx-[-15px] mb-[-30px] flex flex-wrap w-full h-full">
                                <div className="w-full relative">
                                    {relatedPost.map((item, index) => (
                                    <div className="px-[15px] pb-[30px]" key={index}>
                                        <div className="flex items-center">
                                            <div className="pr-[15px]">
                                                <Link href={""} className='w-full h-full'>
                                                    <Image src={item.image} alt='similar-post' width={150} height={150} className='max-w-[65px] rounded-1 h-full object-cover'/>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="font-[600] text-[14px] mb-[10px] break-words ">
                                                    <Link href={""}>
                                                        Top 20 Events and Conference Countries
                                                    </Link>
                                                </div>
                                                <div className="text-primaryText flex flex-wrap text-[0.8rem] leading-[0.8rem] m-[-7.5px]">
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsFolder2 className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">List</div>
                                                    </div>
                                                    <div className="flex items-center flex-wrap p-[7.5px]">
                                                    <BsClockHistory className="text-[#ffbb00]"/>
                                                    <div className="p-1 ">4 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                          </div>
                        
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Add</span>
                            </div>
                            <div className="w-full">
                                <Link href={"/donate"} className='w-full h-full'>
                                    <Image src={"/images/test/gallery-1.jpg"} alt='add' width={400} height={400} className='w-full h-full'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Categories</span>
                            </div>
                            <ul className="w-full">
                                {category.map((item, index) => (
                                    <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                        <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-[#ffbb00] border-l border-l-[#ffbb00] transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                        <Link href={""} className='font-[400] mr-[3px] text-[#222222] transition-all duration-300 text-[15px] '>{item.title }</Link>
                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        <div 
                        className='relative block  bg-white shadow-custom  p-[30px] group rounded-[5px] w-full '
                        >
                            <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                <span className='mr-[10px]'>Tags</span>
                            </div>
                            <div className="w-full">
                                {tags.map((item, index) => (
                                    <Link href={""} className='bg-[#eaeaea] inline-block text-primaryText py-[5px] px-[11px] text-[0.7rem] font-[500] mt-0 mx-[3px] mb-[7px]' key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Blog