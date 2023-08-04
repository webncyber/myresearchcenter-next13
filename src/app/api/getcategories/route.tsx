import { NextResponse } from "next/server";
import {gqlGetCategoryListing} from '../gql/categoryQueries'

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
          query: gqlGetCategoryListing(),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}