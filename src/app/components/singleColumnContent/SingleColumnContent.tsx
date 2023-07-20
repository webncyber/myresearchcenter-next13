import React from 'react';
import  './style.scss'
import {buildRichTextContent} from '../../../../lib/helper'

export async function SingleColumnContent (page: Page) {

   let content = buildRichTextContent(page);

console.log("content: " + content);
    return(
       <div className="single-column-content">
            <h2>{page?.subTitle}</h2>
            <div className='content'>
                {content}
            </div>
        </div>
    );
   };

   export default SingleColumnContent;