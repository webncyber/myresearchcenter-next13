"use server";
import { revalidateTag } from "next/cache";
import { revalidateAPITag } from "../../../../../../lib/constants";
import { ContentSection, FooterSection, HeroSection } from "../../../../Styles/Layout.Style";
export default async function action({ params }: { params: { pin: string } }) {
  if (params.pin == process.env.NEXT_PUBLIC_API_Revalidate_Pin) {
    revalidateTag(revalidateAPITag);
    return (
      <ContentSection>
           <h2>Revalidate!</h2>
      </ContentSection>
    );
  }
}
