
type Page = {
    id?: string,
    title?: string,
    subtitle?: string,
    url?: string,
    imageUrl?: string,
    content?:  ReactElement<any, string | JSXElementConstructor<any>>,
    metadata?: metadata,
}

type metadata = {
    description?: string,
    keywords?: string,
    browsertitle?: string,
}

type Hero = {
    url: string,
    headingOne: string;
    headingTwo: string;
}

