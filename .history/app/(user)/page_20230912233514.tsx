import Partner from "@/components/About/Partner";
import AboutBg from "@/components/Home/AboutBg";
import AboutIntro from "@/components/Home/AboutIntro";
import Blog from "@/components/Home/Blog";
import Child from "@/components/Home/Child";
import Events from "@/components/Home/Events";
import FeaturedProjects from "@/components/Home/Projects/FeaturedProjects";
import Features from "@/components/Home/Projects/Features";
import Header from "@/components/Home/Header";
import Layout from "@/components/Home/Layout";
import Projects from "@/components/Home/Projects";
import Support from "@/components/Home/Support";
import Testimonials from "@/components/Home/Testimonials";
import AnimatedSlider from "@/components/Home/AnimatedSlider";
import { sanityFetch } from "@/lib/sanityFetch";
import { draftMode } from "next/headers";
import { pageheaderQuery } from "@/lib/queries";
import { IntroSlider } from "@/typings";
import PageIntro from "@/components/Home/PageIntro";

export default async  function Home() {
  const sliderData = await sanityFetch<IntroSlider[]>({ query: pageheaderQuery });
  const isDraftMode = draftMode().isEnabled;
  return (
    <>
        <Header sliderData={sliderData}/>
        {/* <PageIntro/> */}
        {/* <AnimatedSlider/> */}
        {/* <AboutIntro/> */}
        {/* <AboutBg/> */}
        {/* <Projects/> */}
        <Child/>
        <Support/>
        <FeaturedProjects />
        {/* <Testimonials/> */}
        <Events/>
        <Blog/>
    </>
  )
}
