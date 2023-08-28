import { Hero, Page } from '../types';
import *  as Constants from './constants'

const blogsPathName = "/blogs";
const homePathname = "/home"
export async function getHeroDataByUrl(url:string, categoryId:string | undefined) : Promise<Hero>
{
    let blogDetailtype = true;
    let apiMethod = "getblogbyurl"
    console.log("CAT2: " + url)
        if(url == homePathname)
        {
            blogDetailtype = false;
            apiMethod = "getpagebyurl";
        }else if(url == blogsPathName)
        {
            blogDetailtype = false;
            apiMethod = "getpagebyurl";
        }else if(url == (blogsPathName + "/" + categoryId))
        {
            blogDetailtype = false;
            apiMethod = "getcategorybyurl";
            url = blogsPathName + "/" + categoryId;
        }
        else{
            blogDetailtype = true;
            apiMethod = "getblogbyurl"
        }
    

  
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/"+apiMethod+"?url=" + url;
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const heroData = blogDetailtype ? jsonData.data.data.listBlogs.data[0]: 
            categoryId ?  jsonData.data.data.listCategories.data[0]:
         jsonData.data.data.listPages.data[0];

    //const temp: Page = {}
    
    //return temp;
    
    if(heroData == undefined)
    {
        const blank: Hero = {}
    
       return blank;

    }else{
        const hero: Hero = {
            title: heroData.hero?.title,
            subTitle: heroData.hero?.subTitle,
            url: heroData.hero?.heroImage,
            titleColor: heroData.hero?.titleColor
           
        }
        return hero; 
    }

}