export function gqlCategoryByURL(urlValue:any){
  const gql =  `
  {
    listCategories(where:{url:"${urlValue}"}){
     data{
       id
       entryId
     }
   }
   }
   
  `

return gql;

}


export function gqlGetCategoryListing(limit: string | null){

  if(limit ==  "0"){
    return(
      `
    {
        listCategories(sort:title_ASC){
            data{
              url
              title
              thumbnailImage
              blurb
            }
          }
    }`
    )
  }else{
    return(
      `
    {
        listCategories(limit:${limit}, sort:title_ASC){
            data{
              url
              title
              thumbnailImage
              blurb
            }
          }
    }`
    )
  }
  }
  
export function gqlGetCategoryHeroByURL(url:string | null){
  const gql =  `
  query {
    listCategories (where: { url: "${url}" }) {
        data{
            url,
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
export function gqlGetCategoryByURL(url:string | null){
  const gql =  `
  query {
    listCategories (where: { url: "${url}" }) {
        data{
            url,
            title,
            subTitle,
            blurb,
            content,
            contentListing
          {
            title
            subTitle
            content
            subContent
            cardUrl
            image
            cardSettings
            {
              leftColumnWidth
              showBoarder
              boarderSettings
              cardDivider
            }
          }
            contentBottom,
            hero{
              title,
              subTitle 
              heroImage
              titleColor{
                code
              }
            }
            metaData
            {
              browserTitle,
              keywords,
              description
            }
            thumbnailImage
          }
    }
  }`

return gql;

}
