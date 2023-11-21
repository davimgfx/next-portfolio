import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import styles from "./styles.module.scss";

import { GoProjectSymlink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { Locale } from "@/config/i18n.config";

import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
import { getYear } from "@/utils";

export const Footer = ({ params }: { params: { lang: Locale } }) => {
  const { dictionary: dict, interpolation } = getDictionaryUseClient(
    params?.lang ?? "pt-BR"
  );

  return (
    <section className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <h2>
          {dict.footer.title_part1}
          <span className="primary">{dict.footer.title_part2}</span>
        </h2>
        <p>{dict.footer.desc}</p>
        <div className={styles.icons}>
          <div className={styles.iconDiv}>
            <div className={styles.iconCircle}>
              <GoProjectSymlink className={styles.icon}/>
            </div>
            <p>{dict.navbar.projects}</p>
          </div>
          <div className={styles.iconDiv}>
            <div className={styles.iconCircle}>
              <IoPersonSharp className={styles.icon} />
            </div>
            <p>{dict.navbar.about}</p>
          </div>
          <div className={styles.iconDiv}>
            <div className={styles.iconCircle}>
              <FaWhatsapp className={styles.icon}/>
            </div>
            <p>(+55) 71 - 99633-8832</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            {interpolation(dict.footer["copyright {{year}}"], {
              year: getYear(),
            })}
          </p>
          <div className={styles.copyrightIcons}>
            <Link href="https://github.com/davimgfx" target="_blanket">
              <FaGithub className={styles.icon} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/davifncosta/"
              target="_blanket">
              <IoLogoLinkedin className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
