import React from 'react';
import { BasicContent } from '../../../../types';
import  './style.scss'

const SingleColumnContent = (props: BasicContent) => {
    let isJsx = React.isValidElement(props.content);

    return(
        <div className="single-column-content">
            <h2>
                {props.heading}</h2>
            
            {isJsx && (
                 <div className='content' >{props.content}</div>
            )
            }
            {!isJsx && (
                 <div className='content' dangerouslySetInnerHTML={{ __html: props.content }} />
            )
            }   
        </div>
    );
   };

   export default SingleColumnContent;