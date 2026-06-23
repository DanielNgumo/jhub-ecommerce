import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "./components/AosProvider";
import Navbar from "./features/landing-page/components/Navbar";
import Footer from "./features/landing-page/components/Footer";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcommercePro - Premium Products & Best Deals",
  description: "Discover quality products with fast shipping, secure checkout, and 24/7 customer support. Shop now and get exclusive deals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <AosProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AosProvider>
        </CartProvider>
      </body>
    </html>
  );
}
