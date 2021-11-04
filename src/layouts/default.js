import React from "react"
import Header from "../components/Header"
import "../styles/style.scss"

const Layout = ({children, noHeader, isFullpage}) => {
  return (
    <div className={`page dark ${!!isFullpage ? 'fullpage' : ''}`}>
      {!noHeader && <Header/>}
      {children}
    </div>
  )
}

export default Layout;