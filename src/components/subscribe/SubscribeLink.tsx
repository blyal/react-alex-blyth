import React from 'react';
import { Link } from 'react-router-dom';

type ISubscribeLinkProps = {
    displayed: boolean
}

function SubscribeLink(props: ISubscribeLinkProps) {
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

export default SubscribeLink;