"use client"
import './style.scss'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaHome, FaBlogger } from "react-icons/fa";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const TopNav = () => {
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

    const changeBackground = () => {
        if (scrollY >= 36) {
            setNavbarBgColor(true)
        } else {
            setNavbarBgColor(false)
        }
      }
      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
    
      
    return (
        <div className='fit'>
            <div id="nav-desktop" className={setNavBG ? "navbar nav-bg-color" : "navbar"}>
                <div>
                    <ul>
                        <li>
                            <Link href='/'>
                            <FaHome style={{ color: 'white', fontSize: '30px' }} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs">
                            <FaBlogger style={{ color: 'white', fontSize: '20px' }} />
                                Blogs
                            </Link>
                           </li>
                        <li><a href='mailto:webncyber@gmail.com'>
                            <AiOutlineMail style={{ color: 'white', fontSize: '20px' }} />
                            Contact</a></li>
                        <li className='social-link'>
                            <a title='Youtube' href='https://www.youtube.com/@webncyber' target={'_blank'}>
                            <SlSocialYoutube style={{ color: 'white', fontSize: '20px' }} />
                            </a>
                        </li>

                        <li className='social-link'>
                            <a title='Share on Linkedin' target={'_blank'} href={linkedInURL}>
                                <AiOutlineLinkedin style={{ color: 'white', fontSize: '20px' }} />
                            </a>
                        </li>

                        <li className='social-link'>
                            <a title='Share on Facebook' target={'_blank'} href={fbPostURL}>
                                <AiOutlineFacebook style={{ color: 'white', fontSize: '20px' }} />
                            </a>
                        </li>

                        <li className='social-link'>
                           <a  title='Share on Twitter' target={'_blank'} href={twittURL}>
                                <SlSocialTwitter style={{ color: 'white', fontSize: '20px' }} />
                           </a>
                        </li>

                        </ul>
                </div>
            </div>

            <div id="nav-mobile">
                <div onClick={() => showMobileMenu(!toggle)} className='hamburgerMenu'>
                    <GiHamburgerMenu style={{ color: 'white', fontSize: '30px' }} />
                </div>

                {toggle && (
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/blogs'>
                            Blogs</a></li>
                        <li><a href='mailto:webncyber@gmail.com'>
                            Contact</a></li>
                        <li>
                           
                            <a title='Youtube' href='https://www.youtube.com/@webncyber' target={'_blank'}>
                            <SlSocialYoutube style={{ color: 'black', fontSize: '20px' }} />
                            </a>     
                            <a title='Share on Linkedin' target={'_blank'} href={linkedInURL}>
                                <AiOutlineLinkedin style={{ color: 'black', fontSize: '20px' }} />
                            </a>   
                            <a title='Share on Facebook' target={'_blank'} href={fbPostURL}>
                                <AiOutlineFacebook style={{ color: 'black', fontSize: '20px' }} />
                            </a>   
                            <a  title='Share on Twitter' target={'_blank'} href={twittURL}>
                                <SlSocialTwitter style={{ color: 'black', fontSize: '20px' }} />
                           </a>
                        </li>
                      
                    </ul>
                )

                }

            </div>
        </div>
    );
}


export default TopNav;