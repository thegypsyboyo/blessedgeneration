import AboutIntro from "@/components/Home/AboutIntro";
import Blog from "@/components/Home/Blog";
import Child from "@/components/Home/Child";
import Events from "@/components/Home/Events";
import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
import Layout from "@/components/Home/Layout";
import Support from "@/components/Home/Support";

export default function Home() {
  return (
    <>
        <Header/>
        {/* <Child/> */}
        <AboutIntro />
        <Features/>
        <Support/>
        <Events/>
        <Blog/>
    </>
  )
}
