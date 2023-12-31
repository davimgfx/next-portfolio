import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { projectsMock } from "./mock";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
interface ProjectsProps {
  quantity: number;
  params: {
    lang: Locale;
  };
}

type ProjectMappings = {
  [key: string]: string;
};

export const Projects = ({ quantity, params }: ProjectsProps) => {
  const visibleProjects = projectsMock.slice(0, quantity);

  const { dictionary: dict } = getDictionaryUseClient(params?.lang ?? "pt-BR");

  const { projects } = dict;

  const projectMappings: ProjectMappings = {
    aumigos: projects.aumigos,
    cryptoNeves: projects.cryptoNeves,
    pulseGym: projects.pulseGym,
    hoobank: projects.hoobank,
    amazonClone: projects.amazonClone,
    todo: projects.todo,
  };

  return (
    <>
      {visibleProjects.map((project) => {
        const projectInfo = projectMappings[project.hoverEffect];

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
              <div className={styles.projectTitle}>
                <h3>{project.alt}</h3>
                <div className={styles.icons}>
                  <Link
                    href={project.github}
                    target="_blank"
                    className={styles.iconDiv}>
                    <FaGithub className={styles.icon} />
                  </Link>
                  {project.href && (
                    <Link
                      href={project.href}
                      target="_blank"
                      className={styles.iconDiv}>
                      <MdOutlineWebAsset className={styles.icon} />
                    </Link>
                  )}
                </div>
              </div>
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
