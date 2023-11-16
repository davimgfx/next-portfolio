import { useContext, type ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/global.scss";
import { Providers } from "@/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Davi Fernandes - Front end Developer",
  description: "My portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
