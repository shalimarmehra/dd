"use client";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { AuthProvider } from "./auth/AuthContext";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Tech Dossier",
//   description: "Tech & Evelopment Blog Website",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {loading ? (
          <Preloader />
        ) : (
          // {/* <ThemeProvider
          //   attribute="class"
          //   defaultTheme="light"
          //   enableSystem
          //   disableTransitionOnChange
          // ></ThemeProvider> */}
          <>
            <AuthProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </AuthProvider>
          </>
        )}
      </body>
    </html>
  );
}
