import { navbarQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanityFetch";
import { NavbarSocials } from "@/typings";
import NavMenu from "./NavMenu";


export default async  function Home() {
    const navquery = await sanityFetch<NavbarSocials[]>({ query: navbarQuery });

  
    return (
      <>
          <NavMenu navquery={navquery}/>
      </>
    )
  }
  