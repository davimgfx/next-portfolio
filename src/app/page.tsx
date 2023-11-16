"use client"

import { useContext } from "react";

import { Header, Hero, Skills, Works, Footer } from "../components";

import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <div id={theme}>
      <Header />
      <Hero />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}
