import localFont from "next/font/local";

export namespace Fonts {
  export const PicNic = localFont({ src: "./PicNic-Regular.woff2" });

  export const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });

  export const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
}
