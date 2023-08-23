import { Hero, Page } from '../types';
import *  as Constants from './constants'


export async function getHeroDataByUrl(url:string) : Promise<Hero>
{
    let blogDetailtype = true;
    let apiMethod = "getblogbyurl"

    if(url == "/home")
    {
        blogDetailtype = false;
        apiMethod = "getpagebyurl";
    }else if(url == "/blogs")
    {
        blogDetailtype = false;
        apiMethod = "getpagebyurl";
    }else{
        blogDetailtype = true;
        apiMethod = "getblogbyurl"
    }

  
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/"+apiMethod+"?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const pageData = blogDetailtype ? jsonData.data.data.listBlogs.data[0]: jsonData.data.data.listPages.data[0];

    //const temp: Page = {}
    
    //return temp;
    
    if(pageData == undefined)
    {
        const blank: Hero = {}
    
       return blank;

    }else{
        const hero: Hero = {
            title: pageData.hero?.title,
            subTitle: pageData.hero?.subTitle,
            url: pageData.hero?.heroImage,
            titleColor: pageData.hero?.titleColor
           
        }
        return hero; 
    }

}