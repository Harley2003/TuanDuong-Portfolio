import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harley - Full Stack Developer",
  description:
    "Creative full stack developer specializing in React, Next.js, and modern web technologies",
  keywords: [
    "full stack developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio"
  ],
  authors: [{ name: "Harley" }],
  openGraph: {
    title: "Harley - Full Stack Developer",
    description:
      "Creative full stack developer specializing in React, Next.js, and modern web technologies",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
