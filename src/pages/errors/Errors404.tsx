import Footer from 'components/Homepage/Footer'
import Header from 'components/Homepage/Header'
import TopButton from 'components/utils/TopButton'
import React from 'react'
import { Fade } from 'react-reveal'
import { theme } from "../../theme"
import { Link } from "react-router-dom"
import "../pageStyles/Errors404.css"

function Error404() {
  return (
    <div className="error-main">
        <Header theme={theme} />                    
       <div className="error-class">
        <Fade bottom duration={2000} distance="40px">
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            {/* <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            ></Link> */}
            Go Home
          </Fade>
    </div>
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
  )
}

export default Error404