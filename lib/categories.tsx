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
        const blankPage: Category = {
            url:"/",
            title: "Please try again later",
            metaData: {
                browserTitle: "My Research Center",
            },
        }
    
       return blankPage;

    }else{
        const page: Category = {
            url: pageData.url,
            title: pageData.title,
            hero: pageData.hero ? {
                title: pageData.hero.title,
                subTitle: pageData.hero.subTitle,
                heroImage: pageData.hero.heroImage,
                titleColor: pageData.hero.titleColor
            } : undefined,
            contentTopSpacing: pageData?.contentTopSpacing,
            contentBackgroundColor: pageData?.contentBackgroundColor,
            contentTopBackgroundColor: pageData?.contentTopBackgroundColor,
            contentBottomBackgroundColor: pageData?.contentBottomBackgroundColor,
            contentTop: pageData.contentTop != "<p><br></p>" ? pageData.contentTop : undefined,
            contentBottom: pageData.contentBottom != "<p><br></p>" ? pageData.contentBottom : undefined,
            contentList: pageData.contentList,
            subTitle: pageData.subTitle,
            metaData: {
                browserTitle: pageData.metaData.browserTitle,
                keywords: pageData.metaData.keywords,
                description: pageData.metaData.description
            },
            hideFooterNavigation: pageData?.hideFooterNavigation,
            thumbnailImage: pageData.thumbnailImage
        }
        return page; 
    }

}