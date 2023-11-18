"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import styles from "./styles.module.scss";

import { locales } from "../helpers/locales";

import { useHeader } from "../useHeader";

export const Select = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { lang } = useParams();
  const pathname = usePathname();
  const { toggleBooleanState } = useHeader();
  const selectRef = useRef(null);

  const getPathname = (lng: string) => {
    const path = pathname.split("/" + lang).join("");
    return "/" + lng + path;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div
      className={styles.select}
      onClick={() => {
        setIsSelectOpen(!isSelectOpen);
      }}
      ref={selectRef}>
      <div className={styles.selectDiv}>
        {locales.map((lng) => {
          if (lng.code !== lang) return null;

          return (
            <div className={styles.modalItem} key={lang}>
              <Image
                src={lng.flag.src}
                width={45}
                alt={lng.flag.alt}
                className={styles.flag}
              />
              <div className={styles.triangle} />
            </div>
          );
        })}
      </div>

      {isSelectOpen && (
        <div className={styles.modal}>
          {locales.map((lng) => {
            if (lng.code === lang) return null;
            return (
              <Link href={getPathname(lng.code)} key={lng.code}>
                <div className={styles.modalItem}>
                  <Image
                    src={lng.flag.src}
                    width={45}
                    alt={lng.flag.alt}
                    className={styles.flag}
                  />
                  <p>{lng.country}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
