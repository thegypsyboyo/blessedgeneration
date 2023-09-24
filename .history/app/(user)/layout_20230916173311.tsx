import type { Metadata } from 'next'
import { Nunito, Manrope, Caveat, Inter } from 'next/font/google'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'

import '../globals.css'
import "../main.scss"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavMenu from '@/components/Home/NavMenu'
import { NavbarSocials } from '@/typings'
import Home from '@/components/Home/navFetch'
config.autoAddCss = false;

// const caveat = Caveat({ 
//   subsets: ['cyrillic'],
//   variable: '--font-cav',
//   display: 'swap',
// })

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nun',
  display: 'swap',
  // adjustFontFallback: false
})
const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-man',
  display: 'swap',
  // adjustFontFallback: false
})
const caveat = Caveat({ 
  subsets: ['cyrillic'], 
  display: 'swap', 
  // adjustFontFallback: false,
  variable: "--font-cav"
})

export const metadata: Metadata = {
  title: 'Blessed Generation | A website about the "Blessed Generation" family',
  description: 'A website about the "Blessed Generation" family',
}

export default function RootLayout({
  children, navquery
}: {
  children: React.ReactNode
  navquery: NavbarSocials[] 
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable}  ${manrope.variable}  ${nunito.variable} font-nun`}>
      {/* <body className={caveat.variable}> */}
        {/* <Navbar/> */}
        <Home/>
        {/* <NavMenu  navquery={navquery}/> */}
          {children}
        <Footer/>
      </body>
    </html>
  )
}
