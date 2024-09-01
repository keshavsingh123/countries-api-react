import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function useTheme() {
  const [isDark, setIsDark] = useContext(ThemeContext); // custom context

  //   return [isDark,setIsDark] or
  return useContext(ThemeContext);
}

export default useTheme;
