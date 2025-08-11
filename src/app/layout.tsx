import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ThemeProvider,
  ThemeIndicator,
  ThemeWrapper
} from "@/components/theme";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Harley - Full Stack Developer & Software Engineer",
  description:
    "Passionate Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Creating innovative and scalable web applications.",
  keywords: [
    "full stack developer",
    "software engineer",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "nodejs",
    "portfolio",
    "web developer"
  ],
  authors: [{ name: "Harley" }],
  openGraph: {
    title: "Harley - Full Stack Developer & Software Engineer",
    description:
      "Passionate Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Creating innovative and scalable web applications.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <ThemeWrapper>
            {children}
            {/* Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_ANALYTICS_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `}
            </Script>
          </ThemeWrapper>
          <ThemeIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
