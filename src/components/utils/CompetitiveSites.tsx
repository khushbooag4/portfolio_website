import React from 'react'
import "../styles/CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function CompetitiveSites(props: any) {
  return (
    <div className="competitive-sites-main-div">
    <ul className="dev-icons">
      {props.logos.map((logo: any) => {
        return (
          <OverlayTrigger
            key={logo.siteName}
            placement={"top"}
            // style={{ marginBottom: "5px" }}
            overlay={
              <Tooltip id={`tooltip-top`}>
                <strong>{logo.siteName}</strong>
              </Tooltip>
            }
          >
            <li className="competitive-sites-inline" id={logo.siteName}>
              <a
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </li>
          </OverlayTrigger>
        );
      })}
    </ul>
  </div>
  )
}

export default CompetitiveSites