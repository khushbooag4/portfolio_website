import React from 'react'
import '../styles/SocialMedia.css'
import { socialMediaLinks } from "../../portfolio";

function SocialMedia(props: any) {
    const theme = props.theme;
  return (
    <div>
        <div className="social-media-div">
           {socialMediaLinks.map((media) => {
                return (
                    <a
                        href={media.link}
                        className={`icon-button`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <span></span> */}
                    </a>
                )
           })}
        </div>
    </div>
  )
}

export default SocialMedia