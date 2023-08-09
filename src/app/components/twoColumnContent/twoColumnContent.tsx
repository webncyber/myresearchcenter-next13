import React from "react";
import "./style.scss";
import { buildRichTextContent } from "../../../../lib/helper";
import { Card, Page } from "../../../../types";
export function TwoColumnContent(page: Page) 
{
   
    return (
          <>
          {
                    page.contentListing?.map((item: Card) => 
                    {
                        let leftColWidthData = item?.cardSettings?.leftColumnWidth;
                        let leftColWidth = leftColWidthData != undefined ? leftColWidthData : 20;
                        let showBoarder = item?.cardSettings?.showBoarder;
                        let boarder = {border: item?.cardSettings?.boarderSettings, borderRadius: "6px"};;
                        let rightColWidth = 100 - leftColWidth;
                        return(
                          <>
                            <div key={item.title} className="single-column-content">
                            <div className="content">
                                
                            <h3>{item?.title}</h3>
                            <div>
                            {item.content?.map((c: any) => {
                                return <>{buildRichTextContent(c)}</>;
                            })}
                           </div>
                            </div>
                          </div>
                          
                           <div className="twoColumnContent">
                           <div className="content" style={ showBoarder ? boarder : {}}>
                               <div style={{width: leftColWidth + '%'}}>
                                   <img src={item?.image}></img>
                               </div>
                               <div style={{width: rightColWidth + '%'}}>
                                   <h4>{item?.subTitle}</h4>
                                   <div>
                                    {item.subContent?.map((c: any) => {
                                        return <>{buildRichTextContent(c)}</>;
                                    })}
                                   </div>
                               </div>
                           </div>
                           </div>
                          </>
                        )
                    })
          }
         

         
          </>
      );
    
}

export default TwoColumnContent;
