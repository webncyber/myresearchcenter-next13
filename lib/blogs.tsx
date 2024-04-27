import { Blog } from "../types";

export async function  getBlogsListing(limit: string)
{
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogslisting?limit=" + limit;
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    fetchAPIUrl += "&tm=" + Date.now();
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const blogsArray = jsonData.data.data.listBlogs.data;

  return blogsArray;
}

export async function  getBlogsByCategory(categoryValue: string)
{
    let fetchCategoryAPI = process.env.NEXT_PUBLIC_Host_Name + "/api/getcategoryentryid?categoryurl=" + categoryValue 
    fetchCategoryAPI += "&tm=" + Date.now();
    const categoryAPIContent = await fetch(fetchCategoryAPI, {cache: "no-store"});
    const categoryJsonData = await categoryAPIContent.json();
    const entryId = categoryJsonData.category.entryId;
    
    let fetchBlogsAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogsbycategory?entryId=" + entryId;
    fetchBlogsAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const blogsAPIContent = await fetch(fetchBlogsAPIUrl, {cache: "no-store"});
    const blogsJsonData = await blogsAPIContent.json();
    const blogsArray = blogsJsonData.data.data.listBlogs.data;

  return blogsArray;
}

export async function getBlogByCategoryAndUrl(category:string, url: string) : Promise<Blog>
{
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogbyurlandcategory?url=" + url + "&cat=" + category;
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listBlogs.data[0];

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
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogbyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    fetchAPIUrl += "&tm=" + Date.now();
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listBlogs.data[0];
    if(pageData == undefined)
    {
        const blankPage: Blog = {
            title: "Please try again later",
            url: "/",
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
