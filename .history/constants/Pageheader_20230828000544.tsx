import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface PropsHeader {
    title: string,
    bgImage?: string,
    className?: string,
}

const Pageheader = ({title, bgImage, className}:PropsHeader) => {
  return (
    <>
    {!bgImage ? (
      <div className={`relative py-[150px] z-[1] h-[400px] px-0 overflow-hidden break-words bg-cover bg-center  ${className}`} >
          <div className="elementBefore"/>
          <div className="aferShadow"/>
          <div className="w-full h-[400px]"
          >
              <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full  ">
                  <h2 className="text-white leading-[50px] font-[900] tracking-[-0.04em] mb-[6px] text-[35px]">{title}</h2>
                  <ul className="relative z-1 space-x-4">
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        <Link href="/"  className="relative inline-block text-white  text-center ">
                        <FontAwesomeIcon icon={faHome} className="mr-2"/>
                        Home</Link></li>
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        {title}
                        <span className="lineStraight" /> 
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    ):(
      <div className={`relative py-[150px] z-[1]  h-[400px] px-0 overflow-hidden break-words bg-cover bg-center ${className}`}
      style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className="w-full h-[400px]"
        >
            <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full  ">
                <h1 className="text-white font-[600] tracking-[-0.04em] mb-[20px] text-[40px] inline-block font-man mt-[-10px]">{title}</h1>
                <ul className="relative z-1 space-x-4">
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        <Link href="/"  className="relative inline-block text-white  text-center ">
                        <FontAwesomeIcon icon={faHome} className="mr-2"/>
                        Home</Link></li>
                      <li className="relative inline-block text-white font-man font-[600] py-0 px-[20px] z-[1] uppercase text-[14px]">
                        {title}
                        <span className="lineStraight" /> 
                      </li>
                </ul>
            </div>
        </div>
        <div className="bg-layer"/>
    </div>
    )}
    </>
  )
}

export default Pageheader