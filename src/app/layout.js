import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  description: "Marcol manufactures innovative plastic products for diverse industries, tailored to operate in various environments. Based in Bristol, our facilities utilise advanced welding and fusion technology for large-scale projects and offer short-run batch production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo_black.variable} ${archivo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
