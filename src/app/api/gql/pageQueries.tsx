

export function gqlRichTextCard(entryId:string | null)
{
  const gql =  `
  {
    getRichTextCard(where:{entryId:"${entryId}"}){
      data{
        title
        content
      }
    }
  }
      `
  
  return gql;
}

export function gqlGetPageByURL(url:string | null){
  const gql =  `
  query {
    listPages (where: { url: "${url}"}) {
        data{
            url,
            title,
            subTitle,
            blurb,
          hero{
              title,
              subTitle 
              heroImage
              titleColor{
                code
              }
            }
            content,
            contentList
          {
          __typename
     ... on Card{
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
              borderRadius
              backgroundColor
              cardDivider
            }
    }
      ... on RichTextCard{
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
