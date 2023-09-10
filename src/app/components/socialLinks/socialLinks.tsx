"use client"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineCopy, AiOutlineLinkedin, AiOutlineCheck } from "react-icons/ai";
import {SlSocialYoutube,  SlSocialTwitter } from "react-icons/sl";
import {useState, useEffect } from "react";

export  function SocialLinks()
{
    const [currentURL, setCurrentURL] = useState('');
    const [browserTitle, setBrowserTitle] = useState('');
    const [toggleCopyIcon, setShowHideCopyIcon] = useState(true);
    const [toggleCheckedIcon, setShowHideCheckedIcon] = useState(false);

    useEffect(() => {
        if(typeof window !== undefined) 
        {
            setCurrentURL(window.location.href);
            setBrowserTitle(document.title);
         }
        },[]);
        const iconSize = "21px";
        const iconColor = "white"
        const fbPostURL = "http://www.facebook.com/share.php?u=" + currentURL;
        const twittURL = "https://twitter.com/intent/tweet?text=" + browserTitle + " " +  currentURL;
        const linkedInURL = "https://www.linkedin.com/shareArticle?url="+currentURL+"&title="+browserTitle+"";
        const copylink = () => {
            navigator.clipboard.writeText(currentURL);

            if(!toggleCheckedIcon){
                setShowHideCopyIcon(!toggleCopyIcon);
                setShowHideCheckedIcon(!toggleCheckedIcon);
            }
           
        }

    //let settings =  getSocialLinks();
    return(
        <div className="socialLinks">
           <ul>
           <li>
                            <a title='Share on Linkedin' target={'_blank'} href={linkedInURL}>
                                 <AiOutlineLinkedin style={{ color: iconColor, fontSize: iconSize }} />
                            </a>
                        </li>

                        <li>
                            <a title='Share on Facebook' target={'_blank'} href={fbPostURL}>
                                <AiOutlineFacebook style={{ color: iconColor, fontSize: iconSize }} />
                            </a>
                        </li>

                        <li>
                           <a  title='Share on Twitter' target={'_blank'} href={twittURL}>
                                <SlSocialTwitter style={{ color: iconColor, fontSize: iconSize }} />
                           </a>
                        </li>
                        <li>
                           <a  title='Copy URL to clipboard' target={'_blank'} onClick={copylink}>
                                <AiOutlineCopy id="copyURLIcon" style={{ color: iconColor, fontSize: iconSize, display: toggleCopyIcon?"inline":"none" }} />
                                <AiOutlineCheck id="copyURLIconChecked" style={{ color: iconColor, fontSize: iconSize, display: toggleCheckedIcon?"inline":"none" }} />
                           </a>
                        </li>
                        </ul>

        </div>
    )
}

export default SocialLinks;