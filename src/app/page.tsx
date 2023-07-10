import Image from 'next/image'
import type { Metadata } from 'next';
import { title } from 'process';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import SingleColumnContent from './components/singleColumnContent/SingleColumnContent'
import  {getCurrentPage} from '../../lib/page'
let page = {} as Page;


export async function generateMetadata(): Promise<Metadata> {

  const pageData = getCurrentPage("home");
  page = await pageData

  const siteUrl = process.env.Host_Name
  console.log("siteUrl: " + siteUrl)
  const canonicalUrl = siteUrl;
  let heroImagePath =  page?.imageUrl;
  const canonical = { canonical: canonicalUrl }
  const twitter = { card: "summary_large_image", site: siteUrl, creator: "Nazareth", "images": heroImagePath }
  const metaDesc = "Research Center is where you can find your ideal blog posts for the products you are searching for, tips and tricks, or compare products.";
  return {
    title: "My Research Center",
    description: metaDesc,
    keywords: "research center, Search, research, products compare, compare",
    robots: "index, follow",
    alternates: canonical,
    twitter: twitter,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title:  page?.title,
      description: metaDesc,
      siteName: "myresearchcenter.com",
      images: [{
        url: heroImagePath !=  undefined ? heroImagePath : "/Images/bkgHome.jpg",
      }],
    }
   }
}


export default function Home() {
  let heroImagePath = "/Images/bkgHome.jpg";

  return (
    <div className='content-section'>
      {
        SingleColumnContent(page)
      }
    </div>

  )
}


