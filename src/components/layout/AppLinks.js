import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

AppLinks.propTypes = {
    mobile: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    toggleOff: PropTypes.func,
    openNow: PropTypes.bool,
    openBlog: PropTypes.bool,
    openCode: PropTypes.bool,
    openCoolStuff: PropTypes.bool,
    openFilmStuff: PropTypes.bool
}

export default AppLinks;