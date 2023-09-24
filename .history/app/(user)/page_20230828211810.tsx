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

export default function Home() {
  return (
    <>
        <Header/>
        <AboutIntro/>
        <AboutBg/>
        <Projects/>
        <Child/>
        <Support/>
        <FeaturedProjects />
        <Testimonials/>
        <Events/>
        <Blog/>
    </>
  )
}
