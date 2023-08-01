import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import GoogleAnalytics from './components/googleAnalytics/ga';
import { headers } from 'next/headers'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      {/* <GoogleAnalytics/> */}
      <body className={inter.className}>
      <div className='container'>
        <div className='heading-section'>
          <TopNav />
          <div className='hero-section'>
       <Hero />
      </div>
        </div>
        <div className="content-centered">
        <div className='content-section'>
        {children}
        <div className='footer-section'>
                <FooterNav/>
          </div> 
        </div>
    </div>
      </div>
      </body>
    </html>
  )
}
