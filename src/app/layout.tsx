import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import SingleColumnContent from './components/singleColumnContent/SingleColumnContent'
import {getCurrentPage} from '../../lib/page'
const inter = Inter({ subsets: ['latin'] })

let heroImagePath = "/Images/bkgHome.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='container'>
        <div className='heading-section'>
          <TopNav />
        </div>
          {children}
       
      </div>
      <div className='content-centered'>
            <div className='footer-section'>
                <FooterNav/>
          </div> 
          </div>
      </body>
    </html>
  )
}
