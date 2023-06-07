
import './Styles/Layout.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] })


export async function generateMetadata(): Promise<Metadata> {

const siteUrl = process.env.Site_URL;
  const canonicalUrl = siteUrl;
  let heroImagePath = siteUrl + "/Images/bkgHome.jpg";
  const canonical = { canonical: canonicalUrl }
  const twitter = { card: "summary_large_image", site: siteUrl, creator: "Nazareth", "images": heroImagePath }
  const metaDesc = "Research Center is where you can find your ideal blog posts for the products you are searching for, tips and tricks, or compare products.";
  return {
    title: "My Research Center",
    description: metaDesc,
    keywords: "research center, Search, research, products compare, compare",
    robots: "index, follow",
    alternates: canonical,
    twitter: twitter,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: "My Research Center",
      description: metaDesc,
      siteName: "myresearchcenter.com",
      images: [{
        url: heroImagePath,
      }],
    }
   }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
      </body>
    </html>
  )
}
