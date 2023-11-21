import Link from "next/link";
import styles from "./styles.module.scss";

import { Button } from "@/components";
import { Locale } from "@/config/i18n.config";

import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { getExperienceDate } from "@/utils";

export const Hero = ({ params } : {params: {lang: Locale}}) => {
  const { dictionary : dict , interpolation} = getDictionaryUseClient(params?.lang ?? 'pt-BR');
  
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroDiv}>
        <h2 className={styles.heroH2Text}>
          <span className={styles.react}>REACT</span>{" "}
          <span className="primary">DEVELOPER</span>
        </h2>
        <div className={styles.bar} />
        <p className={styles.description}>
          {interpolation(dict.hero["desc {{time}}"], { time: getExperienceDate(params.lang)})}
        </p>
        <div className={styles.buttonDiv}>
          <Link href="#works">
            <Button>{dict.hero.buttons[0]}</Button>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1YNGs1RQKiroGaeuBQKoO_0fr1lUpJ_TMopWq3sp7NfE/edit?usp=sharing"
            target="_blank">
            <Button color="secondary" icon="see">
              {dict.hero.buttons[1]}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
