import { NextResponse } from "next/server";
import {gqlGetBlogByURLAndCategory} from '../gql/blogQueries'

export async function GET(request: Request) 
{
  
    const { searchParams } = new URL(request.url)
    
    let requestedBlogUrl = searchParams.get("url") != null ? searchParams.get("url") : "";
    let requestedBlogCatId = searchParams.get("cat") != null ? searchParams.get("cat") : "";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetBlogByURLAndCategory(requestedBlogCatId, requestedBlogUrl),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}