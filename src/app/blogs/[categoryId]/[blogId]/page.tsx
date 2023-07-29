"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import type { Metadata } from 'next';
import SingleColumnContent from '../../../components/singleColumnContent/SingleColumnContent'
import  {getBlogByUrl} from '../../../../../lib/blogs'


export default async function BlogDetails() 
{
  let path = usePathname();
  let hostName = process.env.NEXT_PUBLIC_Host_Name != undefined ? process.env.NEXT_PUBLIC_Host_Name : "";
  let url = path.toString().replace(hostName, "")
  const pageData = getBlogByUrl(url)
  let page = await pageData
  let pubDate = page.publishedDate != undefined ? page.publishedDate : "";
  let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  let date  = new Date(pubDate);
  return (
    <div className="single-column-content">
      <h2>{page?.title}</h2>
      <div className='author'>{page.author} | {date.toLocaleDateString("en-US")}</div>
      {
          SingleColumnContent(page)
      }
 </div>
  )
}
