import path from 'path';
import { promises as fs } from 'fs';
import { json } from 'stream/consumers';
import { SiteSettings} from '../types';
import *  as Constants from './constants'
import TopNav from '@/app/components/navbars/topnav';

export async function getTopNavigation()  : Promise<SiteSettings>
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getsitesettings?o=tn";
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

