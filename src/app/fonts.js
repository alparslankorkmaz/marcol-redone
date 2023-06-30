import { Archivo_Black, Archivo } from "next/font/google";

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
});
