import React from 'react';

function Ellis() {
    return (
        <div className="ellis-pocket">  
            <div>
                <div className="pocket-img-container">
                    <img src="images/bee-podcast.png" alt="Bret Easton Ellis" className="ellis-img" />
                </div>
                <div className="pocket-blurb">
                    <p>
                        This one is for the film nerds, or should I say, the film evangelicals, as well as the literary folk (as long as you’re not a “snowflake”). Bret Easton Ellis is the bestselling author and screenwriter of great works such as “American Psycho” and “Less Than Zero”, and in more recent years has evolved into a director and podcaster. Ellis has a fearsome knowledge of film history, and I have to give this podcast a lot of credit for exponentially expanding my knowledge of that, and of the entertainment industry more generally, as Ellis’s interviews with important and notable cultural figures really opened my eyes to the fact that films don’t come out of a vacuum. They are specific to a time and a place and a context, they are part of a tradition, and they are made by people, just like you and me, who work together in order to both express something and to make some money (though admittedly sometimes only the latter).
                    </p>
                    <p>
                    I would say though that more important than teaching me that, Ellis has been a role model for me growing up as a young adult interested in self–expression. I don’t think I’ve ever come across someone so unafraid to express their genuine thoughts and feelings, in spite of whatever the mob narrative happens to be. It’s very easy to just go along with popular opinion, and I sometimes catch myself doing it even if it’s something I don’t intend to do. Ellis was the first person who really made me aware of this, and has been a good example of staying true to yourself, even if it means drawing the displeasure of others. On top of that Ellis is a great thinker and speaker, he articulates his ideas very well in conversation with the interesting guests he invites on his podcast, and he is a fantastic creator: every podcast is an impressive work in of itself.
                    </p>
                </div>
                <div className="recommended-things ellis-recommendations">
                    <p>Where to find it:</p>
                    <hr />
                    <p className="ellis-span">Most of Bret's content is behind a (small) paywall. This is unfortunate, because talk of paywalls generally raises people's anxiety, but paywalls are also a reality I completely understand. You have to find a way to monetize content somehow.</p>
                    <p className="ellis-span">Until mid-2017, the podcast was available from PodcastOne. Some episodes here are free, so you can get a taste of whether it is for you.</p>
                    <p className="ellis-span">The last couple of years have seen the podcast move to Patreon, behind aforementioned paywall. There are different options and amounts, depending on how much you feel it's worth contributing.</p>
                    <table className="standard-recommendations-podcast">
                        <tbody>
                            <tr>
                                <td><a href="https://www.podcastone.com/Bret-Easton-Ellis-Podcast" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>BEE Podcast on PodcastOne (until 2017)</span></div></a></td>
                                <td><a href="https://www.patreon.com/breteastonellispodcast" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square-2.jpg" height="30%" width="30%"/><span>BEE Podcast on Patreon (post–2017)</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://www.youtube.com/watch?v=a2clzi2zXrk" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-face-square.jpg" height="30%" width="30%"/><span>Bret Easton Ellis interview on Larry King</span></div></a></td>
                                <td><a href="https://www.youtube.com/watch?v=oj3vRdHHdsw" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-face-square.jpg" height="30%" width="30%"/><span>Bret Easton Ellis interview on The Rubin Report</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mobile-recommendations-podcast">
                        <div className="mob-rec">
                            <a href="https://www.podcastone.com/Bret-Easton-Ellis-Podcast" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>BEE Podcast on PodcastOne (until 2017)</span></div></a>
                        </div>
                        <div className="mob-rec">
                            <a href="https://www.patreon.com/breteastonellispodcast" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square-2.jpg" height="30%" width="30%"/><span>BEE Podcast on Patreon (post–2017)</span></div></a>
                        </div>
                        <div className="mob-rec">
                            <a href="https://www.youtube.com/watch?v=a2clzi2zXrk" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-face-square.jpg" height="30%" width="30%"/><span>Bret Easton Ellis interview on Larry King</span></div></a>
                        </div>
                        <div className="mob-rec">
                            <a href="https://www.youtube.com/watch?v=oj3vRdHHdsw" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-face-square.jpg" height="30%" width="30%"/><span>Bret Easton Ellis interview on The Rubin Report</span></div></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ellis-bar-right"></div>
        </div>
    )
}

export default Ellis;