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

const BASE_URL = "https://sampath.me";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Sampath Gujarathi",
  description:
    "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
  keywords: [
    "Sampath",
    "Sampath Gujarathi",
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
  authors: [{ name: "Sampath Gujarathi", url: BASE_URL }],
  creator: "Sampath Gujarathi",
  publisher: "Sampath Gujarathi",

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Sampath Gujarathi",
    description:
      "I enjoy building full-stack applications, experimenting with self-hosted infrastructure, and learning something new every day.",
    url: "https://sampath.me",
    siteName: "Sampath Gujarathi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpeg",
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
    images: ["/profile.jpeg"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#223b59" },
    { media: "(prefers-color-scheme: light)", color: "#223b59" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sampath Gujarathi",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Software Developer",
  description:
    "Sampath Gujarathi is a full-stack and mobile developer who builds production-grade web apps, self-hosted infrastructure, and open-source tools.",
  email: "hello@sampath.me",
  sameAs: [
    "https://github.com/gujarathisampath",
    "https://github.com/sampathgujarathi",
    "https://x.com/GSampath__",
    "https://www.instagram.com/sampathgujarathi/",
  ],
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
      className={cn("antialiased", "font-sans", inter.variable, inter.className)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col selection:bg-primary/5 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
