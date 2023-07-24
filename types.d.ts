import { type } from "os"

type Page = {
    title?: string,
    subTitle?: string,
    blurb?: string,
    url?: string,
    heroImage?: string,
    content?: Array [
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
    publishedDate: string
}


type metaData = {
    browserTitle?: string,
    keywords?: string,
    description?: string,

}

type Hero = {
    url?: string,
    headingOne?: string;
    headingTwo?: string;
}

