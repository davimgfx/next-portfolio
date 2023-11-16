import type { ReactNode } from "react";

import { IoMdEye } from "react-icons/io";

import styles from "./styles.module.scss";

type ButtonColors = "primary" | "secondary";

type ButtonIcon = "download";

interface ButtonProps {
  children: ReactNode;
  color?: ButtonColors;
  icon?: ButtonIcon;
}

export const Button = ({ children, color = "primary", icon }: ButtonProps) => {
  const allStyles =
    color === "primary"
      ? `${styles.button} ${styles.primary}`
      : `${styles.button} ${styles.secondary}`;

  const iconComponent =
    icon === "download" ? <IoMdEye className={styles.icon} /> : "";

  const iconComponentStyle = icon === "download" ? styles.buttonIcon : "";

  return (
    <button className={`${allStyles} ${iconComponentStyle}`}>
      <span>{children}</span> {iconComponent}
    </button>
  );
};
