import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TrustEngineers",
    template: "%s | TrustEngineers",
  },
  description:
    "TrustEngineers builds secure, scalable software and IT solutions—cloud, automation, and engineering services that help teams ship faster with confidence.",
  applicationName: "TrustEngineers",
  metadataBase: new URL("https://trustengineers.space/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://trustengineers.space/",
    siteName: "TrustEngineers",
    title: "TrustEngineers",
    description:
      "Secure, scalable engineering—cloud, automation, and IT solutions built with a security-first mindset.",
  },
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#050914] text-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
