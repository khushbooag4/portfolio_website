import React from "react";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";
import "../styles/Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "components/seoheader/SeoHeader";

function Header(props: any) {

  const theme = props.theme;

  const onMouseEnter = (event: any, color: any) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };
  
  const onMouseOut = (event: any) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

  return (
    <Fade top duration={1000} distance="20px">
    <SeoHeader />
    <div>
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
        </ul>
      </header>
    </div>
  </Fade>
  );
}

export default Header;