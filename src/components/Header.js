import React from "react";
import { Link } from "gatsby";
import { routeLists } from "../constants/pages";
import "../styles/components/header.scss";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { themes } from "../constants/themes";

const Header = ({theme, setTheme}) => {
  return (
    <nav className="navbar">
      <span className="navbar__name">ALLEN K ABRAHAM</span>
      <ul className="navbar__links">
        {routeLists.map((page) => (
          <li>
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
