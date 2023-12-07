import styles from "./styles.module.scss";

import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

import { Icon } from "..";
import { footerIconsMock } from "./mock";
import { getYear } from "@/utils";
import { useParams, usePathname } from "next/navigation";

export const Footer = ({ params }: { params: { lang: Locale } }) => {
  const { dictionary: dict, interpolation } = getDictionaryUseClient(
    params?.lang ?? "pt-BR"
  );

  const { lang } = useParams();
  const pathname = usePathname();

  const getPathname = (lng: string) => {
    const path = pathname.split("/" + lang).join("");
    return "/" + lng + path;
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <h2>
          {dict.footer.title_part1}
          <span className="primary">{dict.footer.title_part2}</span>
        </h2>
        <p>{dict.footer.desc}</p>
        <div className={styles.icons}>
          {footerIconsMock.map((social) => {
            const ImageIcon = social.icon;

            const desc =
              social.desc === "projects"
                ? dict.navbar.projects
                : social.desc === "aboutme"
                ? dict.navbar.about
                : social.desc;

            const link = social.link ? social.link : `/${lang}/${social.desc}`;

            const blanket = social.link ? { target: "_blank" } : {};

            return (
              <Link
                href={link}
                key={social.desc}
                className={styles.iconDiv}
                {...blanket}>
                <Icon size="small">
                  <ImageIcon />
                </Icon>
                <p>{desc}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.copyright}>
          <p>
            {interpolation(dict.footer["copyright {{year}}"], {
              year: getYear(),
            })}
          </p>
          <div className={styles.copyrightIcons}>
            <Link href="https://github.com/davimgfx" target="_blank">
              <FaGithub className={styles.icon} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/davifncosta/"
              target="_blank">
              <IoLogoLinkedin className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
