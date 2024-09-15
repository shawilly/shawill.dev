import type { Metadata } from "next";
import { Fonts } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "shawilly",
  description: "Experienced Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fonts.geistSans.variable} ${Fonts.geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
