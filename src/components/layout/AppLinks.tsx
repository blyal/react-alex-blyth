import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {
    mobile: boolean;
    open: boolean;
    toggleOff?: () => void;
    openNow?: boolean;
    openBlog?: boolean;
    openCode?: boolean;
    openCoolStuff?: boolean;
    openFilmStuff?: boolean;
}

const AppLinks: React.FC<IProps> = (props) => {

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