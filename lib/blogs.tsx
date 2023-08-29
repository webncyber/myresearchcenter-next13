import { Blog } from "../types";
import *  as Constants from './constants'
export async function  getBlogsListing(limit: string)
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogslisting?limit=" + limit;
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const blogsArray = jsonData.data.data.listBlogs.data;

  return blogsArray;
}

export async function  getBlogsByCategory(categoryValue: string)
{
    console.log("categoryValue: " + categoryValue)
    const fetchCategoryAPI = process.env.NEXT_PUBLIC_Host_Name + "/api/getcategoryentryid?categoryurl=" + categoryValue 
    const categoryAPIContent = await fetch(fetchCategoryAPI, {cache: "no-store"});
    const categoryJsonData = await categoryAPIContent.json();
    const entryId = categoryJsonData.category.entryId;
    
    console.log("entryId-2: " + entryId)
    const fetchBlogsAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogsbycategory?entryId=" + entryId;
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const blogsAPIContent = await fetch(fetchBlogsAPIUrl, {cache: "no-store"});
    const blogsJsonData = await blogsAPIContent.json();
    const blogsArray = blogsJsonData.data.data.listBlogs.data;

  return blogsArray;
}

export async function getBlogByCategoryAndUrl(category:string, url: string) : Promise<Blog>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogbyurlandcategory?url=" + url + "&cat=" + category;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listBlogs.data[0];

    const blogDetail: Blog = {
        title: pageData.title,
        hero: {
            title: pageData.hero.title,
            subTitle: pageData.hero.subTitle,
            heroImage: pageData.hero.heroImage,
            titleColor: pageData.hero.titleColor
        },
        content: pageData.content,
        contentListing: pageData.contentListing,
        contentBottom: pageData.contentBottom,
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
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogbyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listBlogs.data[0];

    const blogDetail: Blog = {
        title: pageData.title,
        hero: {
            title: pageData.hero.title,
            subTitle: pageData.hero.subTitle,
            heroImage: pageData.hero.heroImage,
            titleColor: pageData.hero.titleColor
        },
        content: pageData.content,
        contentListing: pageData.contentListing,
        contentBottom: pageData.contentBottom,
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
