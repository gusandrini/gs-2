import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/page";
import Rodape from "@/components/Rodape/page";

export const metadata: Metadata = {
  title: "Global Solution",
  description: "Criando projeto da GS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className=" text-black">
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
