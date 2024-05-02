import { gqlGetBlogByURL, gqlGetBlogByURLAndCategory, gqlGetBlogsByCategoryId, gqlGetBlogsListing } from "./gql/blogQueries";
import { Blog } from "../types";
import { revalidateAPITag } from "./constants";
import { gqlCategoryByURL } from "./gql/categoryQueries";

export async function  getBlogsListing(limit: string)
{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        //cache: "no-store",
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          },
          body: JSON.stringify({
            query: gqlGetBlogsListing(limit),
          })
      })
  
    const jsonData = await response.json();
    const blogsArray = jsonData.data.listBlogs.data;

  return blogsArray;  
}

export async function  getBlogsByCategory(categoryValue: string)
{
    const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlCategoryByURL(categoryValue),
        })
    })  
  
    const categoryJson = await categoryResponse.json();
    const entryId = categoryJson.data.listCategories.data[0].entryId;

    const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        ///cache: "no-store",
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          },
          body: JSON.stringify({
            query: gqlGetBlogsByCategoryId(entryId),
          })
      })
  
      const blogsJsonData = await blogsResponse.json();
      const blogsArray = blogsJsonData.data.listBlogs.data;
  

  return blogsArray;
}


//This was not in use but currently not wokring - maybe delete it 
export async function getBlogByCategoryAndUrl(category:string, url: string) : Promise<Blog>
{
    let requestedBlogUrl = url;
    let requestedBlogCatId = category;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetBlogByURLAndCategory(requestedBlogCatId, requestedBlogUrl),
        })
    })

    const jsonData = await response.json();

    const pageData = jsonData.data.listBlogs.data[0];

    const blogDetail: Blog = {
        url: pageData.url,
        title: pageData.title,
        hero: pageData.hero ? {
            title: pageData.hero.title,
            subTitle: pageData.hero.subTitle,
            heroImage: pageData.hero.heroImage,
            titleColor: pageData.hero.titleColor
        } : undefined,
        contentTopSpacing: pageData?.contentTopSpacing,
        contentTop: pageData.contentTop != "<p><br></p>" ? pageData.contentTop : undefined,
        contentBottom: pageData.contentBottom != "<p><br></p>" ? pageData.contentBottom : undefined,
        contentList: pageData.contentList,
        subTitle: pageData.subTitle,
        author: pageData.author, 
        publishedDate: pageData.publishedDate,
        metaData: {
            browserTitle: pageData.metaData.browserTitle,
            keywords: pageData.metaData.keywords,
            description: pageData.metaData.description
        },
    }

    return blogDetail; 
}


export async function getBlogByUrl(url: string) : Promise<Blog>
{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        //cache: "no-store",
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          },
          body: JSON.stringify({
            query: gqlGetBlogByURL(url),
          })
      })
  
    const jsonData = await response.json();
    const pageData = jsonData.data.listBlogs.data[0];
    if(pageData == undefined)
    {
        const blankPage: Blog = {
            title: "Please try again later",
            url: "/",
            hero:{},
            metaData: {
                browserTitle: "My Research Center",
            },
        }
    
       return blankPage;

    }else{
        const blogDetail: Blog = {
            url: pageData.url,
            title: pageData.title,
            hero: pageData.hero ? {
                title: pageData.hero.title,
                subTitle: pageData.hero.subTitle,
                heroImage: pageData.hero.heroImage,
                titleColor: pageData.hero.titleColor
            } : undefined,
            contentBackgroundColor: pageData?.contentBackgroundColor,
            contentTopBackgroundColor: pageData?.contentTopBackgroundColor,
            contentBottomBackgroundColor: pageData?.contentBottomBackgroundColor,
            contentTopSpacing: pageData?.contentTopSpacing,
            contentTop: pageData.contentTop != "<p><br></p>" ? pageData.contentTop : undefined,
            contentBottom: pageData.contentBottom != "<p><br></p>" ? pageData.contentBottom : undefined,
            contentList: pageData.contentList,
            subTitle: pageData.subTitle,
            author: pageData.author, 
            publishedDate: pageData.publishedDate,
            metaData: {
                browserTitle: pageData.metaData.browserTitle,
                keywords: pageData.metaData.keywords,
                description: pageData.metaData.description
            },
            hideFooterNavigation: pageData?.hideFooterNavigation
        }
    
        return blogDetail; 
    }
   
}
