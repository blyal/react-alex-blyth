import React from 'react';

function Murakami() {
    return (
        <div className="book-pocket murakami-pocket">  
            <div>
                <div className="book-title murakami-second-color">
                    <h2><i>Notes from Underground</i></h2>
                    <span>Dostoevsky</span>
                </div>
                
                <div className="book-blurb murakami-blurb">
                    <img src="images/norwegian-wood.jpg" alt="Norwegian Wood" height='280' width='181.3' />
                    <p>There’s something about Murakami’s writing that is just so hypnotic. There are lots of books in the world which I can’t read because they’re just too damn boring, but Murakami never fails to hold my attention, to keep me wanting to come back for more. Norwegian Wood is probably the thing of his I’ve enjoyed the most. Most of his stories deal with love triangles alongside ambiguously supernatural occurrences… this book ditches the supernatural and just deals straight with the love triangle. It’s very touching, it’s poignant, it’s real, it feels important. You will find a lot to connect to in this book. I also really like how it’s named after a Beatles song, it’s cool how Murakami likes the Beatles. The Beatles are awesome.</p>
                </div>
                <div className="book-recommendations murakami-second-color">
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

export default Murakami;