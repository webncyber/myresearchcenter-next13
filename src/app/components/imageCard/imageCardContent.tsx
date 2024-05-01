import React from "react";
import "./style.scss";
import { buildRichTextContent } from "../../../../lib/helper";
import { ImageCard, Page } from "../../../../types";
import Link from "next/link";
export function ImageCardContent(card: ImageCard) {
  let leftColWidthData = card?.cardSettings?.leftColumnWidth;
  let leftColWidth = leftColWidthData != undefined ? leftColWidthData : 20;
  let showBoarder = card?.cardSettings?.showBoarder;
  let boarder = {
    border: card?.cardSettings?.boarderSettings,
    borderRadius: card?.cardSettings?.borderRadius + "px",
  };
  let showBGColor = card?.cardSettings?.backgroundColor?.code;
  let bgColor = { backgroundColor: showBGColor };
  let cardStyle = {};

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

  let rightColWidth = 100 - leftColWidth;
  return (
    <>
      <div style={cardStyle} className="image-card">
        {((card && card.title) || (card.content && card.content != "<p><br></p>")) && (
          <div className="single-column-content">
            <div className="intor-content">
              {card.title && <h3>{card?.title}</h3>}
              {card.content && buildRichTextContent(card.content)}
            </div>
          </div>
        )}

        <div className="twoColumnContent">
          <div className="content">
            <div style={{ width: leftColWidth + "%" }}>
              {card.cardUrl ? (
                <Link href={card.cardUrl} target="_blank">
                  <img src={card?.image}></img>
                </Link>
              ) : (
                <img src={card?.image}></img>
              )}
            </div>
            <div style={{ width: rightColWidth + "%" }}>
              <h4>{card?.subTitle}</h4>
              {card.subContent && buildRichTextContent(card.subContent)}
            </div>
          </div>
        </div>
        {card.cardSettings?.cardDivider && <hr />}
      </div>
    </>
  );
}

export default ImageCardContent;
