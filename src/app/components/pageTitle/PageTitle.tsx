import React from "react";
import "./style.scss";
import {  Page } from "../../../../types";


export default function PageTitle(title: string, author?: string, pubDate?: Date) 
{
  let date = pubDate ? new Date(pubDate) : new Date();
   return(
    <div className="page-title">
        <h2>{title}</h2>

        {author && (
            <div className="author">
              {" "}
              {author} | {date.toLocaleDateString("en-US")}
            </div>
          )}
    </div>
   )
}
