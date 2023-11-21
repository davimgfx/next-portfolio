import styles from "./styles.module.scss";
import Image from "next/image";
import { getMyAge } from "@/utils";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import { companiesMock, socialMedias } from "./mock";
import Link from "next/link";

export const About = ({ params }: { params: { lang: Locale } }) => {
  const { dictionary, interpolation } = getDictionaryUseClient(
    params?.lang ?? "pt-BR"
  );

  const { about } = dictionary;

  return (
    <section className={styles.about} id="about">
      <h2>
        {about.title_part1} <span className="primary">{about.title_part2}</span>
      </h2>
      <main className={styles.main}>
        <div className={styles.aboutInfos}>
          <h3>{about.subtitle}</h3>
          <p>
            {interpolation(about["paragraph1 {{age}}"], { age: getMyAge() })}
          </p>
          <p>{about.paragraph2}</p>
          <p>{about.paragraph3}</p>
          <h3>{about.subtitle2}</h3>
          <div className={styles.icons}>
            {socialMedias.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  href={social.link}
                  target="_blank"
                  className={styles.iconDiv}
                  key={social.link}>
                  <Icon className={styles.icon} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.companies}>
          <h3 className={styles.titleSection}>
            {about.subtitle3_part1}
            <span className="primary">{about.subtitle3_part2}</span>
          </h3>
          {companiesMock.map((company) => {
            const companyInfos =
              company.name === "union"
                ? about.jobs.union
                : about.jobs.freelance;

            return (
              <div className={styles.company} key={company.alt}>
                <Image
                  src={company.src}
                  alt={company.alt}
                  className={styles.company_logo}
                />
                <div>
                  <div className={styles.title}>
                    <h3>{companyInfos.position}</h3>
                    <p>{company.alt}</p>
                  </div>
                  <div className={styles.subtitle}>
                    <p>{companyInfos.date}</p>
                    <p>{companyInfos.local}</p>
                  </div>

                  <p className={styles.goalsAchieved}>{companyInfos.goals}</p>

                  <p className={styles.techs}>
                    {about.tech} {company.techs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};
