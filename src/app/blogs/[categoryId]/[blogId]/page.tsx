import type { Metadata } from "next";
import { getBlogByUrl } from "../../../../../lib/blogs";
import PageContent from '@/app/components/pageContent/Content'

export async function generateMetadata({
  params,
}: {
  params: { blogId: string; categoryId: string };
}): Promise<Metadata> {
  let url = "/blogs/" + params.categoryId + "/" + params.blogId;
  const pageData = await getBlogByUrl(url);
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

export default async function BlogDetails({
  params,
}: {
  params: { blogId: string; categoryId: string };
}) {
  let url = "/blogs/" + params.categoryId + "/" + params.blogId;
  const blogData = getBlogByUrl(url);
  let page = await blogData;
  let pubDate = page.publishedDate != undefined ? page.publishedDate : "";
  let options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  let date = new Date(pubDate);
  var contentTopSpacing =
  page?.contentTopSpacing && page.contentTopSpacing != "0"
    ? page.contentTopSpacing
    : "";

var contentBGCode = page?.contentBackgroundColor?.code;

  return PageContent(page, contentBGCode, contentTopSpacing)
}
