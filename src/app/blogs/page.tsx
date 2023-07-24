import React from 'react'
import type { Metadata } from 'next';
import SingleColumnContent from '../components/singleColumnContent/SingleColumnContent'
import  {getCurrentPage} from '../../../lib/page'
import Hero from '../components/hero/HERO';
import BlogListing from '../components/blogListing/BlogListing';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = getCurrentPage("blogs");
  let page = await pageData

  const siteUrl = process.env.Host_Name
  const canonicalUrl = siteUrl;
  let heroImagePath =  page?.heroImage;
  const canonical = { canonical: canonicalUrl }
  const twitter = { card: "summary_large_image", site: siteUrl, creator: "Nazareth", "images": heroImagePath }
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


export default async function Blogs() {
  const pageData = getCurrentPage("blogs");
  let page = await pageData;
 
  return (
    <div>
       <Hero url={page.heroImage} headingOne={page?.title}  />
       <div className="content-centered">
        <div className='content-section'>
            {
                SingleColumnContent(page)
            }
            <BlogListing/>
        </div>
       </div>
    </div>
   
  )
}
