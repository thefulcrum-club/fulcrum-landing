import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://thefulcrum.club";
const SITE_TITLE = "fulcrum. — Strategic Consulting for Founders";
const SITE_DESCRIPTION =
  "We help ambitious founders find the real bottlenecks holding their business back and work alongside them to fix them. We don't disappear after strategy but stay in the room until execution turns into measurable progress.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — fulcrum.",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "strategic consulting for founders",
    "startup consultancy",
    "business audit",
    "founder advisory",
    "bottleneck diagnosis",
    "fractional operator",
    "fulcrum",
  ],
  authors: [{ name: "Anvit Thakur", url: "https://www.linkedin.com/in/anvit-thakur/" }],
  creator: "fulcrum.",
  publisher: "fulcrum.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "fulcrum.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "fulcrum.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Anvit Thakur",
    url: "https://www.linkedin.com/in/anvit-thakur/",
  },
  email: "founder@thefulcrum.club",
  areaServed: "Worldwide",
  serviceType: "Strategic business consulting for founders",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "fulcrum.",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="relative min-h-full overflow-x-hidden bg-background font-mono text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
