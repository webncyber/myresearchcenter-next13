import path from 'path';
import { promises as fs } from 'fs';
import { json } from 'stream/consumers';



const gql = (url: string) => `
  query {
    listPages (where: { url: "${url}" }) {
        data{
            url,
            title,
            subTitle,
            blurb,
            content,
            heroImage,
            metaData
            {
              browserTitle,
              keywords,
              description
            }
          }
    }
  }
`;


export async function getCurrentPage(currentUrl: string)  : Promise<Page>
{
    
    const fetchAPIUrl = process.env.Host_Name +  "/api/getcontent?url=" + currentUrl;
    console.log("URL: >> "+ fetchAPIUrl)
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = jsonData.data.data.listPages.data[0];
    console.log("pageData: " + pageData.content[0].data.text)
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