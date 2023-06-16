import path from 'path';
import { promises as fs } from 'fs';

export async function getCurrentPage(currentUrl: string)  : Promise<Page | undefined>
{

    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json
    
    switch(currentUrl)
    {
        case "/":
            //use for demo
            // const url = "https://api.coincap.io/v2/assets";
            // const pageContent =  await fetch(url, { cache: 'no-store' })
            // const pageJson = await pageContent?.json();

            // console.log("pageJson: " + pageJson.data[0].id)
            
            const fileContent = await fs.readFile(jsonDirectory + '/home.json', 'utf8');
            const pageData = JSON.parse(fileContent);
            const page: Page = {
                id: pageData.id,
                title: pageData.title,
                imageUrl: pageData.heroimageurl,
                content: pageData.content,
                subtitle: pageData.subtitle,
                metadata: {
                    browsertitle: pageData.metadata.browsertitle,
                    keywords: pageData.metadata.keywords,
                    description: pageData.metadata.description
                },
            }

            return page;
        break;
    }
   // console.log("headers: " + headers);
        ///console.log(" global page: " );

        return undefined;
}