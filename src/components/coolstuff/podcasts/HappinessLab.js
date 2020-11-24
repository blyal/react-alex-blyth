import React from 'react';

function HappinessLab() {
    return (
        <div className="happiness-pocket">  
            <div>
                <div className="pocket-img-container happiness-img-container">
                    <img src="images/happiness-santos.jpg" alt="The Happiness Lab with Dr Laurie Santos" className="happiness-img" />
                        <a href="https://www.happinesslab.fm/" target="_blank" rel="noopener noreferrer">&rarr; happinesslab.fm</a>
                </div>
                <div className="pocket-blurb">
                    <p>
                    The premise of this podcast is that we all have ideas about what will make us happy, but often they are ideas we’ve developed at a younger, less experienced age. Or, some of these ideas we have may be misguided instincts about what will be good for us, but that in actuality end up making us feel worse. However, there are ways to be happier and improve one’s life, and science can provide us some insight into what some of the healthier life patterns might be, and how we can implement them ourselves.
                    </p>
                    <p>
                    Originally a Yale psychology course (the most popular on record), The Happiness Lab goes over the life patterns which the best research to–date shows us are likely to lead to wellbeing and happiness. Each episode is dedicated to a different idea, observation, or recommendation, with Laurie also giving surrounding information as well as some examples and counter–examples demonstrating the point.
                    </p>
                </div>
                <div className="recommended-things happiness-recommendations">
                    <p>Recommended Episodes</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="https://www.happinesslab.fm/season-1-episodes/you-can-change-w6YOz" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/happiness-lab.jpg" height="20%" width="20%"/><span>You Can Change</span></div></a></td>
                                <td><a href="https://www.happinesslab.fm/season-1-episodes/the-unhappy-millionaire" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/happiness-lab.jpg" height="20%" width="20%"/><span>The Unhappy Millionaire</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://www.happinesslab.fm/season-1-episodes/dont-think-of-a-white-bear" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/happiness-lab.jpg" height="20%" width="20%"/><span>Don't Think of a White Bear</span></div></a></td>
                                <td><a href="https://www.happinesslab.fm/season-1-episodes/mistakenly-seeking-solitude" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/happiness-lab.jpg" height="20%" width="20%"/><span>Mistakenly Seeking Solitude</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="happiness-bar-right" ></div>
        </div>
    )
}

export default HappinessLab;