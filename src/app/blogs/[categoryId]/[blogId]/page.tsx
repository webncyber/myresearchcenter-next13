"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import type { Metadata } from 'next';
import Hero from '../../../components/hero/HERO'
import SingleColumnContent from '../../../components/singleColumnContent/SingleColumnContent'
import  {getBlogByUrl} from '../../../../../lib/blogs'

export default async function BlogDetails() 
{
  let path = usePathname();
  let hostName = process.env.NEXT_PUBLIC_Host_Name != undefined ? process.env.NEXT_PUBLIC_Host_Name : "";
  let url = path.toString().replace(hostName, "")
  const pageData = getBlogByUrl(url)
  let page = await pageData

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
