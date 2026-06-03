import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-data";
import { ToastProvider } from "@/components/toast";
import { ContactModal } from "@/components/contact-modal";

export const metadata: Metadata = {
  title: {
    default: "Ishant Sharma | Full Stack Developer & AI Generalist",
    template: "%s | Ishant Sharma"
  },
  description:
    "Portfolio of Ishant Sharma, a Full Stack Developer, AI Generalist, and Creative Technologist building scalable software, AI workflows, and meaningful digital products.",
  keywords: [
    "Ishant Sharma",
    "Full Stack Developer",
    "AI Generalist",
    "Prompt Engineer",
    "Creative Technologist",
    "Software Engineer",
    "Jaipur"
  ],
  authors: [{ name: siteConfig.name, url: "mailto:ishaantsharmaa@gmail.com" }],
  creator: siteConfig.name,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ishant Sharma | Full Stack Developer & AI Generalist",
    description:
      "Premium portfolio for software engineering internships, freelance work, and startup opportunities.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/toon-avatar.png",
        width: 800,
        height: 800,
        alt: "Ishant Sharma toon avatar"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <ContactModal />
        <ToastProvider />
      </body>
    </html>
  );
}
