import React from "react";
import "./style.scss";
import {  RichTextCard } from "../../../../types";

export function RichTextCardContent(card: RichTextCard) 
{
    let showBoarder = card?.cardSettings?.showBoarder;
    let boarder = {border: card?.cardSettings?.boarderSettings, borderRadius: card?.cardSettings?.borderRadius +"px" };
    let showBGColor = card?.cardSettings?.backgroundColorV2?.code;
    let bgColor = {backgroundColor:  showBGColor}
    let cardStyle = {};

    if(showBGColor && showBoarder){
        cardStyle = {...boarder, ...bgColor}
    }else{
        if(showBoarder){
            cardStyle = {...boarder}
        }
    
        if(showBGColor){
            cardStyle = {...bgColor}
        }
    }

    return(
        <>
            <div style={cardStyle} className="richTextCard" 
                dangerouslySetInnerHTML={{__html: card.richTextContent}}/>
                {
                    card.cardSettings?.cardDivider && (
                        <hr/>
                       )
                }
        </>
    )
}

export default RichTextCardContent;