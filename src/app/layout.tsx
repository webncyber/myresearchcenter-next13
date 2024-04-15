import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import GoogleAnalytics from './components/googleAnalytics/ga';
import { getSiteBackgroundColor } from "../../lib/siteSettings";

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let settings = await getSiteBackgroundColor();
  var bgColor = {backgroundColor: settings?.siteBackgroundColor?.code}
  var bodyStyle = {}

  if(bgColor){
    bodyStyle = {...bgColor}
  }

  return (
    <html lang="en">
      <GoogleAnalytics/>
      <body style={bodyStyle}>
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
