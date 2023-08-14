import React, { useState } from "react";
import { Fade } from "react-reveal";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { greeting, navlinks } from "../../portfolio.js";
import SeoHeader from "components/seoheader/SeoHeader";

function Header(props: any) {
  const [active, setActive] = useState(false);

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
            <NavLink to={"/"}  className="logo" onClick={ () => {
              window.scrollTo(0, 0);
            }}>
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              {navlinks.map((link) => (
                <li key={link.id} className={`${active === true ? "font-[2019]" : "font-[2300]"}`} onClick={ () => setActive(true)}>
                <NavLink
                  to={link.to}
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any)=> onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  {link.text}
                </NavLink>
              </li>
              ))}
            </ul>
            {/* <div className="sm:hidden flex flex-1 justify-end items-center">
              <img src={menu} alt="menu" className="w-280px h-280px object-contain cursor-pointer"/>
            </div> */}
          </header>
        </div>
      </Fade>
  );
}

export default Header;