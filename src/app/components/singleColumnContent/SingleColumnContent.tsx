import React from 'react';
import  './style.scss'

export async function SingleColumnContent (page: Page) {

   let content = page != undefined && page.content != undefined ? page?.content[0].data?.text : "";

    return(
       <div className="single-column-content">
            <h2>{page?.subTitle}</h2>
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
   };

   export default SingleColumnContent;