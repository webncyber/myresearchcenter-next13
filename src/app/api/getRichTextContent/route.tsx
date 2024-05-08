import { NextResponse } from "next/server";
import {gqlRichTextCard} from '../../../../lib/gql/pageQueries'
import { revalidateAPITag } from "../../../../lib/constants";

export async function GET(request: Request) 
{
    const { searchParams } = new URL(request.url)
    let entryId = searchParams.get("id") != null ? searchParams.get("id") : "/home";
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      //next: { tags: [revalidateAPITag] },
      cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlRichTextCard(entryId),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}