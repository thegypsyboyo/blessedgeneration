import { navbarQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanityFetch";
import { NavbarSocials } from "@/typings";
import NavMenu from "./NavMenu";


export default async function navFetch() {
    const navquery = await sanityFetch<NavbarSocials[]>({ query: navbarQuery });
    console.log("navquery: ", navquery)


    return (
        <>
        <NavMenu navquery={navquery}/>
        </>
    )
}