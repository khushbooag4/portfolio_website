import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "../styles/ProjectLanguages.css";

function ProjectLanguages(props: any) {
  return (
    <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {props.logos.map((logo: any) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    id={logo.skillName}
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
  )
}

export default ProjectLanguages