import React from 'react';

function Rogan() {
    return (
        <div className="rogan-pocket">  
            <div>
                <div className="pocket-img-container">
                        <a href="http://podcasts.joerogan.net/" target="_blank">
                            <img src="images/jre.jpg"  className="rogan-img" />
                        </a>
                </div>
                <div className="pocket-blurb">
                    <p>The Joe Rogan Experience is so popular now that it’s almost a surprise if someone hasn’t heard of it. In case that’s true for anyone reading this, then it’s my pleasure to be the one to introduce it to you. 
                        Comedian and Martial Arts commentator Joe Rogan is helping to put sensationalist news networks out of business by having a wide array of guests on his show, and taking the time to discuss complex and/or entertaining issues in a personable, real way. 
                        This is the podcast which showed the world just how popular long–form (2-3 hour) discussions can be, and listening or watching it certainly doesn’t feel like 2 hours.
                    </p>
                    <p>
                    The great thing about Joe is that he is smart and curious, but he’s not a world expert in anything (except for Martial Arts), so he’s able to have intelligent conversations with world experts, or otherwise interesting people, and get them talking about topics in a way such that he becomes smarter as the listener does too. 
                    Either that, or he just shoots the shit, which is equally worthwhile. Listening to this podcast is like hanging out with a mate, who is capable of both making you laugh, and making you think.
                    </p>
                </div>
                <div className="recommended-things rogan-recommendations">
                    <p>Recommended Episodes</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="http://podcasts.joerogan.net/podcasts/tulsi-gabbard-jocko-willink" target="_blank"><div><img src="images/jre-2.jpg" height="30%" width="30%"/><span>#1391- Tulsi Gabbard & Jocko Willink</span></div></a></td>
                                <td><a href="http://podcasts.joerogan.net/podcasts/bernie-sanders" target="_blank"><div><img src="images/jre-2.jpg" height="30%" width="30%"/><span>#1330 - Bernie Sanders</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="http://podcasts.joerogan.net/podcasts/naval-ravikant" target="_blank"><div><img src="images/jre-2.jpg" height="30%" width="30%"/><span>#1309 - Naval Ravikant</span></div></a></td>
                                <td><a href="http://podcasts.joerogan.net/podcasts/jordan-peterson-2" target="_blank"><div><img src="images/jre-2.jpg" height="30%" width="30%"/><span>#958 - Jordan Peterson</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rogan-bar-right"></div>
        </div>
    )
}

export default Rogan;