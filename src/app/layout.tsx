import Footer from '../components/footer'
import type { Metadata } from "next";
import Navigation from '../components/navigation';
import { Inter } from "next/font/google";
import "./globals.css";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const inter = Inter({ subsets: ["latin"] });
const NAV_MENU_QUERY = `*[_type == "navigationList"] {navArray[]->}`;

export const metadata: Metadata = {
  title: "Chih-Ho's World",
  description: "Welcome to my personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navMenu = await sanityFetch<SanityDocument[]>({query: NAV_MENU_QUERY});

  return (
    <html lang="en">
      <body className="h-screen flex flex-col" >
        {/* Layout UI */}
        <Navigation navArray={navMenu[0].navArray}/>
        <main className="flex-1 bg-gray-100 p-10 gap-12 overflow-y-auto" >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
