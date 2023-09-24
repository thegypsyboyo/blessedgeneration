import Header from "@/components/Volunteer/Header"
import Volunteer from "@/components/Volunteer/Volunteer"
import Volunteers from "@/components/Volunteer/Volunteers"
import { teamQuery } from "@/lib/queries"
import { sanityFetch } from "@/lib/sanityFetch"
import { TeamMember } from "@/typings"
import { Metadata } from "next"



export const metadata: Metadata = {
    title: 'Become a volunteer | Become a part the Blessed Generation family and help us extend our work',
    description: 'Becoming a part of the "Blessed Generation" family',
  }
export default async function page() {
    const teamMember = await sanityFetch<TeamMember[]>({ query: teamQuery });
  return (
    <div>
        <Header/>
        <Volunteers teamMember={teamMember}/>
        <Volunteer/>
    </div>
  )
}
