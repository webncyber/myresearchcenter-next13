import Image from "next/image";
import type { Metadata } from "next";
import SingleColumnContent from "../../components/singleColumnContent/SingleColumnContent";
import ImageCardContent from "../../components/imageCard/imageCardContent";
import RichTextCardContent from "../../components/richTextCard/richTextCardContent" 
import { getPageByUrl } from "../../../../lib/page";
import { DefaultCard } from "../../../../types";
import Hero from "../../components/hero/HERO";
import FooterNav from "../../components/navbars/footernav";


export async function generateMetadata({
  params,
}: {
  params: { dir1: string, dir2: string};
}): Promise<Metadata> {
  const fullPath = "/"+params.dir1 + "/" + params.dir2;
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
  params: { dir1: string, dir2: string};
}) {
  const fullPath = "/"+params.dir1 + "/" + params.dir2;
  const pageData = getPageByUrl(fullPath);
  let page = await pageData;

  return (
   <>
     <div className='hero-section'>
       <Hero 
            title={page.hero?.title} 
            subTitle={page.hero?.subTitle}  
            heroImage={page.hero?.heroImage}
            titleColor={page.hero?.titleColor}
            />
      </div>
      <div className='content-section'>
    <div className="single-column-content">
      <h2>{page?.title}</h2>
    </div>
      {page.content &&(
        SingleColumnContent(page, "c")
      )}
     
      {page.contentList?.map((card:DefaultCard) => {
        switch (card.__typename) {
          case "Card":
           return(
            ImageCardContent(card)
           )
          case "RichTextCard":
             return(
              RichTextCardContent(card)
             )
        }
      })}

      {page.contentBottom && (
        SingleColumnContent(page, "cb")
      )}
         <div className='footer-section'>
              <FooterNav/>
          </div>
        </div>
   </>
  );
}
