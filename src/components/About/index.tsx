import styles from "./styles.module.scss";
import Image from "next/image";
import { union_developers, freelancer } from "@/assets/companies";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { getMyAge } from "@/utils";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

export const About = ({ params } : {params: {lang: Locale}}) => {

  const { dictionary , interpolation} = getDictionaryUseClient(params?.lang ?? 'pt-BR');

  const { about } = dictionary

  return (
    <section className={styles.about} id="about">
      <h2>
      {about.title_part1} <span className="primary">{about.title_part2}</span>
      </h2>
      <main className={styles.main}>
        <div className={styles.aboutInfos}>
          <h3>{about.subtitle}</h3>
          <p>
          {interpolation(about["paragraph1 {{age}}"], { age: getMyAge()})}
          </p>
          <p>
            {about.paragraph2}
          </p>
          <p>
          {about.paragraph3}
          </p>
          <h3>{about.subtitle2}</h3>
          <div className={styles.icons}>
            <div className={styles.iconDiv}>
              <FaGithub className={styles.icon} />
            </div>
            <div className={styles.iconDiv}>
              <FaLinkedin className={styles.icon} />
            </div>
            <div className={styles.iconDiv}>
              <FaInstagram className={styles.icon} />
            </div>
            <div className={styles.iconDiv}>
              <FaWhatsapp className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.companies}>
          <h3 className={styles.titleSection}>
          {about.subtitle3_part1} <span className="primary">{about.subtitle3_part2}</span>
          </h3>
          <div className={styles.company}>
            <Image
              src={union_developers}
              alt="union_developers"
              className={styles.company_logo}
            />
            <div>
              <div className={styles.title}>
                <h3>Front end Developer</h3>
                <p>Union Developers</p>
              </div>
              <div className={styles.subtitle}>
                <p>Sep 2023 -&gt; Dec 2023</p>
                <p>Remoto</p>
              </div>

              <p className={styles.goalsAchieved}>
                Desenvolvimento junto com a equipe, de uma landing page,
                aplicando o TDD, para uma empresa de serviços de telefones.
                Desenvolvi o projeto estabelecido com metodologias Ágeis, Scrum,
                TDD e mobile first.
              </p>

              <p className={styles.techs}>
                Tecnologias: Next.js | Sass | TypeScript | StoryBook | Jest |
                React Testing Library | GraphQl | Apollo Client
              </p>
            </div>
          </div>
          <div className={styles.company}>
            <Image
              src={freelancer}
              alt="union_developers"
              className={styles.company_logo}
            />
            <div>
              <div className={styles.title}>
                <h3>Front end Developer</h3>
                <p>Freelance</p>
              </div>
              <div className={styles.subtitle}>
                <p>Jan 2023 -&gt; Present</p>
                <p>Remoto</p>
              </div>

              <p className={styles.goalsAchieved}>
                Desenvolvimento de aplicações web responsivas garantindo uma
                experiência otimizada para os usuários em diferentes
                dispositivos. Foco em qualidade, prazo e respeito pelo cliente.
              </p>

              <p className={styles.techs}>
                {about.tech}: Next.js | React | Sass | TypeScript | Firebase |
                Node
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
