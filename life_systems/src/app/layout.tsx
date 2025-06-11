import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Client_Testimonials from "@/component/client_testimonials/Client_Testimonials";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Head from "next/head";


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
  description: "Beginning Of The New Life",
  icons: {

    icon: "logos/life_systems_logo.png",

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head> */}

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {children}

        < Client_Testimonials />

      </body>
      
    </html>
  );
}
