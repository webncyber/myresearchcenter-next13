import { NextResponse } from "next/server";
import {gqlGetBlogsByCategoryId} from '../gql/blogQueries'
import {gqlCategoryByURL} from '../gql/categoryQueries'
import { revalidateAPITag } from "../../../../lib/constants";


export async function GET (request:Request) 
{
  const { searchParams } = new URL(request.url)
  let categoryValue = searchParams.get("categoryurl") != null ? searchParams.get("categoryurl") : "";
  console.log("categoryValue-2: " + categoryValue)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
    next: { tags: [revalidateAPITag] },
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      body: JSON.stringify({
        query: gqlCategoryByURL(categoryValue),
      })
  })  

  const jsonData = await response.json();
  const category = await jsonData.data.listCategories.data[0];

  return NextResponse.json({category});
}