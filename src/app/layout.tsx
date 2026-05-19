import type { Metadata } from "next";
import { Barlow, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationStructuredData } from "@/lib/structured-data";
import { EVENT, VENUE } from "@/lib/constants";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(EVENT.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Vegan Fantasy Fair | Veganes Festival mit Fantasy-Flair",
    template: "%s | Vegan Fantasy Fair",
  },
  description: `Vegan Fantasy Fair am ${EVENT.dateDisplay} im ${VENUE.name}, ${VENUE.city}. Vegane Messe mit Fantasy, Cosplay, Live-Musik, Streetfood und Kunsthandwerk.`,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Vegan Fantasy Fair",
    title: "Vegan Fantasy Fair | Veganes Festival mit Fantasy-Flair",
    description: `Vegan Fantasy Fair am ${EVENT.dateDisplay} im ${VENUE.name}, ${VENUE.city}.`,
    images: [
      {
        url: "/images/vff-logo-header.png",
        width: 329,
        height: 200,
        alt: "Vegan Fantasy Fair Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Vegan Fantasy Fair | Veganes Festival mit Fantasy-Flair",
    description: `Vegan Fantasy Fair am ${EVENT.dateDisplay} im ${VENUE.name}, ${VENUE.city}.`,
    images: ["/images/vff-logo-header.png"],
  },
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cinzel.className} ${barlow.variable}`}>
      <head>
        <OrganizationStructuredData />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
