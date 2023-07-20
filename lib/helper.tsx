import { Brawler } from "next/font/google";
import { isNamedExports } from "typescript";

const IS_SERVER = typeof window === "undefined";
export default function getHostName() {
  const baseURL = IS_SERVER
    ? process.env.Host_Name!
    : window.location.origin;
  return new URL(baseURL).toString();
}

export function buildRichTextContent(page: Page)
{
    let htmlContent = "";

    return(
      page.content.map((c: any) => {

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
    

    return htmlContent;
}