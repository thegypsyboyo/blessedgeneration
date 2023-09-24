import Donate from "@/components/Donate/Donate"
import Pageheader from "@/constants/Pageheader"

export const metadata = {
    title: 'Donate | Make a donation today and have an impact on a life',
    description: 'Make a donation today to help someone in need',
}
export default async function Page(){
  return (
    <>
    <Pageheader  className="" title="Donate now"/>
    <Donate/>
    </>
  )
}

// export default Page