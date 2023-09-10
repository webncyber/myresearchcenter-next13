import './style.scss'
import Link from 'next/link'
import { getTopNavigation } from "../../../../lib/siteSettings"; 
import { Navigation } from '../../../../types';

const TopNav = async () => {
      let settings = await getTopNavigation();

      
    return (
        <div className='fit'>
            <div id="nav-desktop" className="navbar nav-bg-color">
                <div>
                    <ul>
                        {
                            settings?.topNavigation?.map((nav:Navigation) => (
                            <li key={nav.title}>
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
                            <li key={nav.title}>
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