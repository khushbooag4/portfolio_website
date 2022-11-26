import Header from 'components/Homepage/Header';
import CompetitiveSites from 'components/utils/CompetitiveSites';
import React from 'react'
import { competitiveSites, certifications, degrees } from "../../portfolio";
import { Fade } from 'react-reveal';
import { theme } from "../../theme"
import '../pageStyles/Education.css'
import Footer from 'components/Homepage/Footer';
import TopButton from 'components/utils/TopButton';
import Certifications from 'components/utils/Certifications';
import DegreeCard from 'components/Cards/DegreeCard';
import EducationImg from 'components/Images/EducationImg';

function Education() {
  return (
  <div className="education-main">
    <Header theme={theme} />
    <div className="basic-education">
      <Fade bottom duration={2000} distance="40px">
        <div className="heading-div">
          <div className="heading-img-div">
            {/* <img src={require("../../assests/images/education.svg")}
                                alt=""
                            /> */}
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Basic Qualification and Certifcations
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </div>
      </Fade>
      <div>
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
        </div>
      {certifications.certifications.length > 0 ? (
        <Certifications theme={theme} />
      ) : null}
    </div>
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
  </div>
  )
}

export default Education