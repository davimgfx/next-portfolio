import { Locale } from "@/config/i18n.config";

import styles from "./styles.module.scss";

import { Projects } from "../Works/partials/Projects";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export const ProjectsAbout = ({ params }: { params: { lang: Locale } }) => {
  const { dictionary, interpolation } = getDictionaryUseClient(
    params?.lang ?? "pt-BR"
  );

  const { projects } = dictionary;
  return (
    <section className={styles.projectsAbout} id="projects">
      <h2>
        {projects.title_part1} <span className="primary">{projects.title_part2}</span>
      </h2>

      <div className={styles.options}>
        <h3 className={styles.option}>All projects</h3>
        <h3 className={styles.option}>React</h3>
        <h3 className={styles.option}>FullStack</h3>
      </div>

      <div className={styles.projects}>
        <Projects quantity={6} params={params}/>
      </div>
    </section>
  );
};
