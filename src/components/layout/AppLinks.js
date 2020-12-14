import React from 'react';
import { Link } from 'react-router-dom';

const AppLinks = (props) => {

    const toggle = () => {
        if (props.toggleOff) {
            props.toggleOff()
        }
    }

    return (
        <ul className={`app-link-style ${props.mobile ? "mobile-menu" : ""} ${props.open ? "" : "display-none"}`}>
            <li className={`${props.openNow ? "cyan-mobile" : ""}`}><Link to="/now" onClick={() => toggle()}>NOW</Link></li>
            <li className={`${props.openBlog ? "cyan-mobile" : ""}`}><Link to="/blog" onClick={() => toggle()}>BLOG</Link></li>
            <li className={`${props.openCode ? "cyan-mobile" : ""}`}><Link to="/portfolio" onClick={() => toggle()}>CODE</Link></li>
            <li className={`${props.openCoolStuff ? "cyan-mobile" : ""}`}><Link to="/stuff" onClick={() => toggle()}>COOL STUFF</Link></li>
            <li className={`${props.openFilmStuff ? "cyan-mobile" : ""}`}><Link to="/film" onClick={() => toggle()}>FILM</Link></li>
        </ul>
    )
}

export default AppLinks;