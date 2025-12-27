import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Sidebar } from "@/components/layout/sidebar"
import { CursorDot } from "@/components/layout/cursor-dot"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "exha studio — valentina motta",
  description:
    "photographer & creative director based in europe. editorial, commercial, and personal photography projects.",
  metadataBase: new URL("https://exhastudio.com"),
  openGraph: {
    title: "exha studio — valentina motta",
    description: "photographer & creative director based in europe. editorial, commercial, and personal photography projects.",
    url: "https://exhastudio.com",
    siteName: "exha studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "exha studio — valentina motta",
    description: "photographer & creative director based in europe.",
  },
  icons: {
    icon: "/logo_exha.png",
    apple: "/logo_exha.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        <CursorDot />
        <Sidebar />
        <main className="md:ml-60 min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
