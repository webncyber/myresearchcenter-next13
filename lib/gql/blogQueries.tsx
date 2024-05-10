
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
            contentBackgroundColor{
              title
              code
            }
            contentTop(format: "html"),
            contentTopBackgroundColor{
              title
              code
            }
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
                      cardDivider
                      backgroundColor{
                        title
                        code
                      }
                    }
              }
              ... on RichTextCard
              {
                title
                richTextContent(format: "html")
                sourceCode
                useSourceCode
                cardSettings{
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
            contentTop(format: "html"),
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
                      cardDivider
                      backgroundColor{
                        title
                        code
                      }
                    }
              }
              ... on RichTextCard
              {
                title
                richTextContent(format: "html")
                sourceCode
                useSourceCode
                cardSettings{
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
              ... on ColumnsCard{
                entryId
              }
              
            
            }
            contentBottom(format: "html"),
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
