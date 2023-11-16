import styles from "./styles.module.scss";

import { FaWhatsapp } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <section className={styles.footer} id="footer">
      <h2>
        Got a project in <span className="primary">mind?</span>
      </h2>
      <p>Don’t be shy! Hit me up!</p>
      <div className={styles.icons}>
        <div className={styles.iconDiv}>
          <IoPersonSharp />
          <p>About me</p>
        </div>
        <div className={styles.iconDiv}>
          <GoProjectSymlink />
          <p>Projects</p>
        </div>
        <div className={styles.iconDiv}>
          <FaWhatsapp />
          <p>71 - 99633-8832</p>
        </div>
      </div>
    </section>
  );
};
