import { gqlGetPageByURL } from './gql/pageQueries';
import { Page } from '../types';
import { revalidateAPITag } from './constants';

export async function getPageByUrl(url: string)  : Promise<Page>
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
          query: gqlGetPageByURL(url),
        })
    })

    const jsonData = await response.json();
    const pageData = jsonData.data.listPages.data[0];

    if(pageData == undefined)
    {
        const blankPage: Page = {
            url:"/",
            title: "Please try again later",
            hero:{},
            metaData: {
                browserTitle: "My Research Center",
            },
        }
    
       return blankPage;

    }else{
        const page: Page = {
            url: pageData.url,
            title: pageData.title,
           hero: pageData.hero ? {
                title: pageData.hero?.title,
                subTitle: pageData.hero?.subTitle,
                heroImage: pageData.hero?.heroImage,
                titleColor: pageData.hero?.titleColor
            } : undefined, 
            contentBackgroundColor: pageData?.contentBackgroundColor,
            contentTopBackgroundColor: pageData?.contentTopBackgroundColor,
            contentBottomBackgroundColor: pageData?.contentBottomBackgroundColor,
            contentTopSpacing: pageData?.contentTopSpacing,
            contentTop: pageData.contentTop != "<p><br></p>" ? pageData.contentTop : undefined,
            contentBottom: pageData.contentBottom != "<p><br></p>" ? pageData.contentBottom : undefined,
            contentList: pageData.contentList,
            subTitle: pageData.subTitle,
            metaData: {
                browserTitle: pageData.metaData.browserTitle,
                keywords: pageData.metaData.keywords,
                description: pageData.metaData.description
            },
            hideFooterNavigation: pageData?.hideFooterNavigation
        }
        return page; 
    }

}