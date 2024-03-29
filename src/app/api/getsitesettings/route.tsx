import { NextResponse } from "next/server";
import {gqlGetTopNav, gqlGetFooterNav, gqlGetSocialLinks} from '../gql/settingQueries'

export async function GET(request: Request) 
{
  const { searchParams } = new URL(request.url)
  let option = searchParams.get("o") != null ? searchParams.get("o") : "tn";
  switch(option)
  {
    case "tn":
        const tnResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
            method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
              },
              body: JSON.stringify({
                query: gqlGetTopNav(),
              })
          })
      
          const tnData = await tnResponse.json();
          const header = tnData.data.listSiteSettings.data[0]
          return NextResponse.json({header});
    case "fn":
        const fnResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
            method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
              },
              body: JSON.stringify({
                query: gqlGetFooterNav(),
              })
          })
      
          const fnData = await fnResponse.json();
          const footer = fnData.data.listSiteSettings.data[0]
          return NextResponse.json({footer});
    case "sm":
        const smResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
            method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
              },
              body: JSON.stringify({
                query: gqlGetSocialLinks(),
              })
          })
      
          const smData = await smResponse.json();
          const social =  smData.data.listSiteSettings.data[0];
          return NextResponse.json({social});
  }

}