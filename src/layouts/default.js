import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/layouts/default.scss";
import { themes } from "../constants/themes";

const Layout = ({ fullHeight, noHeader, children }) => {
  const [theme, setTheme] = useState(themes.LIGHT);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  const updateTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  return (
    <div
      className={`layout ${fullHeight ? "full-height" : ""} ${
        theme === themes.DARK ? "dark" : "light"
      }`}
    >
      {!noHeader && <Header theme={theme} setTheme={updateTheme} />}
      {children}
    </div>
  );
};

export default Layout;
