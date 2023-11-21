"use client";
import { useContext } from "react";
import { useParams, usePathname } from "next/navigation";
import styles from "./styles.module.scss";

import { ThemeContext } from "@/context/ThemeContext";
import { useHeader } from "./useHeader";

import Link from "next/link";

import Image from "next/image";

import { Select } from "./partials/Select";

import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { locales } from "./helpers/locales";
import { Flag } from "./partials/Flag";

export const Header = ({ params }: { params: { lang: Locale } }) => {
  const { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu } =
    useHeader();

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
          <div
            className={styles.iconThemeDiv}
            onClick={() => {
              toggleBooleanState("isDark");
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}>
            {iconTheme}
          </div>

          <Select />
          <div
            className={styles.iconHamburgerDiv}
            onClick={() => toggleBooleanState("isMenuOpen")}>
            {iconMenu}
          </div>
        </div>
      </nav>
    </header>
  );
};
