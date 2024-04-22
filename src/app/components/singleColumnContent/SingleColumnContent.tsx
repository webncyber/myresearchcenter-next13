import React from "react";
import "./style.scss";
import { buildRichTextContent } from "../../../../lib/helper";
import { ColorPalette, Page } from "../../../../types";

export function SingleColumnContent(
  page: Page,
  fieldName: string,
  bgColor: string | undefined
) {
  let styleData = { backgroundColor: bgColor };

  if (fieldName == "cb" && page.contentBottom) {
    return (
      <div style={styleData} className="single-column-content">
        <div className="content">
        {page.contentBottom && 
            (
              buildRichTextContent(page.contentBottom)
            )
          }
        </div>
      </div>
    );
  } else {
    return (
      <div style={styleData} className="single-column-content">
        <div className="content">
          {page.contentTop && 
            (
              buildRichTextContent(page.contentTop)
            )
          }
        </div>
      </div>
    );
  }
}

export default SingleColumnContent;
