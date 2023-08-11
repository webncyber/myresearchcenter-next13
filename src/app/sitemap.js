export default async function sitemap() {
    //const res = await fetch('https://.../posts');
    const allPosts =[
        {
          url: 'https://acme.com',
          lastModified: new Date(),
        },
        {
          url: 'https://acme.com/about',
          lastModified: new Date(),
        },
        {
          url: 'https://acme.com/blog',
          lastModified: new Date(),
        },
      ]
   
   
   
    const routes = allPosts.map((route) => ({
      url: route.url,
      lastModified: route.lastModified,
    }));
   
    return [...routes];
  }