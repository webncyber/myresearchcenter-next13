import { Blog } from "../types";

export async function  getBlogsListing()
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogslisting";
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const blogsArray = jsonData.data.data.listBlogs.data;

  return blogsArray;
}

export async function getBlogByUrl(url: string) : Promise<Blog>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getblogbyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listBlogs.data[0];

    //const temp: Page = {}
    
    //return temp;
    

    const blogDetail: Blog = {
        title: pageData.title,
        hero: {
            title: pageData.hero.title,
            subTitle: pageData.hero.subTitle,
            heroImage: pageData.hero.heroImage
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
