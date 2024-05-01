


export function gqlGetSitemap(){
    const gql =  `
    query{
      listPages (where: { excludeFromSitemap_not: true }) {
        data{
          url
          lastmod: savedOn
        }
      }
       listBlogs (where: { excludeFromSitemap_not: true }) 
       {
        data
        {
          url
          lastmod: savedOn
        }
      }
      listCategories (where: { excludeFromSitemap_not: true }) 
       {
        data
        {
          url
          lastmod: savedOn
        }
      }
    }`
  
  return gql;
  
  }
  