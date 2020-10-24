import React from 'react';

function AmericanPsycho() {
    return (
        <div className="book-pocket american-psycho-pocket">  
            <div>
                <div className="book-title american-psycho-second-color">
                    <h2><i>American Psycho</i></h2>
                    <span>Bret Easton Ellis</span>
                </div>
                
                <div className="book-blurb">
                    <img src="images/american-psycho.jpg" alt="American Psycho" height='234' width='152.7' />
                    <p>Disclaimer — not for the faint–hearted or easily–offended. This book deals with some dark shit. However, this doesn’t mean that it’s not shit that’s worth dealing with. In fact, my personal conviction is that the darkest shit is the shit we need to deal with the most. If you look straight at something that, not just makes you scared, but horrifies you, you’re stronger for it.</p>
                    <p>American Psycho is a fascinating reflection on the masks we wear in society, the nature of the modern capitalist social environment, the pain we hide within us, and the damage it is capable of causing if it escapes our attempts to contain it. Outside of that, American Psycho is a hilarious deadpan comedy, which might sound a little strange, but for the first half of the book it’s hard to call it anything other than a comedy. Bret Easton Ellis’s minimalism is stylistically perfect, and the wit it delivers is dynamite, Also, many of the narrative ideas of the book are comedy gold — the characters all looking so alike that they fail to tell each other apart, for example. Then the book plunges into the darkness.</p>
                    <p>I admire Ellis — having the courage and the daring to publish something like this is quite something. Humans are capable of some very dangerous stuff. Instead of ignoring and suppressing that, we need to investigate it, to figure our how this dark stuff comes about in the first place, and to ensure that we can stay on the best path possible ourselves.</p>
                </div>
                <div className="book-recommendations american-psycho-second-color">
                <p>Related</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div><img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/></div>
                                </td>
                                <td>
                                <div><img alt="Logo" src="images/notes-from-underground.jpg" height="30%" width="30%"/></div>
                                </td>
                                <td>
                                <div><img alt="Logo" src="images/american-psycho-2000.jpg" height="30%" width="30%"/></div>
                                </td>
                            </tr>
                            <tr>
                                <td><i>Less Than Zero</i><br /><span>Bret Easton Ellis</span></td>
                                <td><i>American Psycho</i><br /><span>Bret Easton Ellis</span></td>
                                <td><i>American Psycho <span>(2000)</span></i><br /><span>directed by Mary Harron</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AmericanPsycho;