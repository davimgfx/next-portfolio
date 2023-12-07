import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type SizeProps = "small" | "medium" | "large";
interface IconProps {
  children: ReactNode;
  name?: string;
  size?: SizeProps;
  onClick?: () => void;
  fixed?: boolean;
  hamburger?: boolean;
}

export const Icon = ({ children, name, size, fixed = false, onClick, hamburger = false }: IconProps) => {
  const classDiv = fixed ? `scrollDiv` : `${size}IconDiv`;
  const classChildren = fixed ?`scroll` : `${size}Icon`;
  const classHamburger = hamburger ? `${styles.iconHamburger}` : ``;

  return (
    children && (
      <div className={styles.wrapper}>
        <div className={`${styles[classDiv]} ${classHamburger}`} onClick={onClick}>
          {React.cloneElement(children as React.ReactElement<any>, {
            className: `${styles[classChildren]} ${
              (children as React.ReactElement<any>).props.className
            }`,
          })}
        </div>
        {name && <p>{name}</p>}
      </div>
    )
  );
};
