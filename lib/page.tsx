import path from 'path';
import { promises as fs } from 'fs';
import { json } from 'stream/consumers';
import { Hero, Page } from '../types';
import *  as Constants from './constants'

export async function getPageByUrl(url: string)  : Promise<Page>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getpagebyurl?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listPages.data[0];

    
    if(pageData == undefined)
    {
        const blankPage: Page = {}
    
       return blankPage;

    }else{
        const page: Page = {
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
            metaData: {
                browserTitle: pageData.metaData.browserTitle,
                keywords: pageData.metaData.keywords,
                description: pageData.metaData.description
            },
        }
        return page; 
    }

}