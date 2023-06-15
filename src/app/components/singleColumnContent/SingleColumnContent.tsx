import React from 'react';
import  './style.scss'
import  {getCurrentPage} from '../../../../lib/page'

export async function SingleColumnContent (id: string) {

    const pageData = getCurrentPage(id)
    const page = await pageData

    return(
       <div className="single-column-content">
            <h2>{page?.presentation?.heading}</h2>
            <div className='content' dangerouslySetInnerHTML={{ __html: page?.presentation?.content }} />
        </div>
    );
   };

   export default SingleColumnContent;