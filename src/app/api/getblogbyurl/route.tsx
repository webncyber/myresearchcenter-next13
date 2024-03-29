import { NextResponse } from "next/server";
import {gqlGetBlogByURL} from '../gql/blogQueries'

export async function GET(request: Request) 
{
  
    const { searchParams } = new URL(request.url)
    
    let requestedPage = searchParams.get("url") != null ? searchParams.get("url") : "";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      cache: "no-store",  
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetBlogByURL(requestedPage),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}