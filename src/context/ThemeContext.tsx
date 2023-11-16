"use client"

import React, { ReactNode, createContext, useState } from "react";

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
  const [theme, setTheme] = useState<Theme>("light");

  const values: ThemeContextProps = { theme, setTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
