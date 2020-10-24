import React from 'react';

function Dostoevsky() {
    return (
        <div className="book-pocket dostoevsky-pocket">  
            <div>
                <div className="book-title dostoevsky-second-color">
                    <h2><i>Notes from Underground</i></h2>
                    <span>Dostoevsky</span>
                </div>
                
                <div className="book-blurb">
                    <img src="images/notes-from-underground.jpg" alt="Notes from Underground" height='234' width='152.7' />
                    <p>Within two pages of reading this book, I was laughing out loud. Notes from Underground is a very dark comedy following a bitter, lonely man’s half-arsed attempt to reconnect with humanity.</p>
                    <p>Dostoevsky is an incredibly astute observer of human behaviour, thought, and motivation. Whereas most people see the world as they’d like it to be, Dostoevsky sees it as it actually is — or, to my mind, gets closer than almost anyone. The narrator in this book is such a loser, but he’s such a real loser. His resentful thought patterns are so realistic, and when you read this book you will laugh at yourself because you will definitely find echoes of some bitter and nonsensical thoughts you’ve had yourself in your less fine moments. The narrator seems like a caricature, like his characterisation is taken to an extreme, but then again I don’t know… we humans do get very resentful.</p>
                    <p>It’s a fantastic book, it’s not too long, it’s full of insight. A great introduction to Dostoevsky.</p>
                </div>
                <div className="book-recommendations dostoevsky-second-color">
                <p>Related</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div><img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/></div>
                                </td>
                                <td>
                                <div><img alt="Logo" src="images/american-psycho.jpg" height="30%" width="30%"/></div>
                                </td>
                                <td>
                                <div><img alt="Logo" src="images/devils.jpg" height="30%" width="30%"/></div>
                                </td>
                            </tr>
                            <tr>
                                <td><i>Less Than Zero</i><br /><span>Bret Easton Ellis</span></td>
                                <td><i>American Psycho</i><br /><span>Bret Easton Ellis</span></td>
                                <td><i>Devils</i><br /><span>Dostoevsky</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dostoevsky;