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
      <div className={`relative py-[150px] z-[1000] h-[350px] px-0 overflow-hidden break-words bg-cover bg-center bg-yellowColor  ${className}`} >

          <div className="w-full h-[400px]"
          >
              <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full  ">
                  <h2 className="text-white leading-[50px] font-[900] tracking-[-0.04em] mb-[6px] text-[35px]">{title}</h2>
                  <ul className="relative z-10 space-x-4">
                      <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500 text-center"><Link href="/"  className="relative inline-block text-white text-[16px] text-center">
                        <FontAwesomeIcon icon={faHome} className="mr-2"/>
                        Home</Link></li>
                      <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500"><span>-</span></li>
                      <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500">{title}</li>
                  </ul>
              </div>
          </div>
      </div>
    ):(
      <div className={`relative py-[150px] z-[1000]  h-[350px] px-0 overflow-hidden break-words bg-cover bg-center bg-transparent  ${className}`}
      style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className="w-full h-[400px]"
        >
            <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full  ">
                <h2 className="text-white leading-[50px] font-[900] tracking-[-0.04em] mb-[6px] text-[35px]">{title}</h2>
                <ul className="relative z-10 space-x-4">
                    <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500 text-center"><Link href="/"  className="relative inline-block text-white text-[16px] text-center">
                      <FontAwesomeIcon icon={faHome} className="mr-2"/>
                      Home</Link></li>
                    <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500"><span>-</span></li>
                    <li className="relative inline-block text-white text-[16px] font-[600] transition-all duration-500">{title}</li>
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