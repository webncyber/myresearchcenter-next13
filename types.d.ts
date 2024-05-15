import { type } from "os"

type Page = {
    title?: string,
    subTitle?: string,
    blurb?: string,
    url: string,
    hero?: Hero,
    contentTopSpacing?: string, 
    contentBackgroundColor?:ContentBackgroundColor,
    contentTopBackgroundColor?: ContentTopBackgroundColor,
    contentTop?: ReactElement<any, string | JSXElementConstructor<any>>,
    contentList?: Array [
        {
           imageCard?: ImageCard,
           richTextCard?: RichTextCard
        }
    ],
    contentBottomBackgroundColor?: ContentBottomBackgroundColor,
    contentBottom?: ReactElement<any, string | JSXElementConstructor<any>>,
    metaData?: metaData,
    hideFooterNavigation?: string
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
    richTextContent?: ReactElement<any, string | JSXElementConstructor<any>>,
    sourceCode?: string,
    flipOrder?: boolean,
    cardSettings?:{
        showBoarder?: boolean,
        boarderSettings?: string,
        borderRadius?:number,
        backgroundColor?:ColorPalette,
        cardDivider?: boolean
      }
}

type ImageCard = DefaultCard & {
    title?: string,
      subTitle?: string,
      content?: ReactElement<any, string | JSXElementConstructor<any>>,
      subContent?:  ReactElement<any, string | JSXElementConstructor<any>>,
      cardUrl?: string,
      image?: string,
      cardSettings?:{
        leftColumnWidth: number,
        showBoarder?: boolean,
        boarderSettings?: string,
        borderRadius?:number,
        backgroundColor?:ColorPalette,
        cardDivider?: boolean
      }
}

type SiteSettings = {
    topNavigation?: Navigation[],
    footerNavigation?:Navigation[],
    socialLinks?:Navigation[],
    siteBackgroundColor?:ColorPalette
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

type ContentTopBackgroundColor = ColorPalette;
type ContentBottomBackgroundColor = ColorPalette;
type ContentBackgroundColor = ColorPalette;

type ColorPalette = {
    title?: string,
    code?: string
}
