"use client"

import React, { ReactNode, createContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<Theme>(storedTheme === "dark" ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    
    const storedTheme = isClient ? localStorage.getItem("theme") : null;
    
    setTheme(storedTheme === "dark" ? "dark" : "light");
  }, []);

  const values: ThemeContextProps = { theme, setTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
