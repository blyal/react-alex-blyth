import React from 'react';

function Ellis() {
    return (
        <div className="ferriss-pocket">  
            <div>
                <div style={{position: 'relative'}}>
                    <img src="images/Bret-Easton-Ellis.jpg" alt="Bret Easton Ellis" className="ellis-img" />
                    <a href="https://www.podcastone.com/Bret-Easton-Ellis-Podcast" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <div className="ellis-title">
                            <div>
                                <h2>The</h2><h2>Bret</h2><h2>Easton</h2><h2>Ellis</h2><h2>Podcast</h2>
                            </div>
                        </div>
                    </a>
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
                    <p>Recommended Episodes</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="https://tim.blog/2015/12/06/jamie-foxx/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>Jamie Foxx on Workout Routines, Success Habits, and Untold Hollywood Stories (#124)</span></div></a></td>
                                <td><a href="https://tim.blog/2015/09/25/jocko-willink/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>The Scariest Navy SEAL Imaginable…And What He Taught Me (#107)</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://tim.blog/2015/09/14/are-psychedelic-drugs-the-next-medical-breakthrough/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>Are Psychedelic Drugs the Next Medical Breakthrough? (#104)</span></div></a></td>
                                <td><a href="https://tim.blog/2015/07/31/tara-brach/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/bee-square.jpg" height="30%" width="30%"/><span>Tara Brach on Meditation and Overcoming FOMO (Fear Of Missing Out) (#94)</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="ferriss-bar-right"></div>
        </div>
    )
}

export default Ellis;