"use client"
import React, { useContext } from "react";

import { Locale } from "../../../config/i18n.config";
import { Header } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";

const Projects = ({ params }: { params: { lang: Locale } }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Header />
      <h2>page</h2>
    </div>
  );
};

export default Projects;
