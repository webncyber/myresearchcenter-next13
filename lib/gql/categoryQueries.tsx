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
            contentTop(format: "html"),
            contentBackgroundColor{
              title
              code
            }
            contentTopSpacing,
            contentTopBackgroundColor{
              title
              code
            }
            hideFooterNavigation,
            contentList
            {
              __typename
             ... on ImageCard
              {
                    title
                    subTitle
                    content(format: "html")
                    subContent(format: "html")
                    cardUrl
                    image
                    cardSettings{
                      leftColumnWidth
                      showBoarder
                      boarderSettings
                      borderRadius
                      backgroundColor{
                        title
                        code
                      }
                      cardDivider
                    }
              }
              ... on RichTextCard
              {
                title
                richTextContent(format: "html")
                cardSettings{
                  showBoarder
                  boarderSettings
                  boarderSettings
                  borderRadius
                  backgroundColor{
                    title
                    code
                  }
                  cardDivider
                }
                
              }
              ... on ColumnsCard{
                entryId
              }
              
            
            }
            contentBottom(format: "html"),
            contentBottomBackgroundColor{
              title
              code
            }
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
