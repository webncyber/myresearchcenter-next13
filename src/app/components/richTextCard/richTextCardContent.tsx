import React from "react";
import "./style.scss";
import { RichTextCard } from "../../../../types";

export function RichTextCardContent(card: RichTextCard) {
  let showBoarder = card?.cardSettings?.showBoarder;
  let boarder = {
    border: card?.cardSettings?.boarderSettings,
    borderRadius: card?.cardSettings?.borderRadius + "px",
  };
  let showBGColor = card?.cardSettings?.backgroundColor?.code;
  let bgColor = { backgroundColor: showBGColor };
  let cardStyle = {};
  let richTextContent = card.richTextContent != "<p><br></p>" ? card.richTextContent : undefined;
  
  if (showBGColor && showBoarder) {
    cardStyle = { ...boarder, ...bgColor };
  } else {
    if (showBoarder) {
      cardStyle = { ...boarder };
    }

    if (showBGColor) {
      cardStyle = { ...bgColor };
    }
  }
  
  if (card.flipOrder) {
    return (
      <>
        <div style={cardStyle} className="richTextCard">
        {card.sourceCode && 
             <div
             dangerouslySetInnerHTML={{
               __html: card.sourceCode,
             }}
           />
         }

          {richTextContent &&  
          <div dangerouslySetInnerHTML={{ __html: richTextContent }} />
          }
        </div>
        {card.cardSettings?.cardDivider && <hr />}
      </>
    );
  } else {
    return (
      <>
        <div style={cardStyle} className="richTextCard">
        {richTextContent &&  
          <div dangerouslySetInnerHTML={{ __html: richTextContent }} />
          }

         {card.sourceCode && 
             <div
             dangerouslySetInnerHTML={{
               __html: card.sourceCode,
             }}
           />
         }
        </div>
        {card.cardSettings?.cardDivider && <hr />}
      </>
    );
  }
}

export default RichTextCardContent;
