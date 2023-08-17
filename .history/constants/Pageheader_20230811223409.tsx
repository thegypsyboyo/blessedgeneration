import Link from "next/link"

interface PropsHeader {
    title: string,
    bgImage: string,
    className: string,
}

const Pageheader = ({title, bgImage, className}:PropsHeader) => {
  return (
    // <div className={`relative  h-[350px] px-[15px] py-[121px] z-[1] bg-primaryDark w-full flex items-center justify-center ${className}`}>
    <div className={`relative py-[150px] px-0 overflow-hidden break-words bg-cover bg-center bg-#ecf6fa ${className}`}  style={{backgroundImage: `url(${bgImage})`}}>
      <div className="absolute content-[] py-[150px] h-full left-0 opacity-[0.5] top-0 w-full -z-[1] bg-#000000 bg-no-repeat bg-scroll bg-center"/>
         {/* <div 
       style={{backgroundImage: `url(${bgImage})`}}
       className='bg-cover h-full w-full absolute top-0 bottom-0 left-0 right-0 mix-blend-luminosity bg-no-repeat bg-primaryDark bg-center  opacity-[0.7] -z-[1]' 
       /> */}
        {/* <div className="w-full h-[350px]"
        >
            <div className="relative flex flex-col h-[350px] items-center justify-center  text-center z-[15] w-full  ">
                <ul className="relative z-10 space-x-4">
                    <li className="relative inline-block text-orangeDefault text-[16px] font-[600] transition-all duration-500 text-center"><Link href="/"  className="relative inline-block text-white text-[16px] text-center">Home</Link></li>
                    <li className="relative inline-block text-orangeDefault text-[16px] font-[600] transition-all duration-500"><span>/</span></li>
                    <li className="relative inline-block text-yellowColor text-[16px] font-[600] transition-all duration-500">{title}</li>
                </ul>
                <h2 className="text-orangeDefault leading-[50px] font-[900] tracking-[-0.04em] mb-[6px] text-[35px]">{title}</h2>
            </div>
        </div> */}
    </div>
  )
}

export default Pageheader