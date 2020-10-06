import React from 'react';

function Home() {
    return (
        <>
        <img src={'/images/Hvar-sailing.JPG'} alt="Sailing in Hvar, Croatia" id="hvarPic" height="33%" width="33%" />
        <div style={homeStyle}>
            <h3 style={{color: 'Cyan'}}>Me in 10 Seconds</h3>
            <p>Programmer, traveller, creater, lover of films, good music, and good times.</p>
            <p>I've worked as a front-end web developer, a bartender, in early childcare (less different from bartending than you might expect), and on an orchard.</p>
            <p>I believe in taking care of my mind, body, and loved ones; in continuous learning; in building relationships; and in striving to be the best version of myself that I can.</p>
        </div>
        </>
    )
}

const homeStyle = {
    textAlign: 'left',
    marginLeft: '15%',
    marginRight: '15%',
    fontFamily: 'Monaco, monospace',
    lineHeight: '1.75em'
}

export default Home;