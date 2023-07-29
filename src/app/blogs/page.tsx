import React from 'react'
import type { Metadata } from 'next';
import SingleColumnContent from '../components/singleColumnContent/SingleColumnContent'
import  {getPageByUrl} from '../../../lib/page'
import BlogListing from '../components/blogListing/BlogListing';


export default async function Blogs() {
  const pageData = getPageByUrl("/blogs");
  let page = await pageData;
 
  return (
   <div className="single-column-content">
      <h2>{page?.title}</h2>
      {
            SingleColumnContent(page)
       }
           <BlogListing/>
    </div>
   
  )
}
