import { Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export const interVariable = localFont({
  src: "../assets/fonts/InterVariable.woff2",
  variable: "--font-inter",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sampath Gujarathi",
  description: "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
  keywords: ["Sampath", "Gujarathi", "Portfolio", "Software Engineer", "Web Developer", "Mobile App Developer", "Full Stack Developer", "AspireFit", "DisBots", "Enron", "Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Portfolio", "Web Design", "Web Development", "App Design", "App Development", "Software Engineering"],
  authors: [{ name: "Sampath Gujarathi" }],
  creator: "Sampath Gujarathi",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sampath Gujarathi",
    description:
      "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
    url: "https://sampath.me",
    siteName: "Sampath Gujarathi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sampath Gujarathi",
    description:
      "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", inter.variable, interVariable.variable, GeistMono.variable, "flex flex-col max-w-2xl mx-auto py-14 px-8 selection:bg-primary-foreground selection:text-primary")}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "47cf0a60ac89472faa0c87a4171da3c4"}'></script>
      </body>
    </html>
  )
}
