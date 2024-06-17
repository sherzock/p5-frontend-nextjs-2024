import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library of Videogames",
  description: "by Jacobo Galofre",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body></body>
    </html>
  );
};