import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoplixy — Premium Shopping Experience",
  description: "Discover premium gaming gear, electronics, fashion and more at Shoplixy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
