"use client";
import { useContext } from "react";

import styles from "./styles.module.scss";

import { ThemeContext } from "@/context/ThemeContext";
import { useHeader } from "./useHeader";

import Link from "next/link";

import Image from "next/image";

import { Select } from "./partials/Select";

import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export const Header = ({ params } : {params: {lang: Locale}}) => {
  const { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu } =
    useHeader();

  const { theme, setTheme } = useContext(ThemeContext);

  const { dictionary: dict } = getDictionaryUseClient(params?.lang ?? 'pt-BR');

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href="../">&lt; Davimgfx / &gt;</Link>
        <ul className={closeMenu}>
          <li>
            <Link href="./">{dict && dict?.navbar?.home}</Link>
          </li>
          <li>
            <Link href="./projects">{dict?.navbar?.projects}</Link>
          </li>
          <li>
            <Link href="./aboutme">{dict?.navbar?.about}</Link>
          </li>
          <li>
            <Image
              src={flag}
              width={45}
              alt="brazilian-flag"
              className={styles.flagMobile}
              onClick={() => toggleBooleanState("isBrazilianFlag")}
            />
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
