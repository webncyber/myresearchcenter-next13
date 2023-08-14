export function gqlGetCategoryListing(limit: string | null){

  if(limit ==  "0"){
    return(
      `
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
    )
  }else{
    return(
      `
    {
        listCategories(limit:${limit}){
            data{
              title
              image
              value
              blurb
            }
          }
    }`
    )
  }
  }
  