
export function gqlGetBlogsByCategoryId(entryId: any)
{
      return(
      `
    {
      listBlogs(where:{category:{entryId:"${entryId}"}}, sort:title_ASC){
        data{
          url
          title
          subTitle
          blurb
          hero{
            title,
            subTitle 
            heroImage
          }
          publishedDate
          author
        }
      }
    }`
      )
}


export function gqlGetBlogsListing(limit: string | null){

  if(limit == "0"){
    return(
      `
    {
        listBlogs(sort:publishedDate_DESC){
            data
            {
              url
              title
              subTitle
              blurb
              hero{
                title,
                subTitle 
                heroImage
              }
              publishedDate
              author
            }
          }
    }`
    )
  }else{
    return(
      `
    {
        listBlogs(limit:${limit}, sort:publishedDate_DESC){
            data
            {
              url
              title
              subTitle
              blurb
              hero{
                title,
                subTitle 
                heroImage
              }
              publishedDate
              author
              category{
                 title
              }
            }
          }
    }`
    )
  }
   
  
  }
  

export function gqlGetBlogByURL(url:string | null){
  const gql =  `
  query {
    listBlogs (where: { url: "${url}" }) {
        data{
            url,
            title,
            subTitle,
            blurb,
            contentTopSpacing,
            hideFooterNavigation,
            content,
           
            contentList
            {
              __typename
             ... on Card
              {
                         title
                    subTitle
                    content
                    subContent
                    cardUrl
                    image
                    cardSettings{
                      leftColumnWidth
                      showBoarder
                      boarderSettings
                      cardDivider
                    }
              }
              ... on RichTextCard
              {
                title
                richTextContent
                cardSettings{
                  showBoarder
                  boarderSettings
                  borderRadius
                  backgroundColor
                  cardDivider
                }
                
              }
              ... on ColumnsContent{
                entryId
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
            },
            author,
            publishedDate,
            metaData
            {
              browserTitle,
              keywords,
              description
            }
          }
    }
  }`

return gql;

}

export function gqlGetBlogByURLAndCategory(cat:string | null, url:string | null){
  const gql =  `
  query {
    listBlogs (where: { category:{entryId:"${cat}"} url: "${url}" }) {
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
            },
            author,
            publishedDate,
            metaData
            {
              browserTitle,
              keywords,
              description
            }
          }
    }
  }`

return gql;

}
