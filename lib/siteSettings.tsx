import {
  gqlGetFooterNav,
  gqlGetSocialLinks,
  gqlGetTopNav,
  gqlSiteBackgroundColor,
} from "./gql/settingQueries";
import { SiteSettings } from "../types";
import { revalidateAPITag } from "./constants";

export async function getTopNavigation(): Promise<SiteSettings> {
  const tnResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`,
    {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: gqlGetTopNav(),
      }),
    }
  );

  const tnData = await tnResponse.json();
  const header = tnData.data.listSiteSettings.data[0];
  const navData = header.navigations;

  const topNav: SiteSettings = {
    topNavigation: navData.topNavigation,
  };
  return topNav;
}

export async function getFooterNavigation(): Promise<SiteSettings> {
  const fnResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`,
    {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: gqlGetFooterNav(),
      }),
    }
  );

  const fnData = await fnResponse.json();
  const footer = fnData.data.listSiteSettings.data[0];

  const navData = footer.navigations;

  const footerNav: SiteSettings = {
    footerNavigation: navData.footerNavigation,
  };
  return footerNav;
}

export async function getSocialLinks(): Promise<SiteSettings> {
  const smResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`,
    {
      next: { tags: [revalidateAPITag] },
      //cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: gqlGetSocialLinks(),
      }),
    }
  );

  const smData = await smResponse.json();
  const social = smData.data.listSiteSettings.data[0];

  const navData = social.socialMedia;

  const socialNav: SiteSettings = {
    socialLinks: navData.socialLinks,
  };
  return socialNav;
}

export async function getSiteBackgroundColor(): Promise<SiteSettings> {
    const sbcResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ReadOnly_URL}`, {
        next: { tags: [revalidateAPITag] },
        //cache: "no-store",
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          },
          body: JSON.stringify({
            query: gqlSiteBackgroundColor(),
          })
      })
  
      const sbcData = await sbcResponse.json();
      const settingsData =  sbcData.data.listSiteSettings.data[0];

  const settings: SiteSettings = {
    siteBackgroundColor: settingsData?.siteBackgroundColor,
  };
  return settings;
}
