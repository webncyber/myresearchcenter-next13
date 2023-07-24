
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
              heroImage
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
            heroImage,
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
