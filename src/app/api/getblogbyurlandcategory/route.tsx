import { NextResponse } from "next/server";
import {gqlGetBlogByURLAndCategory} from '../../../../lib/gql/blogQueries'
import { revalidateAPITag } from "../../../../lib/constants";

export async function GET(request: Request) 
{
  
    const { searchParams } = new URL(request.url)
    
    let requestedBlogUrl = searchParams.get("url") != null ? searchParams.get("url") : "";
    let requestedBlogCatId = searchParams.get("cat") != null ? searchParams.get("cat") : "";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
     //next: { tags: [revalidateAPITag] },
      cache: "no-store",
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