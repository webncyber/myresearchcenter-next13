import { type } from "os"

type Page = {
    title?: string,
    subTitle?: string,
    blurb?: string,
    url?: string,
    hero?: Hero,
    content?: Array [
        {
            type: string,
            textAlign?: string,
            data?:{
                text?: ReactElement<any, string | JSXElementConstructor<any>>
            }
        }
    ],
    contentListing?: Array [
        {
            title?: string,
              subTitle?: string,
              content?: Array [
                {
                    type: string,
                    textAlign?: string,
                    data?:{
                        text?: ReactElement<any, string | JSXElementConstructor<any>>
                    }
                }
            ],
              subContent?:  Array [
                {
                    type: string,
                    textAlign?: string,
                    data?:{
                        text?: ReactElement<any, string | JSXElementConstructor<any>>
                    }
                }
            ],
              cardUrl?: string,
              image?: string,
              cardSettings?:{
                leftColumnWidth?: number,
                showBoarder?: boolean,
                boarderSettings?: string,
                cardDivider?: boolean
              }
        }
    ],
    contentBottom?: Array [
        {
            type: string,
            textAlign?: string,
            data?:{
                text?: ReactElement<any, string | JSXElementConstructor<any>>
            }
        }
    ],
    metaData?: metaData,
}

type Blog = Page & {
    author?: string,
    publishedDate?: string
}


type metaData = {
    browserTitle?: string,
    keywords?: string,
    description?: string,

}

type Hero = {
    url?: string,
    title?: string,
    subTitle?: string,
    heroImage?: string
}

type Category = {
    title?: string,
    image?: string,
    value?: string,
    blurb?: string
}

type Card = {
    title?: string,
      subTitle?: string,
      content?: Array [
        {
            type: string,
            textAlign?: string,
            data?:{
                text?: ReactElement<any, string | JSXElementConstructor<any>>
            }
        }
    ],
      subContent?:  Array [
        {
            type: string,
            textAlign?: string,
            data?:{
                text?: ReactElement<any, string | JSXElementConstructor<any>>
            }
        }
    ],
      cardUrl?: string,
      image?: string,
      cardSettings?:{
        leftColumnWidth: number,
        showBoarder?: boolean,
        boarderSettings?: string,
        cardDivider?: boolean
      }
}