import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface FlagProps {
  src: StaticImageData;
  alt: string;
}

export const Flag = ({ src, alt }: FlagProps) => (
  <Image src={src} width={45} alt={alt} className={styles.flag} />
);
