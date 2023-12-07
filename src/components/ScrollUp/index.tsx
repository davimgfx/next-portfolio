import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Icon } from "..";

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 100;

    if (scrollY > showThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Icon size="medium" fixed={true} onClick={scrollToTop}>
          <FaArrowUpLong />
        </Icon>
      )}
    </>
  );
};
