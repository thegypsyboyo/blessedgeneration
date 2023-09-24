import Header from "@/components/About/Header"
import Partner from "@/components/About/Partner"
import Team from "@/components/About/Team"
import Video from "@/components/About/Video"
import About from "@/components/About/page"
import { aboutVideoQuery, teamQuery } from "@/lib/queries"
import { sanityFetch } from "@/lib/sanityFetch"
import { AboutVideo, TeamMember } from "@/typings"
export const metadata = {
    title: 'About Us | Learn more about the Blessed Genenration Charity Foundation',
    description: 'About Blessed Generation and their impact over the years',
  }
  

export default async function Page (){
  const videodata = await sanityFetch<AboutVideo[]>({ query: aboutVideoQuery });
  const teamMember = await sanityFetch<TeamMember[]>({ query: teamQuery });

  return (
    <div >
      <Header/>
      <About/>
      <Partner className="mt-[]"/>
      <Video  videodata={videodata}/>
      <Team teamMember={teamMember}/>
    </div>
  )
}

// export default Page