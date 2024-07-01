import SingleColumnContent from "@/app/components/singleColumnContent/SingleColumnContent";
import ImageCardContent from "@/app/components/imageCard/imageCardContent";
import { ContactCard, DefaultCard, Page } from "../../../../types";
import RichTextCardContent from "@/app/components/richTextCard/richTextCardContent";
import Hero from "@/app/components/hero/HERO";
import FooterNav from "@/app/components/navbars/footernav";
import SocialLinks from "@/app/components/socialLinks/socialLinks";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import ContactCardForm from "@/app/components/contactCard/ContactCardForm";
import EmailSignUpCardForm from "@/app/components/emailSignUpCard/EmailSignUpCard";
import GridCardContent from "../gridCard/GridCardContent";
import BlogListing from "@/app/components/blogListing/BlogListing";
import Categories from "@/app/components/categories/CategoryListing";
import { BlogListingByCategory } from "@/app/components/blogListing/BlogsByCategory";
import {
  ContentSection,
  FooterSection,
  HeroSection,
} from "../../Styles/Layout.Style";
import { Card,Box } from "@radix-ui/themes";

export default function PageContent(
  page: Page,
  contentBGCode?: string,
  contentTopSpacing?: string,
  topXBlogs?: boolean,
  showCategories?: boolean,
  showBlogsByCategory?: boolean,
  blogCategoryPath?: string
) {
  return (
    <>
      {page.hero && (
        <HeroSection>
          <Hero
            title={page.hero?.title}
            subTitle={page.hero?.subTitle}
            heroImage={page.hero?.heroImage}
            titleColor={page.hero?.titleColor}
            showEmailSignUp={page.hero?.showEmailSignUp}
          />
        </HeroSection>
      )}
      <ContentSection
        contentBGColor={contentBGCode}
        contentTopSpacing={contentTopSpacing}
      >
        {page?.title && PageTitle(page.title)}
        {page.contentTop &&
          SingleColumnContent(page, "c", page?.contentTopBackgroundColor?.code)}

        {showCategories && <div>{Categories("0")}</div>}

        {showBlogsByCategory && (
          <div>{BlogListingByCategory(blogCategoryPath)}</div>
        )}

        {page.contentList?.map((card: DefaultCard) => {
          switch (card.__typename) {
            case "ImageCard":
              return ImageCardContent(card);
            case "RichTextCard":
              return RichTextCardContent(card);
            case "ContactCard":
              return <ContactCardForm />;
            case "GridCard": 
              return  GridCardContent(card);
            case "EmailSignUpCard":
              return <Box maxWidth="30%">
                 <EmailSignUpCardForm />
              </Box>
          }
        })}

        {topXBlogs && (
          <div>
            <div>{BlogListing("4")}</div>
          </div>
        )}

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
