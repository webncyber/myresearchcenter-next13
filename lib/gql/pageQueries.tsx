

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
              showEmailSignUp
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
            swapImageContent
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
        flipOrder
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
          
      ... on GridCard{
        entryId
        title
        content(format: "html")       
        row{
          rowSpacing
          columnDivision
          disabled
          rowTitle
          content(format: "html")
          card{
            showAsCard
            disabled
            insetImage
            cardVariant
            backgroundColor{
              code
            }
            content(format: "html")
          }
        }
        cardSettings{
          showAsCard
          cardVariant
          cardDivider
          backgroundColor{
            code
          }
        }
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
