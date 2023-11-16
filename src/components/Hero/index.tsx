import Link from "next/link";
import styles from "./styles.module.scss";

import { Button } from "@/components";

export const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroDiv}>
        <h2 className={styles.heroH2Text}>
          <span className={styles.react}>REACT</span>{" "}
          <span className="primary">DEVELOPER</span>
        </h2>
        <div className={styles.bar} />
        <p className={styles.description}>
          Hey. Im Davi Fernandes. A Front-end developer with 8 months of
          experience.
        </p>
        <div className={styles.buttonDiv}>
          <Button>See my Projects</Button>
          <Link
            href="https://docs.google.com/document/d/1YNGs1RQKiroGaeuBQKoO_0fr1lUpJ_TMopWq3sp7NfE/edit?usp=sharing"
            target="_blank">
            <Button color="secondary" icon="download">
              See CV
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
