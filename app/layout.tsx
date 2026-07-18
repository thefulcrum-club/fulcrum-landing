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

export const metadata: Metadata = {
  title: "fulcrum. — Strategic Consulting for Founders",
  description:
    "We help ambitious founders find the real bottlenecks holding their business back and work alongside them to fix them. We don't disappear after strategy but stay in the room until execution turns into measurable progress.",
  openGraph: {
    title: "fulcrum. — Strategic Consulting for Founders",
    description:
      "We help ambitious founders find the real bottlenecks holding their business back and work alongside them to fix them. We don't disappear after strategy but stay in the room until execution turns into measurable progress.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "fulcrum. — Strategic Consulting for Founders",
    description:
      "We help ambitious founders find the real bottlenecks holding their business back and work alongside them to fix them. We don't disappear after strategy but stay in the room until execution turns into measurable progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="relative min-h-full overflow-x-hidden bg-background font-mono text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
