import { gqlGetCategoryByURL, gqlGetCategoryListing } from "./gql/categoryQueries";
import { Category } from "../types";
import { revalidateAPITag } from "./constants";

export async function  getCategories(limit: string | null)
{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        //cache: "no-store",
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tenant": "root",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          },
          body: JSON.stringify({
            query: gqlGetCategoryListing(limit),
          })
      })
  
    const jsonData = await response.json();
    const categories = jsonData.data.listCategories.data;

  return categories;
}

export async function getCategoryPageByUrl(url: string)  : Promise<Category>
{
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-tenant": "root",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
          query: gqlGetCategoryByURL(url),
        })
    })

    const jsonData = await response.json();
    
    const pageData = jsonData.data.listCategories.data[0];

    if(pageData == undefined)
    {
        const blankPage: Category = {
            url:"/",
            title: "Please try again later",
            hero:{},
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