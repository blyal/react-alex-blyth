import React from 'react';

function Ferrante() {
    return (
        <div>  
            <div>
                <div className="pocket-img-container">
                    {/* <img src="images/ferriss.jpeg" alt="Tim Ferriss" className="ferriss-img" /> */}
                </div>
                <h2>Book Title</h2>
                <hr />
                <p>Content</p>
                <div className="recommended-things ferriss-recommendations">
                    <p>Similar Books</p>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="https://tim.blog/2015/12/06/jamie-foxx/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/ferriss-show.jpeg" height="30%" width="30%"/><span>Jamie Foxx on Workout Routines, Success Habits, and Untold Hollywood Stories (#124)</span></div></a></td>
                                <td><a href="https://tim.blog/2015/09/25/jocko-willink/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/ferriss-show.jpeg" height="30%" width="30%"/><span>The Scariest Navy SEAL Imaginable…And What He Taught Me (#107)</span></div></a></td>
                            </tr>
                            <tr>
                                <td><a href="https://tim.blog/2015/09/14/are-psychedelic-drugs-the-next-medical-breakthrough/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/ferriss-show.jpeg" height="30%" width="30%"/><span>Are Psychedelic Drugs the Next Medical Breakthrough? (#104)</span></div></a></td>
                                <td><a href="https://tim.blog/2015/07/31/tara-brach/" target="_blank" rel="noopener noreferrer"><div><img alt="Logo" src="images/ferriss-show.jpeg" height="30%" width="30%"/><span>Tara Brach on Meditation and Overcoming FOMO (Fear Of Missing Out) (#94)</span></div></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="ferriss-bar-right"></div>
        </div>
    )
}

export default Ferrante;