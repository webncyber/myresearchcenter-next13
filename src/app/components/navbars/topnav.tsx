"use client"
import './style.scss'
import * as IconsAi from "react-icons/ai";
import * as IconsFa from "react-icons/fa";
import * as IconsSl from "react-icons/sl";
import * as IconsGi from "react-icons/gi";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { getTopNavigation } from "../../../../lib/siteSettings"; 
import { Navigation } from '../../../../types';

const TopNav = async () => {
    const [currentURL, setCurrentURL] = useState('');
    const [browserTitle, setBrowserTitle] = useState('');
    const [scrollY, setScrollY] = useState(0);

        useEffect(() => {
        if(typeof window !== undefined) {
            setCurrentURL(window.location.href);
            setBrowserTitle(document.title);
            setScrollY(window.scrollY);
         }
        },[]);
   

    const [toggle, showMobileMenu] = useState(false);
    const [setNavBG, setNavbarBgColor] = useState(false);
    const fbPostURL = "http://www.facebook.com/share.php?u=" + currentURL;
    const twittURL = "https://twitter.com/intent/tweet?text=" + browserTitle + " " +  currentURL;
    const linkedInURL = "https://www.linkedin.com/shareArticle?url="+currentURL+"&title="+browserTitle+"";


    
      let settings = await getTopNavigation();

      
    return (
        <div className='fit'>
            <div id="nav-desktop" className={setNavBG ? "navbar nav-bg-color" : "navbar nav-bg-color"}>
                <div>
                    <ul>
                        {
                            settings?.topNavigation?.map((nav:Navigation) => (
                            <li>
                            <Link href={nav.linkUrl} target={nav.linkTarget}>
                                {
                                    nav.svgData && (
                                        <span dangerouslySetInnerHTML={{__html: nav.svgData.icon ? nav.svgData.icon : ""}}></span>
                                )}
                                {nav?.linkTitle}
                            </Link>
                        </li>
                            ))
                        }
                       
                       
                    </ul>
                </div>
            </div>

            <div id="nav-mobile" className="navbar nav-bg-color">
                    <ul>
                    {
                            settings?.topNavigation?.map((nav:Navigation) => (
                            <li>
                            <Link href={nav.linkUrl} target={nav.linkTarget}>
                                {
                                    nav.svgData && (
                                        <span dangerouslySetInnerHTML={{__html: nav.svgData.icon ? nav.svgData.icon : ""}}></span>
                                )}
                            </Link>
                        </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    );
}


export default TopNav;