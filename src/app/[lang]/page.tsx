"use client";

import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client"

import { useContext } from "react";

import { Header, Hero, Skills, Works, Footer } from "../../components";

import { ThemeContext } from "@/context/ThemeContext";
import { Locale } from "@/config/i18n.config";

export default function Home({ params } : {params: {lang: Locale}}) {
  const { theme } = useContext(ThemeContext);

  const dict = getDictionaryUseClient(params.lang)

  return (
    <div id={theme}>
      <Header />
      <Hero />
      <Skills />
      <Works />
      <Footer />
      <p>{dict.site.name}</p>
    </div>
  );
}
