import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";

const JosefinSans = Josefin_Sans({
  weight: ["300", "400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Rock / Rock True",
  description: "As melhores bandas de rock do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/notyf@3.0.0/notyf.min.css"
        />
      </head>
      <body className={JosefinSans.className}>
        <main className="flex max-md:flex-col">
          <Aside />
          {children}
        </main>
      </body>
    </html>
  );
}
