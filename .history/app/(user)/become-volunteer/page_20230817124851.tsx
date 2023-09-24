import Header from "@/components/Volunteer/Header"
import Volunteer from "@/components/Volunteer/Volunteer"
import { Metadata } from "next"



export const metadata: Metadata = {
    title: 'Become a volunteer | Become a part the Blessed Generation family and help us extend our work',
    description: 'Becoming a part of the "Blessed Generation" family',
  }
const page:React.FC = () => {
  return (
    <div>
        <Header/>
        <Volunteer/>
    </div>
  )
}

export default page