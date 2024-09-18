import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import MixesProvider from "@/contexts/mixesContext";

import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "homesessionz",
  description:
    "h/s are a series of events designed to make a connection between a music selector, a visual artist & a small audience.",
};

const getMixes = async (): Promise<Array<IMix>> => {
  try {
    const res = await fetch(
      `https://api.mixcloud.com/homesessionz/favorites/`,
      {
        cache: "force-cache",
      }
    );
    const { data: mixes } = await res.json();

    return mixes;
  } catch (error) {
    return [] as IMix[];
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mixes: IMix[] = await getMixes();

  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <MixesProvider mixes={mixes}>
          <Header />
          {children}
          <Footer />
        </MixesProvider>
      </body>
    </html>
  );
}
