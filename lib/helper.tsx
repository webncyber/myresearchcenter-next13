import { gqlGetSitemap } from "./gql/sitemapQueries";
import { Page } from "../types";
import { revalidateAPITag } from "./constants";

const IS_SERVER = typeof window === "undefined";
export default function getHostName() {
  const baseURL = IS_SERVER
    ? process.env.Host_Name!
    : window.location.origin;
  return new URL(baseURL).toString();
}
export function buildRichTextContent(c: any){

  if(c == "<p><br></p>")
    {
      return "";
    }else{ 
      return(
        <div dangerouslySetInnerHTML={{__html: c}}></div>
      )
    }
}

export function HandleRadixVariants(variant?: string) {
  switch (variant) {
    case "classic":
      return "classic";
    case "ghost":
      return "ghost";
    default:
      return "surface";
  }
}


export function buildRichTextContent_Old2(c: any)
{

  switch(c.type)
  {
      case "paragraph":
      return  <p style={{textAlign: c.data.textAlign}} dangerouslySetInnerHTML={{__html: c.data.text}}/>
      break;

      case "header":
        return  <h3 style={{textAlign: c.data.textAlign}}>{c.data.text}</h3>
      break;

      case "image":
        return  <img src={c.data.file} />

      case "quote":
        return  <q style={{textAlign: c.data.textAlign}}>{c.data.text}</q>
      
      case "delimiter":
        return <hr/>
      case "list":
        let index = 0;
          switch(c.data.style)
          {
            case "ordered":
            return(
              <ol>
                  {
                    c.data.items.map(({item}: any) => {
                     index++;
                     return <li key={item}>{(c.data.items[(index -1 )]).toString().replace("&nbsp;", "")} </li>
                    })
                  }
              </ol>
            )
            case "unordered":
              return(
                <ul>
                    {
                    c.data.items.map(({item}: any) => {
                     index++;
                      return <li key={item}>{(c.data.items[(index -1 )]).toString().replace("&nbsp;", "")} </li>
                    })
                  }
                </ul>
              )
          }
      break;
      
  }


}


export function buildRichTextContentOld(page: Page)
{

    return(
      page.contentTop?.map((c: any) => {

        switch(c.type)
        {
            case "paragraph":
            return  <p style={{textAlign: c.data.textAlign}} dangerouslySetInnerHTML={{__html: c.data.text}}/>
            break;

            case "header":
              return  <h3 style={{textAlign: c.data.textAlign}}>{c.data.text}</h3>
            break;

            case "image":
              return  <img src={c.data.file} />

            case "quote":
              return  <q style={{textAlign: c.data.textAlign}}>{c.data.text}</q>
            
            case "delimiter":
              return <hr/>
            case "list":
              let index = 0;
                switch(c.data.style)
                {
                  case "ordered":
                  return(
                    <ol>
                        {
                          c.data.items.map(({item}: any) => {
                           index++;
                           return <li key={item}>{(c.data.items[(index -1 )]).toString().replace("&nbsp;", "")} </li>
                          })
                        }
                    </ol>
                  )
                  case "unordered":
                    return(
                      <ul>
                          {
                          c.data.items.map(({item}: any) => {
                           index++;
                            return <li key={item}>{(c.data.items[(index -1 )]).toString().replace("&nbsp;", "")} </li>
                          })
                        }
                      </ul>
                    )
                }
            break;
            
        }

    })
    )
}

export async function GenerateSitemap()
{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
    next: { tags: [revalidateAPITag] },
    //cache: "no-store",  
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant": "root",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      body: JSON.stringify({
        query: gqlGetSitemap(),
      })
  })

  const data = await response.json();
  const pages = await data.data.listPages;
  const blogs = await data.data.listBlogs;
  const categories = await data.data.listCategories;

  const sitemap = {
    data: [...pages.data, ...blogs.data, ...categories.data]
  }

  return sitemap.data;
}