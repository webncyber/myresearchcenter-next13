import Image from "next/image";
import type { Metadata } from "next";
import SingleColumnContent from "../../../../components/singleColumnContent/SingleColumnContent";
import TwoColumnContent from "../../../../components/twoColumnContent/twoColumnContent";
import { getPageByUrl } from "../../../../../../lib/page";


export async function generateMetadata({
  params,
}: {
  params: { dir1: string, dir2: string, dir3:string, dir4:string};
}): Promise<Metadata> {
  const fullPath = "/"+params.dir1 + "/" + params.dir2 + "/" + params.dir3 + "/" + params.dir4;
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
  params: { dir1: string, dir2: string, dir3:string, dir4:string};
}) {
  const fullPath = "/"+params.dir1 + "/" + params.dir2 + "/" + params.dir3 + "/" + params.dir4;
  const pageData = getPageByUrl(fullPath);
  let page = await pageData;

  return (
   <>
    <div className="single-column-content">
      <h2>{page?.title}</h2>
    </div>
      {page.content &&(
        SingleColumnContent(page, "c")
      )}
      
      {page.contentListing &&(
        TwoColumnContent(page)
      )}
      {page.contentBottom && (
        SingleColumnContent(page, "cb")
      )}
   </>
  );
}
