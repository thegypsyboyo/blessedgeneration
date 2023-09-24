import Link from "next/link"
import { usePathname } from "next/navigation"


export const CustomNavLink = ({ href, title, className="" }:any) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={`${className} relative group text-dark text-[16px] flex transition-all duration-500 font-[600] h-full capitalize ${currentPath === href ? 'text-RedDark': ''}`}>
            {title}
            <span className={`h-[1px] bg-redDark inline-block absolute left-0 bottom-[0x] group-hover:w-full transition-[width] ease duration-300 ${currentPath === href ? 'w-full': 'w-0'}` }>&nbsp;</span>
        </Link>
    );
}