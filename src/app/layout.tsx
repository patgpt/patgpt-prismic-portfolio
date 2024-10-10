import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";

const FontSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(FontSans.className)}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
