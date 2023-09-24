import Donate from "@/components/Donate/Donate"
import Pageheader from "@/constants/Pageheader"
import { donationQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanityFetch";
import { CausesItem } from "@/typings";

export const metadata = {
    title: 'Donate | Make a donation today and have an impact on a life',
    description: 'Make a donation today to help someone in need',
}
export default async function Page(){
  const causesitem = await sanityFetch<CausesItem[]>({ query: donationQuery});
  console.log("OUr Causes: ", causesitem)

  return (
    <>
    <Pageheader  className="" title="Donate now"/>
    <Donate/>
    </>
  )
}

// export default Page