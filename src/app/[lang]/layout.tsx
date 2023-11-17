import "@/styles/global.scss";
import  type {ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "@/providers";
import { i18n } from "@/config/i18n.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Davi Fernandes - Front end Developer",
  description: "My portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  }
}

export function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ( { lang }))
  return languages;
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={`${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
