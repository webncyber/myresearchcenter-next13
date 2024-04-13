import React from "react";
import "./style.scss";
import { buildRichTextContent } from "../../../../lib/helper";
import { ColorPalette, Page } from "../../../../types";

export function SingleColumnContent(page: Page, fieldName: string, bgColor: string | undefined) {

  let styleData = {backgroundColor: bgColor}

  if (fieldName == "cb") {
    return (
      <div style={styleData} className="single-column-content">
        <div className="content">
          {page.contentBottom?.map((c: any) => {
            return <>{buildRichTextContent(c)}</>;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={styleData} className="single-column-content">
        <div className="content">
          {page.content?.map((c: any) => {
            return <>{buildRichTextContent(c)}</>;
          })}
        </div>
      </div>
    );
  }
}

export default SingleColumnContent;
