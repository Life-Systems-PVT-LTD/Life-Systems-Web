import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer/Footer";

import Navbar from "../components/NavBar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Life Systems",
  description: "Begining Of The New Life",
  icons: {

    icon: "logos/life_systems_logo.png",

  }

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div>

          <Navbar />

        </div>

        {children}

        <div className="mt-16">

          <Footer />

        </div>

      </body>

    </html>

  );

}
