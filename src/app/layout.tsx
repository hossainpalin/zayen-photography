import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const playFair = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Zayen Photography",
    default: "Zayen Photography"
  },
  description: "Zayen Photography is a photography studio based in New York."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playFair.className}>{children}</body>
    </html>
  );
}
