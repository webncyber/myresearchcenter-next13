import { SiteSettings} from '../types';

export async function getTopNavigation()  : Promise<SiteSettings>
{
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=tn";
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const navData = jsonData.header.navigations;


        const topNav: SiteSettings = {
           topNavigation: navData.topNavigation
        }
        return topNav; 
    }


export async function getFooterNavigation()  : Promise<SiteSettings>
{
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=fn";
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
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
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=sm";
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const navData = jsonData.social.socialMedia;

        const socialNav: SiteSettings = {
           socialLinks: navData.socialLinks
        }
        return socialNav; 
}

export async function getSiteBackgroundColor() : Promise<SiteSettings>
 {
    let fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=sbc";
    fetchAPIUrl += "&tm=" + Date.now();
    //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: Constants.API_Revalidate } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const data = jsonData.settings;

        const settings: SiteSettings = {
           siteBackgroundColor: data?.siteBackgroundColor
        }
        return settings; 
}