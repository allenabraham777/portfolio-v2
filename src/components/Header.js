import React from "react";
import ThemeToggle from "./ThemeToggle";
import Menu from "./icons/Menu";

const Header = ({ theme, setTheme, themes }) => {
  return (
    <div className="header">
      <div className="nav">
        <span className="nav-button">
          <ThemeToggle theme={theme} setTheme={setTheme} themes={themes} />
        </span>
        {/* <span className="nav-button">
          <Menu className={`icon menu ${theme === themes.DARK ? 'dark' : 'light'}`} />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
