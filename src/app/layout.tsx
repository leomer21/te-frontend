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
    default: "Kafu People (formerly Trust Engineers)",
    template: "%s | Kafu People",
  },
  description:
    "Trust Engineers is now operating as Kafu People. Same team, expanded vision—visit our new official website at kafupeople.com.",
  applicationName: "Kafu People",
  metadataBase: new URL("https://trustengineers.space/"),
  alternates: {
    canonical: "https://kafupeople.com",
  },
  openGraph: {
    type: "website",
    url: "https://trustengineers.space/",
    siteName: "Kafu People",
    title: "Kafu People (formerly Trust Engineers)",
    description:
      "Same team you trust—now with a broader vision and stronger foundation. Visit kafupeople.com.",
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
