import Header from "@/components/About/Header"
import Partner from "@/components/About/Partner"
import Video from "@/components/About/Video"
import About from "@/components/About/page"
export const metadata = {
    title: 'About Us | Learn more about the Blessed Genenration Charity Foundation',
    description: 'About Blessed Generation and their impact over the years',
  }
  

const Page = () => {
  return (
    <div >
      <Header/>
      <About/>
      <Video/>
      <Partner/>
    </div>
  )
}

export default Page