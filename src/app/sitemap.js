import { GenerateSitemap } from "../../lib/helper";
export default async function sitemap() {
    //const res = await fetch('https://.../posts');
    const allPosts = await GenerateSitemap()
   
   
    const routes = allPosts.map((route) => ({
      url: route.url,
      lastModified: route.lastModified,
    }));
   
    return [...routes];
  }