import path from 'path';
import { promises as fs } from 'fs';
import { json } from 'stream/consumers';
import { Page } from '../types';


export async function getCurrentPage(currentUrl: string)  : Promise<Page>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getpagebyurl?url=" + currentUrl;
    console.log("URL: >> "+ fetchAPIUrl)
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listPages.data[0];

    //const temp: Page = {}
    
    //return temp;
    
    const page: Page = {
        title: pageData.title,
        heroImage: pageData.heroImage,
        content: pageData.content,
        subTitle: pageData.subTitle,
        metaData: {
            browserTitle: pageData.metaData.browserTitle,
            keywords: pageData.metaData.keywords,
            description: pageData.metaData.description
        },
    }
    return page; 
}