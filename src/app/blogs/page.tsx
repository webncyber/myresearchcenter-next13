import type { Metadata } from "next";
import { getPageByUrl } from "../../../lib/page";
import PageContent from '@/app/components/pageContent/Content'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageByUrl("/blogs");
  let page = await pageData;
  const siteUrl = process.env.NEXT_PUBLIC_Host_Name;
  const canonicalUrl = siteUrl;
  let heroImagePath = page?.hero?.heroImage;
  const canonical = { canonical: canonicalUrl };
  const twitter = {
    card: "summary_large_image",
    site: siteUrl,
    creator: "Nazareth",
    images: heroImagePath,
  };
  const metaDesc =
    "Idea Guide is where you can find your ideal blog posts for the products you are searching for, tips and tricks, or compare products.";
  return {
    title: page.metaData?.browserTitle,
    description: page.metaData?.description,
    keywords: page.metaData?.keywords,
    robots: "index, follow",
    alternates: canonical,
    twitter: twitter,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: page?.title,
      description: page.metaData?.description,
      siteName: "ideaguide.net",
      images: [
        {
          url:
            heroImagePath = heroImagePath ? heroImagePath : "/Images/bkgHome.jpg",
        },
      ],
    },
  };
}

export default async function Blogs() {
  const pageData = getPageByUrl("/blogs");
  let page = await pageData;
  var contentTopSpacing =
  page?.contentTopSpacing && page.contentTopSpacing != "0"
    ? page.contentTopSpacing 
    : "";

var contentBGCode = page?.contentBackgroundColor?.code;
 
  return  PageContent(page, contentBGCode, contentTopSpacing, false, true)
}
