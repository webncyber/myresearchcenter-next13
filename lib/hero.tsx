import { gqlGetBlogHeroByURL, gqlGetCategoryHeroByURL, gqlGetPageHeroByURL } from './gql/heroQueries';
import { Hero, Page } from '../types';
import { revalidateAPITag } from './constants';

const blogsPathName = "/blogs";
const homePathname = "/home"

//Not in use currently 
export async function getHeroDataByUrl(url: string, categoryId: string | undefined, dynamicDir1: string | undefined): Promise<Hero> {
    let blogDetailtype = true;
    let gqlQuery = "";

    if (url == homePathname) {
        blogDetailtype = false;
        gqlQuery = gqlGetPageHeroByURL(url);
    } else if (url == blogsPathName) {
        blogDetailtype = false;
        gqlQuery = gqlGetPageHeroByURL(url);
    } else if (url == (blogsPathName + "/" + categoryId)) {
        blogDetailtype = false;
        url = blogsPathName + "/" + categoryId;
        gqlQuery = gqlGetCategoryHeroByURL(url)
    } else if (dynamicDir1) {
        blogDetailtype = false;
        gqlQuery = gqlGetPageHeroByURL(url);
    }
    else {
        blogDetailtype = true;
        gqlQuery = gqlGetBlogHeroByURL(url);
    }


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        //cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-tenant": "root",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
            query: gqlQuery,
        })
    })

    const jsonData = await response.json();


    const heroData = blogDetailtype ? jsonData.data.listBlogs.data[0] :
        categoryId ? jsonData.data.listCategories.data[0] :
            jsonData.data.listPages.data[0];


    if (heroData == undefined) {
        const blank: Hero = {
            title: "Page Not Found",
            url: "/Images/404.jpg",
        }

        return blank;

    } else {
        const hero: Hero = {
            title: heroData.hero?.title,
            subTitle: heroData.hero?.subTitle,
            url: heroData.hero?.heroImage,
            titleColor: heroData.hero?.titleColor

        }
        return hero;
    }

}