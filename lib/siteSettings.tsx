import { SiteSettings} from '../types';
import { revalidateAPITag } from './constants';

export async function getTopNavigation()  : Promise<SiteSettings>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=tn";
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, { next: { tags: [revalidateAPITag] } });
    const jsonData = await apiContent.json();
    const navData = jsonData.header.navigations;


        const topNav: SiteSettings = {
           topNavigation: navData.topNavigation
        }
        return topNav; 
    }


export async function getFooterNavigation()  : Promise<SiteSettings>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=fn";
    //const apiContent = await fetch(fetchAPIUrl);
    const apiContent = await fetch(fetchAPIUrl, { next: { tags: [revalidateAPITag] } });
    //const apiContent = await fetch(fetchAPIUrl);
    const jsonData = await apiContent.json();
    const navData = jsonData.footer.navigations;

        const footerNav: SiteSettings = {
           footerNavigation: navData.footerNavigation
        }
        return footerNav; 
}

export async function getSocialLinks()  : Promise<SiteSettings>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=sm";
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, { next: { tags: [revalidateAPITag] } });
    const jsonData = await apiContent.json();
    const navData = jsonData.social.socialMedia;

        const socialNav: SiteSettings = {
           socialLinks: navData.socialLinks
        }
        return socialNav; 
}

export async function getSiteBackgroundColor() : Promise<SiteSettings>
 {
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=sbc";
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, { next: { tags: [revalidateAPITag] } });
    const jsonData = await apiContent.json();
    const data = jsonData.settings;

        const settings: SiteSettings = {
           siteBackgroundColor: data?.siteBackgroundColor
        }
        return settings; 
}