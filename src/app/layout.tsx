import type { Metadata } from "next";
import { GlobalStyle } from "./styles";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./style.module.css";

export const metadata: Metadata = {
  title: "DM - Portfolio",
  description: "Portfolio de desenvolvimento de aplicações diversas",
};

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>
        <GlobalStyle />
        <div>{children}</div>
      </body>
    </html>
  );
}
