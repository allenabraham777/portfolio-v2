import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "../styles/style.scss"

const themes = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}


const Layout = ({children, noHeader, isFullpage}) => {
  const [theme, setTheme] = useState(themes.LIGHT)
  
  useEffect(()=>{
    const theme = localStorage.getItem('theme');
    if(theme) {
      setTheme(theme);
    }
  },[]);

  const updateTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  }

  return (
    <div className={`page ${theme === themes.DARK ? 'dark' : 'light'} ${!!isFullpage ? 'fullpage' : ''}`}>
      {!noHeader && <Header theme={theme} setTheme={updateTheme} themes={themes}/>}
      {children}
    </div>
  )
}

export default Layout;