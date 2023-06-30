import "./globals.css";
import Header from "@/components/Header";
import { Archivo_Black, Archivo } from "next/font/google";

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata = {
  title: "Marcol Plastics",
  description: "Marcol Fabrications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo_black.variable} ${archivo.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
