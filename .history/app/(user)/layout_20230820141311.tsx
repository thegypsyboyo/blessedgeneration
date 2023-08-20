import type { Metadata } from 'next'
import { Nunito, Manrope, Caveat, Inter } from 'next/font/google'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'

import '../globals.css'
import "../main.scss"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


// const caveat = Caveat({ 
//   subsets: ['cyrillic'],
//   variable: '--font-cav',
//   display: 'swap',
// })

// const nunito = Nunito({ 
//   subsets: ['latin'],
//   variable: '--font-nun',
//   display: 'swap',
// })
// const manrope = Manrope({ 
//   subsets: ['latin'],
//   variable: '--font-man',
//   display: 'swap',
// })
const inter = Caveat({ 
  subsets: ['latin'], 
  display: 'swap', 
  adjustFontFallback: false,
  variable: "--font-cav"
})
export const metadata: Metadata = {
  title: 'Blessed Generation | A website about the "Blessed Generation" family',
  description: 'A website about the "Blessed Generation" family',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={`${caveat.variable}  ${manrope.variable}  ${nunito.variable} font-nun`}> */}
      <body className={inter.variable}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
