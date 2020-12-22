import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {

    useEffect(() => {
        props.toggle(true, 'home');
        return () => {
            props.toggle(false, 'home');
        }
    }, [props]
    );

    return (
        <>
        <img src={'/images/Hvar-sailing.JPG'} alt="Sailing in Hvar, Croatia" id="hvar-pic" height="33%" width="33%" />
        <div className="home-style">
            <h3 className="cyan">Me in 10 Seconds</h3>
            <p>Explorer, creator, programmer. Lover of cinema, good music, and good times.</p>
            <p>I've worked as a front-end web developer, a bartender, in early childcare (less different from bartending than you might expect), and on an orchard.</p>
            <p>I believe in taking care of my mind, body, and loved ones; in continuous learning; in building relationships; and in striving to be the best version of myself that I can.</p>
        </div>
        </>
    )
}

Home.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default Home;