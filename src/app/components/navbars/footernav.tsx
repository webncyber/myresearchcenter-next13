'use client'
import './style.scss'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaHome, FaBlogger } from "react-icons/fa";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from 'react';


const FooterNav = () => {
    const [currentURL, setCurrentURL] = useState('')
    const [browserTitle, setBrowserTitle] = useState('')

        useEffect(() => {
        if(typeof window !== undefined) {

            setCurrentURL(window.location.href);
            setBrowserTitle(document.title);
        }
        },[]);
        
   
    const fbPostURL = "http://www.facebook.com/share.php?u=" + currentURL;
    const twittURL = "https://twitter.com/intent/tweet?text=" + browserTitle + " " +  currentURL;
    const linkedInURL = "https://www.linkedin.com/shareArticle?url="+currentURL+"&title="+browserTitle+"";
      
    return (
            <div id="nav-desktop-footer" className="navbar-footer">
                <div>
                    <ul>
                        <li>
                            <a href='/'>
                            Home
                            </a>
                            <span className='separator'>*</span>
                        </li>
                        <li><a href='/blogs'>
                            Blogs</a>
                            <span className='separator'>*</span></li>
                        <li><a href='mailto:webncyber@gmail.com'>
                            Contact</a>
                            <span className='separator'>*</span>
                            </li>
                        <li className='social-link'>
                            <a title='Youtube' href='https://www.youtube.com/@webncyber' target={'_blank'}>
                                <SlSocialYoutube style={{ color: 'black', fontSize: '14px' }} />
                            </a>
                            <span className='separator'>*</span>
                        </li>
{/* 
                        <li className='social-link'>
                            <a title='Share on Linkedin' target={'_blank'} href={linkedInURL}>
                                <AiOutlineLinkedin style={{ color: 'black', fontSize: '14px' }} />
                            </a>
                            <span className='separator'>*</span>
                        </li>

                        <li className='social-link'>
                            <a title='Share on Facebook' target={'_blank'} href={fbPostURL}>
                                <AiOutlineFacebook style={{ color: 'black', fontSize: '14px' }} />
                            </a>
                            <span className='separator'>*</span>
                        </li>

                        <li className='social-link'>
                           <a  title='Share on Twitter' target={'_blank'} href={twittURL}>
                                <SlSocialTwitter style={{ color: 'black', fontSize: '13px' }} />
                           </a>
                           <span className='separator'>*</span>
                        </li> */}
                        <li>
                            © 2023
                        </li>
                        </ul>

                        <br/><br/><br/><br/>
                </div>
            </div>
    );
}


export default FooterNav;