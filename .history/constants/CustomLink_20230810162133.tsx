import Link from "next/link"
import { usePathname } from "next/navigation"

export const CustomLink = ({ href, title, className="" }:any) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={`${className} relative group text-white`}>
            {title}
            <span className={`h-[1px] bg-white inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${currentPath === href ? 'w-full': 'w-0'}`}>&nbsp;</span>

        </Link>
    );
}