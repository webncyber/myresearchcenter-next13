export function gqlGetBlogHeroByURL(url: string | null) {
    const gql = `
    query 
    {
      listBlogs (where: { url: "${url}" }) 
      {
          data
          {
              hero{
                title,
                subTitle 
                heroImage
                titleColor{
                  code
                }
              }
            }
      }
    }`

    return gql;

}

export function gqlGetPageHeroByURL(url: string | null) {
    const gql = `
    query 
    {
        listPages (where: { url: "${url}" }) 
      {
          data
          {
              hero{
                title,
                subTitle 
                heroImage
                titleColor{
                  code
                }
              }
            }
      }
    }`

    return gql;

}


export function gqlGetCategoryHeroByURL(url: string | null) {
    const gql = `
    query 
    {
        listCategories (where: { url: "${url}" }) 
      {
          data
          {
              hero{
                title,
                subTitle 
                heroImage
                titleColor{
                  code
                }
              }
            }
      }
    }`

    return gql;

}