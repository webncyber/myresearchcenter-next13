import React from "react";
import "./style.scss";
import { buildRichTextContent } from "../../../../lib/helper";
import { Page } from "../../../../types";

export function TwoColumnContent(page: Page) 
{
    let leftColWidth = 20;
    let showBoarder = false;
    let boarder = {border: "1px solid #000", borderRadius: "6px"};;
    let rightColWidth = 100 - leftColWidth;
    return (
          <>
          
           <div className="single-column-content">
            <div className="content">
            <h3>heading 1</h3>
            <div>
           
                intro content</div>
            </div>
          </div>

          <div className="twoColumnContent">
            <div className="content" style={ showBoarder ? boarder : {}}>
                <div style={{width: leftColWidth + '%'}}>
                    <img src="https://d2k9awsb4ispp4.cloudfront.net/files/64cc610a8d111500088f5ebb/Untitleddesign(3).png"></img>
                </div>
                <div style={{width: rightColWidth + '%'}}>
                    <h4>heading...</h4>
                    <div>
                    Retractable baby gates are known for their simple installation process. Most models come with hardware and mounting brackets, making them easy to install and uninstall when needed. Additionally, their lightweight and compact design make them highly portable, allowing you to move them to different locations around the house or even take them on trips.
                    </div>
                </div>
            </div>
            </div>
          </>
      );
    
}

export default TwoColumnContent;
