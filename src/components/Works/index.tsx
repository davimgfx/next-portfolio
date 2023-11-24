import styles from "./styles.module.scss";

import { Button } from "@/components";
import { Projects } from "./partials/Projects";
import Link from "next/link";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export const Works = ({ params } : {params: {lang: Locale}}) => {
  const { dictionary : dict} = getDictionaryUseClient(params?.lang ?? 'pt-BR');

  return (
    <section className={styles.section} id="works">
      <div className={styles.wrapper}>
        <h2>
          {dict.works.title_part1}<span className="primary">{dict.works.title_part2}</span>
        </h2>
        <p className={styles.description}>
        {dict.works.desc}
        </p>
        <Link href="./projects">
          <Button>{dict.works.button}</Button>
        </Link>

        <div className={styles.projects}>
          <Projects quantity={3}/>
        </div>
      </div>
    </section>
  );
};
