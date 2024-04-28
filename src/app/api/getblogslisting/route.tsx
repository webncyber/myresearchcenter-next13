import { NextResponse } from "next/server";
import {gqlGetBlogsListing} from '../gql/blogQueries'
import { revalidateAPITag } from "../../../../lib/constants";

export async function GET(request: Request) 
{
  const { searchParams } = new URL(request.url)
  let limit = searchParams.get("limit") != null ? searchParams.get("limit") : "0";
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      //next: { tags: [revalidateAPITag] },
      cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetBlogsListing(limit),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}