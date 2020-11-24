import React from 'react';

function Footer() {
    return (
        <>
            <br />
            <br />
            <footer style={{zIndex: '10'}}>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="mailto:alexblyth@pm.me"><img src={'/images/email-icon.png'} alt="Email alexblyth@pm.me" id="emailIcon" className="icon" height="33.75" width="45" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="http://instagram.com/alexblyth97"><img src={'/images/instagram-icon.png'} alt="Instagram @alexblyth97" className="icon" height="60" width="80" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="http://github.com/blyal"><img src={'/images/github-icon.png'} alt="github icon" className="icon" height="64" width="64" /></a></li>
                </ul>
              </footer>
          </>
    )
}

export default Footer;