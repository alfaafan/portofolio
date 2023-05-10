import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio | Alfaafan Yusufa Achmad",
  description: "My Portofolio and Resume Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
