import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apple",
  description: "Landing Page Apple criada com Next.js e Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
