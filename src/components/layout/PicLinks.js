import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const PicLinks = (props) => {
    return (
        <ul className="thing-1">
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:alexblyth@pm.me"><FontAwesomeIcon icon={faEnvelope} size="2x" className="email-icon" /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://instagram.com/_alexblyth"><FontAwesomeIcon icon={faInstagram} size="2x" className="insta-icon" /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://github.com/blyal"><FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" /></a></li>
        </ul>
    )
}

// Old icons
{/* <li><a target="_blank" rel="noopener noreferrer" href="mailto:alexblyth@pm.me"><img src={'/images/email-icon.png'} alt="Email alexblyth@pm.me" id="email-icon" className="icon" height="33.75" width="45" /></a></li>
<li><a target="_blank" rel="noopener noreferrer" href="http://instagram.com/_alexblyth"><img src={'/images/instagram-icon.png'} alt="Instagram @alexblyth97" id="insta-icon" className="icon" height="60" width="80" /></a></li>
<li><a target="_blank" rel="noopener noreferrer" href="http://github.com/blyal"><img src={'/images/github-icon.png'} alt="github icon" id="github-icon" className="icon" height="64" width="64" /></a></li> */}

export default PicLinks;