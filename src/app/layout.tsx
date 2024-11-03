import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Regular.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | shawilly",
    default: "shawilly",
  },
  description: "Experience Software Engineer",
  metadataBase: new URL("https://shawilly.dev/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
