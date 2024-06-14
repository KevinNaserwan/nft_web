import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KNFT",
  description: "NFT Website Created With Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.svg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
