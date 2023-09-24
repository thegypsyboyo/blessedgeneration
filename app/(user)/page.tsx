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
import { achievementQuery, eventQuery, faqQuery, homeaboutQuery, mystoryQuery, navbarQuery, pageheaderQuery, partnerQuery, postQuery, testimonialsQuery } from "@/lib/queries";
import { Achievements, CountUp, EventsProps, HomeAbout, IntroSlider, MyStory, NavbarSocials, Partners, Post, QA, TestimonialsProps } from "@/typings";
import PageIntro from "@/components/Home/PageIntro";
import HowToHelp from "@/components/Home/HowToHelp";
import Video from "@/components/Home/Video";
import Achievement from "@/components/Home/Achievement";
import Faq from "@/components/Home/Faq";
import Donation from "./Donation";

export default async  function Home() {
  const sliderData = await sanityFetch<IntroSlider[]>({ query: pageheaderQuery });
  const isDraftMode = draftMode().isEnabled;
  const homeabout = await sanityFetch<HomeAbout[]>({ query: homeaboutQuery });
  const partners = await sanityFetch<Partners[]>({ query: partnerQuery });
  const mystories = await sanityFetch<MyStory[]>({ query: mystoryQuery });

  const achievements = await sanityFetch<Achievements[]>({ query: achievementQuery });
  const test = await sanityFetch<TestimonialsProps[]>({ query: testimonialsQuery });
  const eventdata = await sanityFetch<EventsProps[]>({ query: eventQuery });
  const posts = await sanityFetch<Post[]>({ query: postQuery });
  const faqs = await sanityFetch<QA[]>({ query: faqQuery });



  return (
    <>
        <Header sliderData={sliderData} />
        {/* <PageIntro/> */}
        {/* <AnimatedSlider/> */}
        <AboutIntro homeabout={homeabout}/>
        <Partner partners={partners}/>
        <Video mystories={mystories}/>
        <Achievement achievements={achievements}/>
        {/* <AboutBg/> */}
        {/* <Projects/> */}
        <HowToHelp />
        <Events eventdata={eventdata}/>
        <Donation/>
        <Testimonials test={test}/>
        {/* <Child/> */}
        {/* <Support/> */}
        <FeaturedProjects />
        <Faq faqs={faqs}/>
        <Blog posts={posts}/>
    </>
  )
}
