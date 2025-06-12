import type { Metadata } from "next";

import { Geist, Geist_Mono, Roboto } from "next/font/google";

import "./globals.css";

import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from "../components/Footer/Footer";

import Navbar from "../components/NavBar/navbar";

const roboto = Roboto({

  subsets: ["latin"],
  variable: "--font-roboto",

});

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
      
      <body className={`${roboto.variable} ${geistMono.variable} antialiased`}>

        <div>

          <Navbar />

        </div>

        {children}

        <div className="mt-14">

          <Footer />

        </div>

      </body>

    </html>

  );

}
