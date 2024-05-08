import type { Metadata } from "next";
import SingleColumnContent from "../../../../components/singleColumnContent/SingleColumnContent";
import ImageCardContent from "../../../../components/imageCard/ImageCardContent";
import { getPageByUrl } from "../../../../../../lib/page";
import RichTextCardContent from "../../../../components/richTextCard/RichTextCardContent";
import { DefaultCard } from "../../../../../../types";
import Hero from "../../../../components/hero/HERO";
import FooterNav from "../../../../components/navbars/FooterNav";
import SocialLinks from "../../../../components/socialLinks/SocialLinks";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import {
  ContentSection,
  FooterSection,
  HeroSection,
} from "@/app/Styles/Layout.Style";

export async function generateMetadata({
  params,
}: {
  params: { dir1: string; dir2: string; dir3: string; dir4: string };
}): Promise<Metadata> {
  const fullPath =
    "/" +
    params.dir1 +
    "/" +
    params.dir2 +
    "/" +
    params.dir3 +
    "/" +
    params.dir4;
  const pageData = await getPageByUrl(fullPath);
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

export default async function PathOne({
  params,
}: {
  params: { dir1: string; dir2: string; dir3: string; dir4: string };
}) {
  const fullPath =
    "/" +
    params.dir1 +
    "/" +
    params.dir2 +
    "/" +
    params.dir3 +
    "/" +
    params.dir4;
  const pageData = getPageByUrl(fullPath);
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

        {page.contentList?.map((card: DefaultCard) => {
          switch (card.__typename) {
            case "ImageCard":
              return ImageCardContent(card);
            case "RichTextCard":
              return RichTextCardContent(card);
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
