import React from 'react'
import type { Metadata } from 'next';
import SingleColumnContent from '../../../components/singleColumnContent/SingleColumnContent'
import ImageCardContent from "../../../components/imageCard/imageCardContent";
import  {getBlogByUrl} from '../../../../../lib/blogs'
import SocialLinks from '@/app/components/socialLinks/socialLinks';
import { DefaultCard } from '../../../../../types';
import RichTextCardContent from '@/app/components/richTextCard/richTextCardContent';
import Hero from '@/app/components/hero/HERO';
import FooterNav from '@/app/components/navbars/footernav';

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
    <div className='hero-section'>
       <Hero 
            title={page.hero?.title} 
            subTitle={page.hero?.subTitle}  
            heroImage={page.hero?.heroImage}
            titleColor={page.hero?.titleColor}
            />
      </div>
      <div className='content-section'>
    <div className="single-column-content">
      <h2>{page?.title}</h2>
      {page.author && (
        <div className='author'> {page.author} | {date.toLocaleDateString("en-US")}</div>
      )}
      
    </div>
    {page.content &&(
        SingleColumnContent(page, "c")
      )}
      
      {page.contentList?.map((card:DefaultCard) => {
        switch (card.__typename) {
          case "Card":
           return(
            ImageCardContent(card)
           )
            break;
          case "RichTextCard":
             return(
              RichTextCardContent(card)
             )
            break;
        }
      })}
      
      {page.contentBottom && (
        SingleColumnContent(page, "cb")
      )}


<div className='footer-section'>
              <FooterNav/>
          </div>
          </div>
   </>
  )
}
