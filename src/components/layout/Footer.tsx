import React from 'react';
import { Link } from 'react-scroll';
import PicLinks from './PicLinks';

function Footer() {
    return (
        <>
            <footer>
                <div className="back-to-top">
                    <Link
                        to='header'
                        smooth={true}
                        spy={false}
                        duration={500}
                        >
                        BACK TO TOP
                    </Link>
                </div>
            <PicLinks />
            </footer>
        </>
    )
}

export default Footer;