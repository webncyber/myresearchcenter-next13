
export function gqlGetBlogsListing(limit: string | null){

  if(limit == "0"){
    return(
      `
    {
        listBlogs{
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
  }else{
    return(
      `
    {
        listBlogs(limit:${limit}){
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
