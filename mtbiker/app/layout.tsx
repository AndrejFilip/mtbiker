"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./ Components/Header/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Footer } from "./ Components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider {...{ client: queryClient }}>
          <Header />
          <main {...{ className: "w-full h-full bg-white-200" }}>
            {children}
          </main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
