import { NextResponse } from "next/server";
import {gqlGetBlogsByCategoryId} from '../gql/blogQueries'
import {gqlCategoryByValue} from '../gql/categoryQueries'


export async function GET (request:Request) 
{
  const { searchParams } = new URL(request.url)
  let categoryValue = searchParams.get("categoryvalue") != null ? searchParams.get("categoryvalue") : "";
  console.log("categoryValue-2: " + categoryValue)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
    cache: "no-store",  
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      body: JSON.stringify({
        query: gqlCategoryByValue(categoryValue),
      })
  })  

  const jsonData = await response.json();
  const category = await jsonData.data.listCategories.data[0];

  return NextResponse.json({category});
}