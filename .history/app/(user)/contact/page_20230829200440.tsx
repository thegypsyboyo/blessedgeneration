import Contact from "@/components/Contact/Contact"
import Pageheader from "@/constants/Pageheader"

export const metadata = {
    title: 'Contact Us | Reach out to Blessed Generation for any inquiries',
    description: 'Reach out to Blessed Generation for any inquiries.',
}
  
const Page = () => {
  return (
    <div>
      <Pageheader title="Contuct us" bgImage="/images/test/gallery-4.jpg"/>
      <Contact/>
    </div>
  )
}

export default Page