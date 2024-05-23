import { createContext, useState } from "react";
import Content from "./Content";

interface ThemeContextType {
  theme: string;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function Index() {
  const [theme, setTheme] = useState<string>("light");

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeContext.Provider value={{ toggleMode, theme }}>
        <Content /> 
      </ThemeContext.Provider>
    </div>
  );
}
