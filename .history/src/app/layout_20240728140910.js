import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Inter, Noto_Sans } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import { ProgressProvider } from "@/context/ProgressContext";
import "@ionic/react/css/core.css"; // Import CSS chính của Ionic

import Head from "next/head";

const inter = Inter({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"], // Chỉ định các trọng lượng font mong muốn ở đây
});

export const metadata = {
  title: "Rimdasilva - EZ Coding",
  description: "Rimdasilva - EZ Coding",
  // icons: {
  //   icon: [
  //     {
  //       url: "/favicon.ico", // /public path
  //       href: "/favicon.ico", // /public path
  //     },
  //   ],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <ProgressProvider>
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                  </div>
                  <Footer />
                </div>
              </ProgressProvider>
            </ThemeProvider>
          </ThemeContextProvider>
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </AuthProvider>
      </body>
    </html>
  );
}
