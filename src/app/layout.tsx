import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeIndicator from "@/components/ThemeIndicator";
import ThemeWrapper from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harley - Full Stack Developer & Blockchain Enthusiast",
  description:
    "Passionate Full Stack Developer specializing in React, Node.js, TypeScript, and blockchain technologies. Creating innovative web solutions and decentralized applications.",
  keywords: [
    "full stack developer",
    "blockchain developer",
    "react",
    "nextjs",
    "typescript",
    "solidity",
    "web3",
    "portfolio",
    "software engineer"
  ],
  authors: [{ name: "Harley" }],
  openGraph: {
    title: "Harley - Full Stack Developer & Blockchain Enthusiast",
    description:
      "Passionate Full Stack Developer specializing in React, Node.js, TypeScript, and blockchain technologies. Creating innovative web solutions and decentralized applications.",
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
          </ThemeWrapper>
          <ThemeIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
