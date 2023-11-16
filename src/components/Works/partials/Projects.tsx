import styles from "../styles.module.scss";
import Image from "next/image";
import { projectsMock } from "./mock";
import { aumigos, pulseGym, cryptoNeves } from "@/assets/projects";

export const Projects = () => {
  return (
    <>
      {projectsMock.map((project, index) => (
        <div key={index} className={styles.project}>
          <div className={styles.projectContainerImage}>
            <div className={styles.projectImage}>
              <Image
                src={project.src}
                alt={project.alt}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.projectDescription}>
            <h3>{project.alt}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              voluptate.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
