import React from 'react'
import type { Metadata } from 'next';
import SingleColumnContent from '../../../components/singleColumnContent/SingleColumnContent'
import TwoColumnContent from "../../../components/twoColumnContent/twoColumnContent";
import  {getBlogByUrl} from '../../../../../lib/blogs'
import SocialLinks from '@/app/components/socialLinks/socialLinks';

export  async function generateMetadata({
  params,
}: {
  params: { blogId: string, categoryId: string };
}): Promise<Metadata> 
{
  let url = "/blogs/" + params.categoryId + "/" + params.blogId
  const pageData = await getBlogByUrl(url);
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



export default async function BlogDetails({
  params,
}: {
  params: { blogId: string, categoryId: string };
}) {

  let url = "/blogs/" + params.categoryId + "/" + params.blogId
  const blogData = getBlogByUrl(url)
  let page = await blogData
  let pubDate = page.publishedDate != undefined ? page.publishedDate : "";
  let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  let date  = new Date(pubDate);

  return (
    <>
    <div className="single-column-content">
      <h2>{page?.title}</h2>
      {page.author && (
        <div className='author'> {page.author} | {date.toLocaleDateString("en-US")}</div>
      )}
      
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
   </>
  )
}
