import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _merriweather = Merriweather({ subsets: ["latin"], weight: ["700", "900"] })

export const metadata: Metadata = {
  title: "LOTUS HILL Special School",
  description:
    "LOTUS HILL Special School - Providing quality education and therapeutic services for children with special needs",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-lotus.png",
        type: "image/png",
      },
    ],
    apple: "/logo-lotus.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#569B5E" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#A6D5A6" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
