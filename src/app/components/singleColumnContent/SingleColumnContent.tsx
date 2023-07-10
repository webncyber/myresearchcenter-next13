import React from 'react';
import  './style.scss'

export async function SingleColumnContent (page: Page) {

   let content = page != undefined && page.content != undefined ? page?.content : "";

    return(
       <div className="single-column-content">
            <h2>{page?.subtitle}</h2>
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
   };

   export default SingleColumnContent;