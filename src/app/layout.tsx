import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Chantal Williams",
  description: "animator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
