import { Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});


export const metadata: Metadata = {
  title: "Sampath Gujarathi",
  description:
    "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
  keywords: [
    "Sampath",
    "Gujarathi",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "AspireDev",
    "AspireFit",
    "DisBots",
    "Enron",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Portfolio",
    "Web Design",
    "Web Development",
    "App Design",
    "App Development",
    "Software Engineering",
  ],
  authors: [{ name: "Sampath Gujarathi" }],
  creator: "Sampath Gujarathi",
  robots: "index, follow",

  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },

  openGraph: {
    title: "Sampath Gujarathi",
    description:
      "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
    url: "https://sampath.me",
    siteName: "Sampath Gujarathi",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 512,
        height: 512,
        alt: "Sampath Gujarathi",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Sampath Gujarathi",
    description:
      "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
    images: ["/profile.jpg"],
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#223b59" },
    { media: "(prefers-color-scheme: light)", color: "#223b59" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", inter.variable)}
    >
    <body className="flex min-h-screen flex-col selection:bg-primary/5 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
