/*загальний layout сайту*/
import { Geist, Geist_Mono, Lobster_Two, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import { ChildrenProps } from "@/types/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster_Two({
   weight: "400",
  variable: "--font-lobster",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700"], // звичайний і жирний
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Майстерня мініодягу для ляльок",
  description: "Сайт майстрині мініодягу для ляльок",
};



export default function RootLayout({children}:ChildrenProps) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${lobster.variable} ${geistMono.variable} ${poppins.variable}`}>
        <Header />
        <main className={styles.container}>{children}</main>
      <Footer/>  
      </body>
      
    </html>
    
  );
}
