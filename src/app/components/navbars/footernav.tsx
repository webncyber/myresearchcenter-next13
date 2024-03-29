'use client'
import './style.scss'
import * as IconsSl from "react-icons/sl";
import React, { useState, useEffect } from 'react';
import { getFooterNavigation } from "../../../../lib/siteSettings";
import Link from 'next/link';
import { Navigation } from '../../../../types';
import SocialLinks from '../../components/socialLinks/socialLinks';
const FooterNav = async () => {
    let settings = await getFooterNavigation();
    return (
       <div>
       <SocialLinks/>
        <div id="nav-desktop-footer" className="navbar-footer">
                <div>
                    <ul>
                    {
                            settings?.footerNavigation?.map((nav:Navigation) => (
                            <li key={nav.title}>
                            <a href={nav.linkUrl} target={nav.linkTarget}>
                                {
                                    nav.svgData && (
                                        <span dangerouslySetInnerHTML={{__html: nav.svgData.icon ? nav.svgData.icon : ""}}></span>
                                )}
                                {nav?.linkTitle}
                            </a>
                            <span className='separator'>*</span>
                        </li>
                            ))
                        }
                        <li>
                            © {new Date().getFullYear()}
                        </li>
                        </ul>

                        <br/><br/><br/><br/>
                </div>
            </div>
       </div>
    );
}


export default FooterNav;