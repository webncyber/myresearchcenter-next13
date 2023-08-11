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
   
    const posts = allPosts.map((post) => ({
      url: post.url,
      lastModified: post.publishedAt,
    }));
   
    const routes = ['', '/about', '/blog'].map((route) => ({
      url: `https://acme.com${route}`,
      lastModified: new Date().toISOString(),
    }));
   
    return [...routes, ...posts];
  }