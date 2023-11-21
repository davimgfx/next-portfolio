import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { projectsMock } from "./mock";

interface ProjectsProps {
  quantity: number;
}

export const Projects = ({ quantity }: ProjectsProps) => {
  const visibleProjects = projectsMock.slice(0, quantity);

  return (
    <>
      {visibleProjects.map((project) => (
        <div key={project.alt} className={styles.project}>
          <div className={styles.projectContainerImage}>
            <Link href={project.href} target="_blank">
              <div className={styles.projectImage}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  className={`${styles.image} ${styles[project.hoverEffect]}`}
                />
              </div>
            </Link>
          </div>
          <div className={styles.projectDescription}>
            <h3>{project.alt}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              voluptate.
            </p>
          </div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <p key={tag} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
