

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
            contentBackgroundColor{
              title
              code
            }
            contentTopSpacing
            contentTopBackgroundColor{
              title
              code
            }
            hideFooterNavigation
            contentTop(format: "html"),
            contentList
          {
          __typename
     ... on ImageCard{
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
      ... on RichTextCard{
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
