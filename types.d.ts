import { type } from "os"

type Page = {
    title?: string,
    subTitle?: string,
    blurb?: string,
    url: string,
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
    contentList?: Array [
        {
           card?: Card,
           richTextCard?: RichTextCard
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
    heroImage?: string,
    titleColor?:{
        code?: string
      }
}

type Category = Page & {
   
    thumbnailImage?: string
}

type DefaultCard = {
    __typename:? string
}
type RichTextCard = DefaultCard &{
    title?: string,
    richTextContent?: ReactElement<any, string | JSXElementConstructor<any>>
    cardSettings?:{
        showBoarder?: boolean,
        boarderSettings?: string,
        borderRadius?:number,
        backgroundColor?:string,
        cardDivider?: boolean
      }
}

type Card = DefaultCard & {
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
        borderRadius?:number,
        backgroundColor?:string,
        cardDivider?: boolean
      }
}

type SiteSettings = {
    topNavigation?: Navigation[],
    footerNavigation?:Navigation[],
    socialLinks?:Navigation[]
}

type Navigation = {
    title?:string,
    svgData?: SVGData,
    linkUrl: string,
    linkTarget?: string,
    linkTitle?: string,
    linkAltText?: string
}

type SVGData = {
    icon?:string
}