import path from 'path';
import { promises as fs } from 'fs';

export async function getCurrentPage(currentUrl: string)  : Promise<Page | undefined>
{

    const jsonDirectory = path.join(process.cwd(), ('data' + currentUrl));
    
    const fileContent = await fs.readFile(jsonDirectory, 'utf8');
    console.log("jsonDirectory: " + jsonDirectory)
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
}