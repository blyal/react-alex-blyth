import React from 'react';

function Harris() {
    return (
        <div className="harris-pocket">  
            <div>
                <div className="pocket-img-container harris-img-container">
                            <img src="images/sam-harris.jpg"  className="harris-img" />
                            <a href="https://samharris.org/podcast/" target="_blank" style={{textDecoration: 'none'}}>
                            <div className="harris-wheel">
                                <div>
                                    <h2>The</h2>
                                    <h2>Making Sense</h2>
                                    <h2>Podcast</h2>
                                </div>
                                <hr />
                                <h4>Sam Harris</h4>
                            </div></a>
                            {/* <a href="https://samharris.org/podcast/" target="_blank">samharris.org/podcast</a> */}
                </div>
                <div className="pocket-blurb">
                    <p>Sam Harris’s podcast is where I go when I’m in the mood for something academic, philosophical, and thought–provoking. It’s a similar format to Tim Ferriss’s and Joe Rogan’s shows, but without ads. Unfortunately this means that listeners who aren’t members of Harris’s website can only access 75% of each podcast, but Harris’s team gives out free memberships to anyone who sends them an email asking for one.
                    </p>
                    <p>Harris is a very well-known scholar, philosopher, neuroscientist, and atheist. He’s also very intelligent, very compassionate, very well–spoken, and has a surprisingly sharp wit. You may not agree with all his points-of-view (I don’t), but if you’re interested in intelligent and rational conversations with well-regarded guests (and the occasional debate), on topics of politics, philosophy, or other areas-of-interest for Sam such as meditation or psychedelics, this is the podcast for you.
                    </p>
                </div>
                <div className="recommended-things harris-recommendations">
                    <p>Recommended Episodes</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="https://samharris.org/podcasts/152-trouble-facebook/" target="_blank"><div><img src="images/making-sense.png" height="25%" width="25%"/><span>#152 - THE TROUBLE WITH FACEBOOK: A Conversation with Roger McNamee</span></div></a></td>
                                <td><a href="https://samharris.org/podcasts/111-science-meditation/" target="_blank"><div><img src="images/making-sense.png" height="25%" width="25%"/><span>#111 - THE SCIENCE OF MEDITATION: A Conversation with Daniel Goleman and Richard J. Davidson</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://samharris.org/podcasts/137-safe-space/" target="_blank"><div><img src="images/making-sense.png" height="25%" width="25%"/><span>#137 - SAFE SPACE: A Conversation with Jonathan Haidt</span></div></a></td>
                                <td><a href="https://samharris.org/podcasts/127-freedom-known/" target="_blank"><div><img src="images/making-sense.png" height="25%" width="25%"/><span>#127 - FREEDOM FROM THE KNOWN: A Conversation with Michael Pollan</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="harris-bar-right"></div>
        </div>
    )
}

export default Harris;