import Footer from "@/components/Repeating/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Repeating/Navbar";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import { Metadata } from "next";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="pEMom7iH1FwSg6wn8sWpC6-2d-RLN0xCNnqjkAeE4AQ"
          />
          
          {/* Other meta tags can be added here if needed */}
        </Head>
        {/* <GoogleAnalytics GA_TRACKING_ID={"GTM-MTC3R6J3"} /> */}
        <GoogleTagManager gtmId="GTM-MTC3R6J3" />
        <body className={`${inter.className} relative overflow-x-hidden`}>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
