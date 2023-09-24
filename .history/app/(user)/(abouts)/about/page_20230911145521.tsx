import Header from "@/components/About/Header"
import Partner from "@/components/About/Partner"
import Team from "@/components/About/Team"
import Video from "@/components/About/Video"
import About from "@/components/About/page"
import { sanityFetch } from "@/lib/sanityFetch"
import { AboutVideo } from "@/typings"
export const metadata = {
    title: 'About Us | Learn more about the Blessed Genenration Charity Foundation',
    description: 'About Blessed Generation and their impact over the years',
  }
  

export default async function Page (){
  const videodata = await sanityFetch<AboutVideo[]>({ query: riaQuery });
  console.log("Ria Query:", videodata)

  return (
    <div >
      <Header/>
      <About/>
      <Video  videodata={videodata}/>
      <Partner/>
      <Team/>
    </div>
  )
}

// export default Page