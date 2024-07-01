import { NextResponse } from "next/server";
import {gqlGetPageByURL} from '../../../../lib/gql/pageQueries'
import { revalidateAPITag } from "../../../../lib/constants";

export async function GET(request: Request) 
{
    const { searchParams } = new URL(request.url)
    let requestedPage = searchParams.get("url") != null ? searchParams.get("url") : "/home";
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-tenant": "root",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetPageByURL(requestedPage),
        })
    })

    const page = await response.json();
    return NextResponse.json({page});
}