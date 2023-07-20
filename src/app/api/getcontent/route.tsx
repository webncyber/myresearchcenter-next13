import { NextResponse } from "next/server";
import path from 'path';
import { readFileSync } from 'fs';

const gql = (url: string | null) => `
  query {
    listPages (where: { url: "${url}" }) {
        data{
            url,
            title,
            subTitle,
            blurb,
            content,
            heroImage,
            metaData
            {
              browserTitle,
              keywords,
              description
            }
          }
    }
  }
`;
export async function GET(request: Request) 
{
    const { searchParams } = new URL(request.url)
    let requestedPage = searchParams.get("url") != null ? searchParams.get("url") : "home";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      cache: "no-store",  
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gql(requestedPage),
        })
    })

    const data = await response.json();
    return NextResponse.json({data});
}