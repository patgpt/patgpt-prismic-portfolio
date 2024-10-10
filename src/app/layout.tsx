import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const FontSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(FontSans.className)}>
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
