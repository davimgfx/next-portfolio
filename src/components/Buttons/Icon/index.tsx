import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconProps {
  children: ReactNode;
  name: string;
}

export const Icon = ({ children, name }: IconProps) => {
  return (
    children && (
      <div className={styles.wrapper}>
        <div className={styles.iconDiv}>
          {React.cloneElement(children as React.ReactElement<any>, {
            className: `${styles.iconChild} ${
              (children as React.ReactElement<any>).props.className
            }`,
          })}
        </div>
        {name && <p>{name}</p>}
      </div>
    )
  );
};
