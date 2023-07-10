import path from 'path';
import { promises as fs } from 'fs';

export async function getCurrentPage(currentUrl: string)  : Promise<Page>
{
    
    const fetchAPIUrl = process.env.Host_Name +  "/api/" + currentUrl
    console.log(fetchAPIUrl)
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: 'no-store'});
    const pageData = await apiContent.json();

    //console.log(pageData)
    //const temp: Page = {}
    
    //return temp;
    
    const page: Page = {
        id: pageData.id,
        title: pageData.title,
        imageUrl: pageData.heroimageurl,
        content: pageData.content,
        subtitle: pageData.subtitle,
        metadata: {
            browsertitle: pageData.metadata.browsertitle,
            keywords: pageData.metadata.keyword,
            description: pageData.metadata.description
        },
    }
    return page;
}