import { NextResponse } from "next/server";
import {gqlGetSitemap} from '../gql/sitemapQueries'

export async function GET() 
{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      cache: "no-store",  
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetSitemap(),
        })
    })

    const data = await response.json();
    const pages = await data.data.listPages;
    const blogs = await data.data.listBlogs;
    return NextResponse.json({pages,blogs});
}