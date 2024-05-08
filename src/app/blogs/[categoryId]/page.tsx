import React from "react";
import type { Metadata } from "next";
import SingleColumnContent from "../../components/singleColumnContent/SingleColumnContent";
import { getCategoryPageByUrl } from "../../../../lib/categories";
import { BlogListingByCategory } from "../../components/blogListing/BlogsByCategory";
import ImageCardContent from "../../components/imageCard/imageCardContent";
import { DefaultCard } from "../../../../types";
import RichTextCardContent from "@/app/components/richTextCard/richTextCardContent";
import Hero from "@/app/components/hero/HERO";
import FooterNav from "@/app/components/navbars/footernav";
import SocialLinks from "@/app/components/socialLinks/socialLinks";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import {
  ContentSection,
  FooterSection,
  HeroSection,
} from "../../Styles/Layout.Style";

const blogsPahtName = "/blogs/";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  const pageData = await getCategoryPageByUrl(
    blogsPahtName + params.categoryId
  );
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
    "Research Center is where you can find your ideal blog posts for the products you are searching for, tips and tricks, or compare products.";
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
      siteName: "myresearchcenter.com",
      images: [
        {
          url:
            heroImagePath != undefined ? heroImagePath : "/Images/bkgHome.jpg",
        },
      ],
    },
  };
}

export default async function Blogs({
  params,
}: {
  params: { categoryId: string };
}) {
  const pageData = getCategoryPageByUrl(blogsPahtName + params.categoryId);
  let page = await pageData;
  var contentTopSpacing =
  page?.contentTopSpacing && page.contentTopSpacing != "0"
    ? page.contentTopSpacing + "px"
    : "";

var contentBGCode = page?.contentBackgroundColor?.code;
 
  return (
    <>
      {page.hero && (
        <HeroSection>
          <Hero
            title={page.hero?.title}
            subTitle={page.hero?.subTitle}
            heroImage={page.hero?.heroImage}
            titleColor={page.hero?.titleColor}
          />
        </HeroSection>
      )}

      <ContentSection contentBGColor={contentBGCode} contentTopSpacing={contentTopSpacing}>
        {page?.title && PageTitle(page.title)}

        {page.contentTop &&
          SingleColumnContent(page, "c", page?.contentTopBackgroundColor?.code)}

        <div>{BlogListingByCategory(blogsPahtName + params.categoryId)}</div>

        {page.contentList?.map((card: DefaultCard) => {
          switch (card.__typename) {
            case "ImageCard":
              return ImageCardContent(card);
              break;
            case "RichTextCard":
              return RichTextCardContent(card);
              break;
          }
        })}

        {page.contentBottom &&
          SingleColumnContent(
            page,
            "cb",
            page?.contentBottomBackgroundColor?.code
          )}
        <FooterSection>
          <div>
            <SocialLinks />
            {!page.hideFooterNavigation && <FooterNav />}
          </div>
        </FooterSection>
      </ContentSection>
    </>
  );
}
