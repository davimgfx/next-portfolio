"use client"
import React, { useContext } from "react";

import { Locale } from "../../../config/i18n.config";
import { Header, ProjectsAbout } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";


const Projects = ({ params }: { params: { lang: Locale } }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Header params={{ lang: params.lang }}/>
      <ProjectsAbout params={{ lang: params.lang }}/>
    </div>
  );
};

export default Projects;
