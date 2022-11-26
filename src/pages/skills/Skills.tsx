import React from 'react'
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from 'components/Images/FullStackImg';
import { theme } from "../../theme"
import SoftwareSkill from 'components/utils/SoftwareSkill';
import CloudImg from 'components/Images/CloudImg';
import DataScienceImg from 'components/Images/DataScienceImg';
import '../pageStyles/Skills.css';

function GetSkillSvg(props: any): any{
    if(props.fileName === "FullStackImg")
      return <FullStackImg theme = {theme} />
    else if(props.fileName === "CloudInfraImg")
      return <CloudImg theme = {theme} />
    else
      return <DataScienceImg theme={theme} />
  }

function Skills(props: any) {
  return (
    <div className='maid' id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header">
            What I Do?
          </h1>
        </Fade>
      </div>
     <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
      </div>
  )
}

export default Skills 