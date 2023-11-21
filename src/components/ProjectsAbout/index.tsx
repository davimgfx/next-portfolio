import { Locale } from "@/config/i18n.config";

import styles from "./styles.module.scss";

import { Projects } from "../Works/partials/Projects";

export const ProjectsAbout = ({ params }: { params: { lang: Locale } }) => {
  return (
    <section className={styles.projectsAbout} id="projects">
      <h2>
        My <span className="primary">Projects</span>
      </h2>

      <div className={styles.options}>
        <h3 className={styles.option}>All projects</h3>
        <h3 className={styles.option}>React</h3>
        <h3 className={styles.option}>FullStack</h3>
      </div>

      <div className={styles.projects}>
        <Projects quantity={3} />
      </div>
    </section>
  );
};
