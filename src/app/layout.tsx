import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hospital Assistant",
  description: "Hospital WhatsApp Companion App",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import GlobalMenuButton from '@/components/GlobalMenuButton';

// ... other imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="mobile-container relative flex flex-col">
           {/* Header placeholder - will be a component */}
          {children}
          <GlobalMenuButton />
        </div>
      </body>
    </html>
   );
}
