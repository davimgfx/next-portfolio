"use client";

import { useContext } from "react";

import { Header, Hero, Skills, Works, Footer } from "../../components";

import { ThemeContext } from "@/context/ThemeContext";

import { Locale } from "@/config/i18n.config";

export default function Home({ params } : {params: {lang: Locale}}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme}>
      <Header params={{ lang: params.lang }}/>
      <Hero params={{ lang: params.lang }}/>
      <Skills params={{ lang: params.lang }}/>
      <Works params={{ lang: params.lang }}/>
      <Footer params={{ lang: params.lang }}/>
    </div>
  );
}
