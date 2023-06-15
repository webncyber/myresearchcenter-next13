
type Page = {
    id: string,
    title?: string,
    url?: string,
    imageUrl?: string,
    presentation?: BasicContent,
    metadata?: metadata,
}

type metadata = {
    description?: string,
    keywords?: string,
    browsertitle?: string,
}
type BasicContent = {
    content:  ReactElement<any, string | JSXElementConstructor<any>>,
    heading: string,
}
type Hero = {
    url: string,
    headingOne: string;
    headingTwo: string;
}

