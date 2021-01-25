import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SubscribeLink(props) {
    return (
        <>
            <br /><br /><br />
            <div className="subscribe-link-container" style={{display: props.displayed ? "block" : "none"}}>
                <p className="cyan subscribe-link"><Link to="/subscribe">Want to receive updates for this page?</Link></p>
            </div>
        </>
    );
}

// const changeScroll = () => {
//     let r = document.querySelector(':root');
//     r.style.setProperty('--scroll', 'auto');
// }

SubscribeLink.propTypes = {
    displayed: PropTypes.bool.isRequired
}

export default SubscribeLink;