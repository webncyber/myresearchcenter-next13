import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import GoogleAnalytics from './components/googleAnalytics/ga';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics/>
      <body>
      <div className='container'>
        <div className='heading-section'>
          <TopNav />
        </div>
        <div className="content-centered">
     
        {children}

       
        </div>
      </div>
      </body>
    </html>
  )
}
