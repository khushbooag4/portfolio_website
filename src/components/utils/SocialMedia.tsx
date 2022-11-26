import React from 'react'
import '../styles/SocialMedia.css'
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props: any) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }: any) => theme.text};
    transition: 0.3s ease-in;
  }
`;

function SocialMedia(props: any) {
    const theme = props.theme;
  return (
    <>
   <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
    </>
  )
}

export default SocialMedia