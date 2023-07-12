import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Movie Database",
  description: "IMDB clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-900"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
