
export function gqlGetBlogsListing(){
    const gql =  `
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
  
  return gql;
  
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
            }
          }
            contentBottom,
            hero{
              title,
              subTitle 
              heroImage
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
