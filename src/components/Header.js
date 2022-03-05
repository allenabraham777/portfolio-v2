import React, { useState } from "react";
import { Link } from "gatsby";
import { routeLists } from "../constants/pages";
import "../styles/components/header.scss";
import { BsFillMoonStarsFill, BsFillSunFill,  } from "react-icons/bs";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { themes } from "../constants/themes";

const Header = ({theme, setTheme}) => {
  const [expand, setExpand] = useState(false);
  return (
    <nav className="navbar">
      <span className="navbar__name">ALLEN K ABRAHAM</span>
      <ul className="navbar__links">
        {routeLists.map((page) => (
          <li key={`link-${page.name.toLowerCase()}`}>
            <Link to={`${page.path}`}>{page.name}</Link>
          </li>
        ))}
        <li>
          <div className="theme">
            <div className="theme__container" style={{flexDirection: theme === themes.DARK ? 'column' : 'column-reverse' }}>
              <span onClick={()=>setTheme(themes.DARK)}>
                <BsFillMoonStarsFill/>
              </span>
              <span onClick={()=>setTheme(themes.LIGHT)}>
                <BsFillSunFill />
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className="navbar__button">
        <RiMenu3Fill onClick={()=>setExpand(true)}/>
      </div>
      <ul className={`navbar__menu${expand ? ' expand' : ''}`}>
        <RiCloseLine className="close" onClick={()=>setExpand(false)}/>
        {routeLists.map((page) => (
          <li key={`menu-${page.name.toLowerCase()}`}>
            <Link to={`${page.path}`}>{page.name}</Link>
          </li>
        ))}
        <li>
          <div className="theme">
            <div className="theme__container" style={{flexDirection: theme === themes.DARK ? 'column' : 'column-reverse' }}>
              <span onClick={()=>setTheme(themes.DARK)}>
                <BsFillMoonStarsFill/>
              </span>
              <span onClick={()=>setTheme(themes.LIGHT)}>
                <BsFillSunFill />
              </span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
