import { GenerateSitemap } from "../../lib/helper";
export default async function sitemap() {
    //const res = await fetch('https://.../posts');
    const allPosts = await GenerateSitemap()
   
   
    const routes = allPosts.map((route) => ({
      url: process.env.NEXT_PUBLIC_Host_Name + cleanURL(route.url),
      lastModified:  route.lastmod.toString().split('T')[0],
    }));
   
    return [...routes];
  }

  function cleanURL(url)
  {
    switch(url)
    {
      case "/home":
        return ""

      default:
        return url
    }
  }