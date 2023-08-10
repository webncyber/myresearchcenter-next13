


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
            contentListing
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
          }
    }
  }`

return gql;

}
