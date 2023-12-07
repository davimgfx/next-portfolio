import styles from "../styles.module.scss";

import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMoon, IoMdClose } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

import { brazilFlag, EnglishFlag } from "@/assets/flags";
import { ThemeContext } from "@/context/ThemeContext";

type ToggleBooleanStateType = "isMenuOpen" | "isDark" | "isBrazilianFlag";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrazilianFlag, setIsBrazilianFlag] = useState(true);
  const { theme } = useContext(ThemeContext);

  const toggleBooleanState = (stateName: ToggleBooleanStateType) => {
    switch (stateName) {
      case "isMenuOpen":
        setIsMenuOpen((prev) => !prev);
        break;
      case "isBrazilianFlag":
        setIsBrazilianFlag((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const flag = isBrazilianFlag ? brazilFlag : EnglishFlag;

  const iconMenu = isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />;

  const iconTheme = theme === "dark" ? <MdLightMode /> : <IoIosMoon />;

  const closeMenu = isMenuOpen
    ? `${styles.section}`
    : `${styles.none} ${styles.section}`;

  return { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu };
};
