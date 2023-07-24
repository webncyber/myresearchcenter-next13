import Image from 'next/image'
import type { Metadata } from 'next';
import { title } from 'process';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import SingleColumnContent from './components/singleColumnContent/SingleColumnContent'
import  {getCurrentPage} from '../../lib/page'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = getCurrentPage("home");
  let page = await pageData

  const siteUrl = process.env.Host_Name
  const canonicalUrl = siteUrl;
  let heroImagePath =  page?.heroImage;
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


export default async function Home() {
  const pageData = getCurrentPage("home");
  let page = await pageData;

  return (
    <div>
       <div className='hero-section'>
       <Hero url={page.heroImage} headingOne={page?.title} headingTwo={page?.subTitle} />
      </div>

      <div className="content-centered">
        <div className='content-section'>
        {
          SingleColumnContent(page)
        }
        </div>
    </div>
    </div>
   
  )
}


