import { type } from "os";

type Page = {
    title: string,
    url: string,
    description: string,
    keywords: string,
    robots: string,
    imageUrl: string,
   
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