import { createContext, useState } from "react";
import { Sun, MoonStar } from "lucide-react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    const updatedTheme = theme == "Light" ? "Dark" : "Light";
    setTheme(updatedTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
