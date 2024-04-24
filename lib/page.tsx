import path from 'path';
import { promises as fs } from 'fs';
import { json } from 'stream/consumers';
import { RichTextCard, Page } from '../types';
import *  as Constants from './constants'
import { revalidateAPITag } from './constants';


export async function getPageByUrl(url: string)  : Promise<Page>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getpagebyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, { next: { tags: [revalidateAPITag] } });
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listPages.data[0];

    
    if(pageData == undefined)
    {
        const blankPage: Page = {
            url:"/",
            title: "Please try again later",
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