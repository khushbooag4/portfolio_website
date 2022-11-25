import Button from 'components/Button/Button';
import SocialMedia from 'components/utils/SocialMedia';
import React from 'react'
import { Fade } from 'react-reveal'
import { greeting } from "../../portfolio";
import "../styles/Greeting.css";

function Greeting(props: any) {
  const theme = props.theme;
  
  return (
    <Fade bottom duration={2000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <p
              className="greeting-text-p subtitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              {/* <div className="resume-btn-div"> */}
              <Button
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              ></Button>
              <i className="bi bi-arrow-up-right"></i>
            </div>
            {/* <div className="button-greeting-div">
            <Button text="Contact me" href="#contact" />
            <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
          </div> */}
          </div>
        </div>
        <div className="greeting-image-div">
          {/* <FeelingProud theme={theme} /> */}
          {/* <img src={require("../../assests/images/background.png")} /> */}
        </div>
      </div>
    </div>
  </Fade>
  )
}

export default Greeting