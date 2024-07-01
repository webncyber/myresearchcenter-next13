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
    showEmailSignUp?:boolean,
    titleColor?:{
        code?: string
      }
}

type Category = Page & {
   
    thumbnailImage?: string
}

type DefaultCard = {
    __typename:? string,
    title?: string,
}
type RichTextCard = DefaultCard &{
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

type ContactCard = DefaultCard &{
    errorMessage?: string,
    successMessage?: string
}

type EmailSignUpCard = DefaultCard &{
    title?: string,
    errorMessage?: string,
    successMessage?: string
}

type GridCard = DefaultCard & {
    row?: GridRow[],
    content?: ReactElement<any, string | JSXElementConstructor<any>>,
    cardSettings?:{
        showAsCard?: boolean,
        cardVariant?:string,
        backgroundColor?:ColorPalette,
        cardDivider?: boolean
      }
}

type GridRow = {
    rowTitle?: string,
    content?: ReactElement<any, string | JSXElementConstructor<any>>,
    disabled?: boolean,
    rowSpacing?: string,
    cardSpacing?: string,
    columnDivision?: string,
    card: card[]
}

type Card = {
    disabled?: boolean,
    showAsCard?: boolean,
    insetImage?: string,
    cardVariant?: string,
    backgroundColor?:ColorPalette,
    content?: ReactElement<any, string | JSXElementConstructor<any>>,
}

type ImageCard = DefaultCard & {
      subTitle?: string,
      content?: ReactElement<any, string | JSXElementConstructor<any>>,
      subContent?:  ReactElement<any, string | JSXElementConstructor<any>>,
      cardUrl?: string,
      image?: string,
      swapImageContent?: boolean,
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

type FormSubmitData = {
    pageURL?: string,
    fromPage?: string,
    fullname?: string, 
    email: string, 
    subject?: string, 
    message?: string, 
    emailService: string
}