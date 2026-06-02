import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansFlex = localFont({
  src: "../fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
  title: "Wandi",
  description: "Suwandi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${googleSansFlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
