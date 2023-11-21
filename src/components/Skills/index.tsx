import styles from "./styles.module.scss";

import { Icon } from "@/components";

import { davi_photo } from "@/assets/profile_photos";

import Image from "next/image";

import { iconsSkillsMock } from "./mock";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export const Skills = ({ params } : {params: {lang: Locale}}) => {
  const { dictionary : dict} = getDictionaryUseClient(params?.lang ?? 'pt-BR');

  return (
    <section className={styles.skills} id="skills">
      <main className={styles.wrapper}>
        <div>
          <h2>Tech <span className="primary">Stack</span></h2>
          <p className={styles.description}>{dict.skills.desc}</p>
          <div className={styles.icons}>
            {iconsSkillsMock.map((icon) => (
              <Icon name={icon.name} key={icon.name}>
                <Image src={icon.icon.src} alt={icon.icon.alt} />
              </Icon>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.profile_div}>
            <div className={styles.purple_circle} />
            <div className={styles.cylinder_purple} />
            <Image src={davi_photo} className={styles.profile_image} alt="profile_photo" />
          </div>
        </div>
      </main>
    </section>
  );
};
