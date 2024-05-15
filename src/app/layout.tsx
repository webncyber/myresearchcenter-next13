import "./Styles/Layout.scss";
import "@/app/globals.css"
import {Container, ContentCentered, HeadingSection, Body} from "./Styles/Layout.Style"
import { Inter } from "next/font/google";
import TopNav from "./components/navbars/topnav";
import GoogleAnalytics from "./components/googleAnalytics/ga";
import { getSiteBackgroundColor } from "../../lib/siteSettings";
import StyledComponentsRegistry from "../../lib/registry";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let settings = await getSiteBackgroundColor();
  var bgColor = settings?.siteBackgroundColor?.code;

  return (
    <html lang="en">
      <GoogleAnalytics />
      <Body bodyBGColor={bgColor}>
      <StyledComponentsRegistry>
          <Container>
            <HeadingSection>
              <TopNav />
              <ContentCentered>
                {children}
              </ContentCentered>
            </HeadingSection>
          </Container>
        </StyledComponentsRegistry>
      </Body>
    </html>
  );
}
