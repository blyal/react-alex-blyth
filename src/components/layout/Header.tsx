import React from 'react';
import { Link } from 'react-router-dom';
import AppLinks from './AppLinks';
import PicLinks from './PicLinks';
import classNames from 'classnames';

type IProps = {
    openMenu: boolean;
    firstTime: boolean;
    closeMenu: boolean;
    toggleOverlay: () => void;
    cyanTitle: boolean;
}

const Header: React.FC<IProps> = (props) => {

    const topBar = classNames({
        'header-bar': true,
        'top-bar': true,
        'top-bar-rotate': props.openMenu,
        'top-bar-return': props.closeMenu && !props.firstTime
    });

    const middleBar = classNames({
        'header-bar': true,
        'middle-bar': true,
        'middle-bar-gone': props.openMenu,
        'middle-bar-return': props.closeMenu && !props.firstTime
    });

    const bottomBar = classNames({
        'header-bar': true,
        'bottom-bar': true,
        'bottom-bar-rotate': props.openMenu,
        'bottom-bar-return': props.closeMenu && !props.firstTime
    });
    const mainTitle = classNames({
        'mobile-header-main': true,
        'cyan-mobile': props.cyanTitle
    })

    const closeMobileNav = () => {
        if (props.openMenu) {
            props.toggleOverlay();
        }
    }

    return (
        <header className="app-link-style" id="header">

            <div className="header-main">
                <label className="open-links mobile-header-main" onClick={props.toggleOverlay}>
                    <div className={topBar}></div>
                    <div className={middleBar}></div>
                    <div className={bottomBar}></div>
                </label>

                <h1 id="top-name" className={mainTitle} onClick={() => closeMobileNav()}><Link to="/">ALEX BLYTH</Link></h1>

                <nav id="navbar">
                    <AppLinks mobile={false} open={true} />
                </nav>
            </div>

            <nav className="mobile-pic-links">
                <PicLinks />
            </nav>

        </header>
    )
}

export default Header;