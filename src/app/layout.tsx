import type { Metadata } from "next";
import { Barlow, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationStructuredData } from "@/lib/structured-data";

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
  title: {
    default: "Vegan Fantasy Fair | Veganes Festival mit Fantasy-Flair",
    template: "%s | Vegan Fantasy Fair",
  },
  description:
    "Vegan Fantasy Fair am 4. & 5. Juli 2026 im Schlosspark Geislautern, Völklingen. Vegane Messe mit Fantasy, Cosplay, Live-Musik, Streetfood und Kunsthandwerk.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Vegan Fantasy Fair",
    title: "Vegan Fantasy Fair | Veganes Festival mit Fantasy-Flair",
    description:
      "Vegan Fantasy Fair am 4. & 5. Juli 2026 im Schlosspark Geislautern, Völklingen.",
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
