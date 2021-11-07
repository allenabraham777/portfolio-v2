import React from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

const ThemeToggle = ({theme, setTheme, themes}) => {
  const toggleTheme = () => {
    let newTheme = themes.DARK
    if(theme === themes.DARK) {
      newTheme = themes.LIGHT;
    }
    setTheme(newTheme);
  }
  return (
    <span class="theme-toggle">
      <label class="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === themes.LIGHT}/>
        <span class="slider round">
          <Sun className={`icon sun ${theme === themes.DARK && 'hide'}`} />
          <Moon className={`icon moon ${theme === themes.LIGHT && 'hide'}`}/>
        </span>
      </label>
    </span>
  );
};

export default ThemeToggle;
