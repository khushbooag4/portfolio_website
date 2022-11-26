import React from "react";
import { Fade } from "react-reveal";
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
            <NavLink to={"/"}  className="logo">
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
              <li>
                <NavLink
                  to="/"
                  
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any)=> onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  // activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event: any) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event: any) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
  );
}

export default Header;