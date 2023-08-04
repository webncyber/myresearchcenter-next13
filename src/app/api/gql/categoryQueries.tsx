export function gqlGetCategoryListing(){
    const gql =  `
    {
        listCategories{
            data{
              title
              image
              value
              blurb
            }
          }
    }`
  return gql;
  }
  