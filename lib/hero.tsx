import { Hero, Page } from '../types';

const blogsPathName = "/blogs";
const homePathname = "/home"
export async function getHeroDataByUrl(url:string, categoryId:string | undefined, dynamicDir1: string | undefined) : Promise<Hero>
{
    let blogDetailtype = true;
    let apiMethod = "getblogbyurl"
    console.log("dynamicDir1: " + dynamicDir1)
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
        }else if(dynamicDir1)
        {
            blogDetailtype = false;
            apiMethod = "getpagebyurl";
        }
        else{
            blogDetailtype = true;
            apiMethod = "getblogbyurl"
        }
    

  
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/"+apiMethod+"?url=" + url;
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl);
    const jsonData = await apiContent.json();
    const heroData = blogDetailtype ? jsonData.data.data.listBlogs.data[0]: 
            categoryId ?  jsonData.data.data.listCategories.data[0]:
         jsonData.data.data.listPages.data[0];

    //const temp: Page = {}
    
    //return temp;
    
    if(heroData == undefined)
    {
        const blank: Hero = {
            title: "Page Not Found",
            url: "/Images/404.jpg",
        }
    
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