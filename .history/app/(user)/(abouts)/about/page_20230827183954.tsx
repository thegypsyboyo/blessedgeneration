import Header from "@/components/About/Header"
import Partner from "@/components/About/Partner"
import Video from "@/components/About/Video"
import About from "@/components/About/page"
// import Blog from "@/components/Home/Blog"
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
      {/* <Blog/> */}
    </div>
  )
}

export default Page