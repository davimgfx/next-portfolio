"use client";
import styles from "./styles.module.scss";

import { useContext } from "react";
import { useParams, usePathname } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";
import { useHeader } from "./useHeader";
import { Icon } from "..";
import Link from "next/link";

import { Flag, Select } from "./partials";

import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { locales } from "./helpers/locales";
import { Locale } from "@/config/i18n.config";

export const Header = ({ params }: { params: { lang: Locale } }) => {
  const { toggleBooleanState, iconMenu, iconTheme, closeMenu } = useHeader();

  const { theme, setTheme } = useContext(ThemeContext);

  const { lang } = useParams();
  const pathname = usePathname();

  const getPathname = (lng: string) => {
    const path = pathname.split("/" + lang).join("");
    return "/" + lng + path;
  };

  const { dictionary: dict } = getDictionaryUseClient(params?.lang ?? "pt-BR");

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href="../">&lt; Davimgfx / &gt;</Link>
        <ul className={closeMenu}>
          <li>
            <Link href="./">{dict.navbar.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/projects`}>{dict.navbar.projects}</Link>
          </li>
          <li>
            <Link href={`/${lang}/aboutme`}>{dict.navbar.about}</Link>
          </li>
          <li>
            {locales
              .filter(({ code }) => code !== lang)
              .map(({ code, flag, country }) => (
                <Link
                  href={getPathname(code)}
                  key={`${code}-${country}`}
                  className={styles.modalItem}>
                  <div className={styles.flagMobile}>
                    <Flag src={flag.src} alt={flag.alt} />
                  </div>
                </Link>
              ))}
          </li>
        </ul>
        <div className={styles.flagAndIconTheme}>
          <Icon
            size="medium"
            onClick={() => {
              toggleBooleanState("isDark");
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}>
            {iconTheme}
          </Icon>

          <Select />
          <Icon
            size="medium"
            hamburger={true}
            onClick={() => toggleBooleanState("isMenuOpen")}>
            {iconMenu}
          </Icon>
        </div>
      </nav>
    </header>
  );
};
