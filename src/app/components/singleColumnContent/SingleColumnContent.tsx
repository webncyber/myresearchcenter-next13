import React from 'react';
import  './style.scss'
import {buildRichTextContent} from '../../../../lib/helper'
import { Page } from '../../../../types';

export  function SingleColumnContent (page: Page) {

   let content =  buildRichTextContent(page);
   
    return(
      
            <div className='content'>
                {content}
            </div>
     
    );
   };

   
   export default SingleColumnContent;