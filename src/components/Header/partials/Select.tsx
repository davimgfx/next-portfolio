import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { locales } from "../helpers/locales";
import { Flag } from "./Flag";

export const Select = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { lang } = useParams();
  const pathname = usePathname();
  const selectRef = useRef<HTMLDivElement | null>(null);(null);

  const getPathname = (lng: string) => {
    const path = pathname.split("/" + lang).join("");
    return "/" + lng + path;
  };

  const closeSelect = () => {
    setIsSelectOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        closeSelect();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

  
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={styles.select}
      onClick={() => {
        setIsSelectOpen(!isSelectOpen);
      }}
    >
      <div className={styles.selectDiv}>
        {locales.map(({ code, flag }) => {
          if (code !== lang) return null;

          return (
            <div className={styles.modalItem} key={code}>
              <Flag src={flag.src} alt={flag.alt} />
              <div className={styles.triangle} />
            </div>
          );
        })}
      </div>

      {isSelectOpen && (
        <div className={styles.modal}>
          {locales
            .filter(({ code }) => code !== lang)
            .map(({ code, flag, country }) => (
              <Link href={getPathname(code)} key={`${code}-${country}`}>
                <div className={styles.modalItem}>
                  <Flag src={flag.src} alt={flag.alt} />
                  <p>{country}</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
