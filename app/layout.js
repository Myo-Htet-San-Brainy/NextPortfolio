import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/Navbar";
import FooterSection from "./ui/FooterSection";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
