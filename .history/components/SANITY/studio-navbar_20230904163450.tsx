import Link from "next/link"
import {HiArrowUturnLeft} from "react-icons/hi2"
import "../../app/globals.css"
import "../../app/main.scss"

const StudioNavbar = (props:any) => {
  return (
    <div className="w-full h-full bg-white py-[30px]">
        <div className="navbar-sanity">
            <Link href="/" className="nav-arrow-sanity w-auto bg-transparent flex items-center">
                <HiArrowUturnLeft className="w-[20px] h-[20px] text-white"/>
                <span>go back</span>
            </Link>

            <div className="info-about-us">
               <h2>The drive for restoration</h2>
               <Link href="mailto:treasuretreeskenya@gmail.com">
                <span>contact me</span> : <p>treasuretreeskenya</p></Link> 
            </div>
        </div>
        <>{props.renderDefault(props)}</>

    </div>
  )
}

export default StudioNavbar