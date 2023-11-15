import styles from "../styles.module.scss";

import { useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMoon, IoMdClose } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

import brazilFlag from "../../../assets/brazil-flag.png";
import EnglishFlag from "../../../assets/united-kingdom-flag.png";

type ToggleBooleanStateType = "isMenuOpen" | "isDark" | "isBrazilianFlag";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isBrazilianFlag, setIsBrazilianFlag] = useState(true);

  const toggleBooleanState = useCallback(
    (stateName: ToggleBooleanStateType) => () => {
      switch (stateName) {
        case "isMenuOpen":
          setIsMenuOpen((prev) => !prev);
          break;
        case "isDark":
          setIsDark((prev) => !prev);
          break;
        case "isBrazilianFlag":
          setIsBrazilianFlag((prev) => !prev);
          break;
        default:
          break;
      }
    },
    []
  );

  const flag = isBrazilianFlag ? brazilFlag : EnglishFlag;

  const iconMenu = isMenuOpen ? (
    <IoMdClose className={styles.iconHamburger} />
  ) : (
    <GiHamburgerMenu className={styles.iconHamburger} />
  );

  const iconTheme = isDark ? (
    <MdLightMode className={styles.iconTheme} />
  ) : (
    <IoIosMoon className={styles.iconTheme} />
  );

  const closeMenu = isMenuOpen
    ? `${styles.section}`
    : `${styles.none} ${styles.section}`;

  return { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu };
};
