import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type IconSizes = "medium" | "large";

interface IconProps {
  children: ReactNode;
  size: IconSizes;
  className?: string; // Nova propriedade para a classe
}

export const Icon = ({ size = "large", children, className }: IconProps) => {
  return (
    <div className={`${styles.iconDiv} ${className}`}>
      {React.cloneElement(children as React.ReactElement<any>, {
        className: `${styles.iconChild} ${(children as React.ReactElement<any>).props.className}`,
      })}
    </div>
  );
};
