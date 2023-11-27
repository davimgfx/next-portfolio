"use client";
import { useContext } from "react";
import { Locale } from "../../../config/i18n.config";
import { Header, ScrollUp, About } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";


const AboutMe = ({ params }: { params: { lang: Locale } }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme}>
      <Header params={{ lang: params.lang }} />
      <About params={{ lang: params.lang }} />
      <ScrollUp />
    </div>
  );
};

export default AboutMe;
