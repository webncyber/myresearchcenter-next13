


export function gqlGetPageByURL(url:string | null){
  const gql =  `
  query {
    listPages (where: { url: "${url}" }) {
        data{
            url,
            title,
            subTitle,
            blurb,
            content,
            hero{
              title,
              subTitle 
              heroImage
            }
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