import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

interface CustomLinkProps {
    href: string,
    title: string,
    className: string,
}


export const CustomLink:React.FC<CustomLinkProps> = ({ href, title, className="" }) => {

    const router = usePathname()
    console.log("Router",router)
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] bg-orangeDefault inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-white`}>&nbsp;</span>
        </Link>
    )
}