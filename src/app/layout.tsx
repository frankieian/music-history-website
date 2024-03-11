/**
 * Shared UI for a segment and its children
 * 
 */
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'

import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

const nunito = Nunito({
  subsets: ['latin'],
  style: ['normal']
})

//h-[calc(100vh-11.5rem)]
export const metadata: Metadata = {
  title: 'Music History',
  description: 'Statistics for your music history',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {/** Screen wrapper. Must always be height of screen */}
        <div className='relative min-h-screen'>
          <div className='pb-14'>
            {/** NavBar */}
            <NavBar/>
            {/**Main body*/}
            <main>{children}</main>
          </div>
          {/** Footer */}
          <Footer/>
        </div>
      </body>
      
    </html>
  )
}
