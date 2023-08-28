import { Category } from "../types";

export async function  getCategories(limit: string | null)
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getcategories?limit=" + limit;
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const categories = jsonData.data.data.listCategories.data;

  return categories;
}

export async function getCategoryPageByUrl(url: string)  : Promise<Category>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getcategorybyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listCategories.data[0];

    if(pageData == undefined)
    {
        const blankPage: Category = {}
    
       return blankPage;

    }else{
        const page: Category = {
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
            metaData: {
                browserTitle: pageData.metaData.browserTitle,
                keywords: pageData.metaData.keywords,
                description: pageData.metaData.description
            },
            thumbnailImage: pageData.thumbnailImage
        }
        return page; 
    }

}