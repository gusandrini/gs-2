import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
