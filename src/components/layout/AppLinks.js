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
            <li><Link to="/now" onClick={() => toggle()}>NOW</Link></li>
            <li><Link to="/blog" onClick={() => toggle()}>BLOG</Link></li>
            <li><Link to="/portfolio" onClick={() => toggle()}>CODE</Link></li>
            <li><Link to="/stuff" onClick={() => toggle()}>COOL STUFF</Link></li>
            <li><Link to="/film" onClick={() => toggle()}>FILM</Link></li>
        </ul>
    )
}

export default AppLinks;