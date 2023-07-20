
type Page = {
    title?: string,
    subTitle?: string,
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

