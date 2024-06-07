import "./Styles/Layout.scss";
import '@radix-ui/themes/styles.css';
import {
  Container,
  ContentCentered,
  HeadingSection,
  Body,
} from "./Styles/Layout.Style";
import { Inter } from "next/font/google";
import TopNav from "./components/navbars/topnav";
import GoogleAnalytics from "./components/googleAnalytics/ga";
import { getSiteBackgroundColor } from "../../lib/siteSettings";
import StyledComponentsRegistry from "../../lib/registry";
import { Theme, ThemePanel } from "@radix-ui/themes";
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
      <Body className={inter.className} bodyBGColor={bgColor}>
          <StyledComponentsRegistry>
            <Container>
              <HeadingSection>
                <TopNav />
              </HeadingSection>
                <Theme hasBackground={false} accentColor="indigo" radius="medium">
              <ContentCentered>{children}</ContentCentered>
              </Theme>
            </Container>
          </StyledComponentsRegistry>
      </Body>
    </html>
  );
}
