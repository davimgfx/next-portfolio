"use client";
import React, { useContext } from "react";
import { Locale } from "../../../config/i18n.config";
import { Header } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { About } from "@/components";

const AboutMe = ({ params }: { params: { lang: Locale } }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme}>
      <Header params={{ lang: params.lang }} />
      <About params={{ lang: params.lang }} />
    </div>
  );
};

export default AboutMe;
