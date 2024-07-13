import { Kablammo, Rubik } from "next/font/google";
import localFont from "next/font/local";

export const kablammo = Kablammo({
  weight: "400",
  subsets: ["latin"],
});

export const rubik500 = Rubik({
  weight: "500",
  subsets: ["latin"],
});

export const rubik300 = Rubik({
  weight: "300",
  subsets: ["latin"],
});

export const PicNic = localFont({ src: "./PicNic-Regular.woff2" });

export const Quesmo = localFont({ src: "./quesmo.woff2" });
