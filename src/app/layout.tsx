import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai SaaS Builder",
  description: "Build AI SaaS products with ease using our platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={twMerge(
          inter.className,
          " h-full w-full bg-website-black antialiased"
        )}>
            <div className="w-full ">
              <Navbar/>
              </div>
              <div className="max-w-7xl m-auto w-full text-white  ">
          {children}
        </div>
        </body>
    </html>
  );
}
