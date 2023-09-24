import { LayoutProps } from "@/typings"
import React from "react"

const Layout:React.FC<LayoutProps> = ({ className, children}) => {

  return (
    <div className={`flex ml-auto mr-auto  sm:max-w-440 md:max-w-720 lg:max-w-1140 xl:max-w-[1280px] 2xl:max-w-1320 ${className}`}>
        {children}
    </div>
  )
}

export default Layout