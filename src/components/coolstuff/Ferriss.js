import React from 'react';

function Ferriss() {
    return (
        <div style={{display: 'flex'}}>  
            <div>
                <div style={{overflow: 'hidden', position: 'relative'}}>
                    <img src="images/ferriss.jpeg"  className="ferriss-img" />
                    <div className="ferriss-wheel">
                        <div>
                            <h2>The</h2>
                            <h2>Tim Ferriss</h2>
                            <h2>Show</h2>
                        </div>
                        <hr />
                        <a href="https://tim.blog" target="_blank">&rarr; tim.blog</a>
                    </div>
                </div>
                <div className="ferriss-blurb">
                    <p>Tim Ferriss is an entrepreneur, author, angel investor, and podcaster who has achieved massive success in all of these fields.
                        In his podcast, it's his job, in his own words, to "deconstruct world-class performers from eclectic areas to extract the tactics, tools, and routines you can use. This includes favorite books, morning routines, exercise habits, time-management tricks, and much more."
                        Ferriss has interviewed everyone, from actors such as Arnold Schwarzenegger, to CEOs such as Disney's Bob Iger, to psychotherapists such as relationship coach Esther Perel.
                    </p> <br />
                    <p>
                        I've been a listener of this podcast for over five years now, and it has had a huge impact on my life. I was lucky to be introduced to it at a particularly formative time in my life, so was able to incorporate and adopt many of the tools and routines that Ferriss uncovers from his guests.
                        Ferriss is something of a self–experimenter, having personally tried many of these tools and routines himself.
                        He is also an promoter of human wellbeing, and his podcast and writings could be seen as a gift to anyone who reaches out to take it.
                        His fascination with being able to maximise your chances of success, in all different domains, has allowed many people the chance to change their life outcomes by intelligently experimenting with their life recipes.
                    </p>
                </div>
                <div className="recommended-things">
                    <p>Recommended Episodes</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="https://tim.blog/2015/12/06/jamie-foxx/" target="_blank"><div><img src="images/ferriss-show.jpeg" height="30%" width="30%"/><p>Jamie Foxx on Workout Routines, Success Habits, and Untold Hollywood Stories (#124)</p></div></a></td>
                                <td><a href="https://tim.blog/2015/09/14/are-psychedelic-drugs-the-next-medical-breakthrough/" target="_blank"><div><img src="images/ferriss-show.jpeg" height="30%" width="30%"/><p>Are Psychedelic Drugs the Next Medical Breakthrough? (#104)</p></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://tim.blog/2015/09/25/jocko-willink/" target="_blank"><div><img src="images/ferriss-show.jpeg" height="30%" width="30%"/><p>The Scariest Navy SEAL Imaginable…And What He Taught Me (#107)</p></div></a></td>
                                <td><a href="https://tim.blog/2015/07/31/tara-brach/" target="_blank"><div><img src="images/ferriss-show.jpeg" height="30%" width="30%"/><p>Tara Brach on Meditation and Overcoming FOMO (Fear Of Missing Out) (#94)</p></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{backgroundColor: 'grey', width: '10em', boxShadow: '-7px 0px 6px -1px grey', zIndex: '2'}}></div>
        </div>
    )
}

export default Ferriss;