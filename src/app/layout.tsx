import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Starfield from "../components/Starfield";
//Technor Font
import localFont from "next/font/local";


const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Technor-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-technor",
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
  title: "Pranav Deshpande",
  description: "Portfolio of Pranav Deshpande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${myFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Starfield />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
