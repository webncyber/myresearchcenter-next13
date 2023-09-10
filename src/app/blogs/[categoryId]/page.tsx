import React from 'react'
import type { Metadata } from 'next';
import SingleColumnContent from '../../components/singleColumnContent/SingleColumnContent'
import  {getCategoryPageByUrl} from '../../../../lib/categories'
import {BlogListingByCategory} from '../../components/blogListing/BlogsByCategory';

import TwoColumnContent from "../../components/twoColumnContent/twoColumnContent";
import { log } from 'console';
import SocialLinks from '@/app/components/socialLinks/socialLinks';
const blogsPahtName = "/blogs/";

export async function generateMetadata({
  params,
}: {
  params: {categoryId: string };
}): Promise<Metadata> 
{
  const pageData = await getCategoryPageByUrl(blogsPahtName + params.categoryId);
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

export default async function Blogs({
  params,
}: {
  params: {categoryId: string };
}) {

  const pageData = getCategoryPageByUrl(blogsPahtName + params.categoryId);
  let page = await pageData;
 
  return (

    <>
     <div className="single-column-content">
      <h2>{page?.title}</h2>
    </div>
      {page.content &&(
        SingleColumnContent(page, "c")
      )}
      
      {page.contentListing &&(
        TwoColumnContent(page)
      )}
      {page.contentBottom && (
        SingleColumnContent(page, "cb")
      )}
      <div>{BlogListingByCategory((blogsPahtName + params.categoryId))}</div>
    
    </>
   
  )
}
