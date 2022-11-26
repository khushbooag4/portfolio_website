import Header from 'components/Homepage/Header';
import React from 'react'
import { Fade } from 'react-reveal';
import { theme } from "../../theme";
import { experience } from "../../portfolio.js";
import { Accordion, Panel } from "baseui/accordion";
import Footer from 'components/Homepage/Footer';
import TopButton from 'components/utils/TopButton';

import '../pageStyles/Experience.css';
import ExperienceCard from 'components/Cards/ExperienceCard';

function Experience() {
    const sections = experience["sections"];
  return (
    <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assests/images/${experience["header_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
       <div className="experience-accord">
        <Accordion>
          {sections.map((section) => {
            return (
              <Panel
                // clas = "accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
          </Accordion>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
  )
}

export default Experience