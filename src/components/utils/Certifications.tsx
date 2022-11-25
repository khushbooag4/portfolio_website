import CertificationCard from 'components/Cards/CertificationCard';
import React from 'react'
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import '../styles/Certifications.css';
type Props = {}


function Certifications(props: any) {
    const theme = props.theme
   return (
    <div className="main" id="certs">
    <div className="certs-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="certs-header" style={{ color: theme.text }}>
          Certifications
        </h1>
      </Fade>
    </div>
    <div className="certs-body-div">
      {certifications.certifications.map((cert) => {
        return <CertificationCard certificate={cert} theme={theme} />;
      })}
    </div>
  </div>
  )
}

export default Certifications