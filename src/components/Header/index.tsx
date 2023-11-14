import styles from "./styles.module.scss";

import Image from "next/image";

import { useHeader } from "./useHeader";

export const Header = () => {
  const { flag, toggleBooleanState, iconMenu, iconTheme, closeMenu } =
    useHeader();

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div>&lt; Davimgfx / &gt;</div>
        <ul className={closeMenu}>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>
            <Image
              src={flag}
              width={45}
              alt="brazilian-flag"
              className={styles.flagMobile}
              onClick={toggleBooleanState("isBrazilianFlag")}
            />
          </li>
        </ul>
        <div className={styles.flagAndIconTheme}>
          <div
            className={styles.iconThemeDiv}
            onClick={toggleBooleanState("isDark")}>
            {iconTheme}
          </div>
          <Image
            src={flag}
            width={45}
            alt="brazilian-flag"
            onClick={toggleBooleanState("isBrazilianFlag")}
            className={styles.flag}
          />
          <div
            className={styles.iconHamburgerDiv}
            onClick={toggleBooleanState("isMenuOpen")}>
            {iconMenu}
          </div>
        </div>
      </nav>
    </header>
  );
};
