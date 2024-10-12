import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/Navbar";
import FooterSection from "./ui/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const metadata = {
  title: "Brainy",
  description: "The only way to do great work is to love what you do.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-300`}
      >
        <ToastContainer position="top-center" />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
