import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { projectsMock } from "./mock";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
interface ProjectsProps {
  quantity: number;
  params: {
    lang: Locale;
  };
}

export const Projects = ({ quantity, params }: ProjectsProps) => {
  const visibleProjects = projectsMock.slice(0, quantity);

  const { dictionary: dict } = getDictionaryUseClient(params?.lang ?? "pt-BR");

  const { projects } = dict;

  return (
    <>
      {visibleProjects.map((project) => {
        const projectInfo =
          project.hoverEffect === "aumigos"
            ? projects.aumigos
            : project.hoverEffect === "cryptoNeves"
            ? projects.cryptoNeves
            : project.hoverEffect === "pulseGym"
            ? projects.pulseGym
            : project.hoverEffect === "hoobank"
            ? projects.hoobank
            : project.hoverEffect === "amazonClone" ? projects.amazonClone : projects.todo

        return (
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
              <p>{projectInfo}</p>
            </div>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <p key={tag} className={styles.tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
