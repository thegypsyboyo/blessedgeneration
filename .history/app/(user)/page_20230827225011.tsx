import Partner from "@/components/About/Partner";
import AboutBg from "@/components/Home/AboutBg";
import AboutIntro from "@/components/Home/AboutIntro";
import Blog from "@/components/Home/Blog";
import Child from "@/components/Home/Child";
import Events from "@/components/Home/Events";
import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
import Layout from "@/components/Home/Layout";
import Projects from "@/components/Home/Projects";
import Support from "@/components/Home/Support";

export default function Home() {
  return (
    <>
        <Header/>
        <AboutIntro/>
        <Features/>
        <AboutBg/>
        <Partner className="mt-[80px] mb-[80px]"/>
        <Projects/>
        <Child/>
        <Support/>
        <Events/>
        <Blog/>
    </>
  )
}
