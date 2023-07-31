import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import GoogleAnalytics from './components/googleAnalytics/ga';
import {getPageByUrl} from '../../lib/page'
import  {getBlogByUrl} from '../../lib/blogs'

const headers = import('next/headers')
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> 
{
  const headersList = await headers
  let url  = headersList.headers().get("x-url")
  let hostName = process.env.NEXT_PUBLIC_Host_Name != undefined ? process.env.NEXT_PUBLIC_Host_Name : ""
  let requestUrl = url?.replace(hostName, "")

  let blogDetailtype = true;

  if(requestUrl == "/")
  {
    requestUrl = "/home"
  }

  if(requestUrl == "/home")
  {
      blogDetailtype = false;
  }else if(requestUrl == "/blogs")
  {
      blogDetailtype = false;
  }else{
      blogDetailtype = true;
  }

  const pageData = (requestUrl != null) && blogDetailtype ? getBlogByUrl(requestUrl) :
  (requestUrl != null) && !blogDetailtype ? getPageByUrl(requestUrl) : getPageByUrl("/home");

  let page = await pageData
  const siteUrl = process.env.NEXT_PUBLIC_Host_Name
  const canonicalUrl = siteUrl;
  let heroImagePath =  page?.hero?.heroImage;
  const canonical = { canonical: canonicalUrl }
  const twitter = { card: "summary_large_image", site: siteUrl, creator: "Nazareth", "images": heroImagePath }
  const metaDesc = "Research Center is where you can find your ideal blog posts for the products you are searching for, tips and tricks, or compare products.";
  return {
    title: page.metaData?.browserTitle,
    description: page.metaData?.description,
    keywords: page.metaData?.keywords,
    robots: "index, follow",
    alternates: canonical,
    twitter: twitter,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title:  page?.title,
      description: page.metaData?.description,
      siteName: "myresearchcenter.com",
      images: [{
        url: heroImagePath !=  undefined ? heroImagePath : "/Images/bkgHome.jpg",
      }],
    }
   }
}


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
