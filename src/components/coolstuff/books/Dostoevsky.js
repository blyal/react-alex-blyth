import React from 'react';

function Dostoevsky() {
    return (
        <div className="dostoevsky-pocket">  
            <div>
                <h2>Notes from Underground</h2>
                <hr />
                <h3>Dostoevsky</h3>
                <div className="pocket-img-container">
                    <img src="images/dostoevsky.jpg" alt="Notes from Underground" height='25%' width='25%' />
                </div>
                <p>Within two pages of reading this book, I was laughing out loud. Notes from Underground is a very dark comedy following a bitter, lonely man’s half-arsed attempt to reconnect with humanity. Dostoevsky is an incredibly astute observer of human behaviour, thought, and motivation. Whereas most people see the world as they’d like it to be, Dostoevsky sees it as it actually is — or, to my mind, gets closer than almost anyone. The narrator in this book is such a loser, but he’s such a real loser. His resentful thought patterns are so realistic, and when you read this book you will laugh at yourself because you will definitely find echoes of some bitter and nonsensical thoughts you’ve had yourself in your less fine moments. The narrator seems like a caricature, like his characterisation is taken to an extreme, but then again I don’t know… People do get very resentful. It’s a fantastic book, it’s not too long, it’s full of insight. A great introduction to Dostoevsky.</p>
                <div className="recommended-things">
                    <p>Similar Books</p>
                    <hr />
                    <ul>
                        <li>Less Than Zero by Bret Easton Ellis</li>
                        <li>American Psycho by Bret Easton Ellis</li>
                        <li>Devils by Fyodor Dostoevsky</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dostoevsky;