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

export default PicLinks;