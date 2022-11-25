import Header from 'components/Homepage/Header';
import React from 'react'
import { Fade } from 'react-reveal';
import { theme } from "../../theme";
import {
    greeting,
    projectsHeader,
    publicationsHeader,
    publications,
  } from "../../portfolio.js";
import Button from 'components/Button/Button';
import Footer from 'components/Homepage/Footer';
import TopButton from 'components/utils/TopButton';
import "../pageStyles/Projects.css";
import ProjectsData from "./projects.json";
import GithubRepoCard from 'components/Cards/GithubRepoCard';
import PublicationCard from 'components/Cards/PublicationCard';


function Projects() {

  return (
    <div className="projects-main">
    <Header theme={theme} />
    <div className="basic-projects">
      <Fade bottom duration={2000} distance="40px">
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            {/* <img
              src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
              alt=""
              className=""
            /> */}
            {/* <ProjectsImg theme={theme} /> */}
          </div>
          <div className="projects-heading-text-div">
            <h1
              className="projects-heading-text"
              style={{ color: theme.text }}
            >
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader["description"]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
    <div className="repo-cards-div-main">
      {ProjectsData.data.map((repo) => {
        return <GithubRepoCard repo={repo} theme={theme} />;
      })}
    </div>
    <Button
      text={"More Projects"}
      className="project-button"
      href={greeting.githubProfile}
      newTab={true}
      theme={theme}
    />

    {/* Publications  */}
    {publications.data.length > 0 ? (
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {publicationsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publicationsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    ) : null}

    <div className="repo-cards-div-main">
      {publications.data.map((pub) => {
        return <PublicationCard pub={pub} theme={theme} />;
      })}
    </div>

    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
  )
}

export default Projects