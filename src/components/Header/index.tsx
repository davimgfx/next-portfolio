"use client";
import { useContext } from "react";

import styles from "./styles.module.scss";

import { ThemeContext } from "@/context/ThemeContext";
import { useHeader } from "./useHeader";

import Link from "next/link";

import Image from "next/image";

import { Select } from "./partials/Select";

export const Header = () => {
  const { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu } =
    useHeader();

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href="../">&lt; Davimgfx / &gt;</Link>
        <ul className={closeMenu}>
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="./projects">Projects</Link>
          </li>
          <li>
            <Link href="./aboutme">About</Link>
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
