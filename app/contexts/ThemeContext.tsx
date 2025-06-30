"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSimulation } from "./SimulationProvider";

export const themes = [
  // 'light',
  // 'dark',
  "blue",
  "green",
  "purple",
  "red",
  "orange",
  "teal",
  "yellow",
] as const;
export type Theme = (typeof themes)[number];

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

function getRandomTheme(): Theme {
  return themes[Math.floor(Math.random() * themes.length)];
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getRandomTheme());
  const { updateColorPalette } = useSimulation();

  useEffect(() => {
    updateColorPalette();
  }, [theme]);  

  useEffect(() => {
    // Set a random theme on initial client-side render
    setTheme(getRandomTheme());
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
