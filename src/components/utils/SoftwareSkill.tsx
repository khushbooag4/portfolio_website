import React from 'react'
import "../styles/SoftwareSkills.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap"

function SoftwareSkill(props: any) {
  return (
    <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {props.logos.map((logo: any) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" id={logo.skillName}>
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
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

export default SoftwareSkill