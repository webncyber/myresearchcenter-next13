import "./Styles/Layout.scss";
import {Container, ContentCentered, HeadingSection, Body} from "./Styles/Layout.Style"
import { Inter } from "next/font/google";
import TopNav from "./components/navbars/topnav";
import GoogleAnalytics from "./components/googleAnalytics/GA";
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
