import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyVee",
  description:
    "Hy-Vee is synonymous with quality, variety, convenience, healthy lifestyles, culinary expertise and superior customer service. Its slogan, A Helpful Smile in Every Aisle, expresses the foundation of the company's operating philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
