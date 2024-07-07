import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rumo Recife",
  description: "Viva essa experiência",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
