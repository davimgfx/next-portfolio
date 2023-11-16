import Image from "next/image";
import styles from "./styles.module.scss";

import { Button } from "@/components";
import { aumigos, pulseGym, cryptoNeves } from "@/assets/projects";

import { Projects } from "./partials/Projects";
export const Works = () => {
  return (
    <section className={styles.section} id="works">
      <div className={styles.wrapper}>
        <h2>
          My recent <span className="primary">works</span>
        </h2>
        <p className={styles.description}>
          Here you can see my last works, if you want to see more:
        </p>
        <Button>All my projects</Button>

        <div className={styles.projects}>
          <Projects />
        </div>
      </div>
    </section>
  );
};
