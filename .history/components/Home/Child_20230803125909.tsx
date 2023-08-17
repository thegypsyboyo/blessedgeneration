import Image from "next/image"
import Layout from "./Layout"
import AnimatedButton from "@/constants/AnimatedButton"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faHandPaper, faUser } from "@fortawesome/free-solid-svg-icons"

const Child = () => {
  return (
    <section className="relative block w-full overflow-hidden h-full">
        <Layout  className="">
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[50%] xl:max-w-[33.3333333%] w-full">
                    <div className="relative block h-full">
                        <div className="relative block h-full">
                            <Image src="/images/events/image-3.jpg" alt="child-in-need" width={400} height={500} priority className="w-full h-full object-cover rounded-bl-[85px]"/>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[50%] xl:max-w-[66.6666667%] w-full h-full">
                    <div className="relative block w-full h-full ">
                        <div className="relative bg-primaryBase pl-[60px] pt-[50px] pb-[50px] z-[1] w-full h-full">
                            <div className="absolute bottom-0 top-0 -right-[1000000px] left-0 content-[] bg-primaryBase -z-[1] h-full"/>
                            <div className="absolute bottom-[50px] right-0">
                                <AnimatedButton className="bg-white" link="/donate" style="hover:text-black rounded-[10px]" text="donate now"/>
                            </div>
                            <ul className="relative flex items-center space-x-4">
                                <li className="">
                                    <Link href="" className="text-[14px] text-white font-[600]">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[15px] text-yellowColor pr-[3px]"/>
                                        45 Days Left
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-[14px] text-white font-[600]">
                                        <FontAwesomeIcon icon={faUser} className="text-[15px] text-yellowColor pr-[3px]"/>
                                        40+ Supporters
                                    </Link>
                                </li>
                            </ul>
                            <h3 className="text-[36px] font-[900] text-white leading-[46px] -tracking-[0.04]">Help sponsor this child through collage</h3>
                            <p className="text-[16px] text-[#89d3c6] pt-[10px] pb-[31px]">Proactively procrastinate cross-platform results via
                            extensive ideas distinctively  underwhelm enterprise.</p>
                            <ul className="flex relative items-center space-x-4">
                               
                                <li className="reltive flex items-center">
                                    <div className="relative flex items-center justify-center h-[60px] w-[60px] bg-primaryDark rounded-[50%] transition-all duration-700">
                                        <FontAwesomeIcon icon={faHandPaper} className="text-[25px] text-white transition-all duration-700 ease-in"/>
                                    </div>
                                    <div className="ml-[20px]">
                                        <p className="text-[24px] text-yellowColor font-cav font-[700] leading-[24px]">Raised</p>
                                        <h4 className="text-[24px] text-white font-[900] leading-[24px] -tracking-[0.04] mt-[6px]">Ksh.26,000</h4>
                                    </div>
                                </li>
                                <li className="reltive flex items-center">
                                    <div className="relative flex items-center justify-center h-[60px] w-[60px] bg-primaryDark rounded-[50%] transition-all duration-700">
                                        <span className="text-[25px] text-white transition-all duration-700 ease-in">Ksh</span>
                                    </div>
                                    <div className="ml-[20px]">
                                        <p className="text-[24px] text-yellowColor font-cav font-[700] leading-[24px]">Our goal</p>
                                        <h4 className="text-[24px] text-white font-[900] leading-[24px] -tracking-[0.04] mt-[6px]">Ksh.66,000</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Child