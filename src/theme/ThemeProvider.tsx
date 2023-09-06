import { ReactNode, useContext, useEffect, useReducer } from "react";
import themeReducer from "./themeReducer";
import { Dispatch } from "react";
import { ActionType } from "./themeReducer";
import React from "react";

interface ThemeContextType {
  darkMode: boolean;
  dispatch: Dispatch<ActionType>;
}
export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

interface Props {
  children: ReactNode;
}
const value = getValue();
const ThemeProvider = ({ children }: Props) => {
  const [darkMode, dispatch] = useReducer(themeReducer, value);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
function getValue() {
  let currentValue;
  try {
    currentValue = JSON.parse(
      localStorage.getItem("darkMode") || String(false)
    );
  } catch (error) {
    currentValue = false;
  }
  return currentValue;
}
