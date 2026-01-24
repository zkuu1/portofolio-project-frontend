import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zkuu — Web Developer Portfolio",
  description:
    "Portfolio Zkuu, Web Developer spesialis Next.js, React, Tailwind CSS. Menampilkan project, pengalaman, dan kontak.",
  keywords: [
    "zkuu",
    "portfolio zkuu",
    "web developer indonesia",
    "nextjs developer",
    "react developer",
    "frontend developer",
    "tailwind css",
  ],
  authors: [{ name: "Zkuu" }],
  metadataBase: new URL("https://zkuu.site"),
  openGraph: {
    title: "Zkuu — Web Developer Portfolio",
    description: "Portfolio Zkuu, Web Developer spesialis Next.js dan React.",
    url: "https://zkuu.site",
    siteName: "Zkuu Portfolio",
    images: [
      {
        url: "/og.png", // optional
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
