import React from 'react'
import "../styles/Footer.css";
import { Fade } from 'react-reveal'
import { greeting } from "../../portfolio.js";

function Footer(props: any) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          Made with <span role="img">❤️</span> by {greeting.footerTitle}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  )
}

export default Footer