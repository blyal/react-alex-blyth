import React from 'react';
var classNames = require('classnames');

class Book extends React.Component {

    state = {
                books: [
                    {
                        title: 'Notes from Underground',
                        author: 'Dostoevsky',
                        mainImage: <img src="images/notes-from-underground.jpg" alt="Notes from Underground" height='234' width='152.7' />,
                        paragraphs: [
                            'Within two pages of reading this book, I was laughing out loud. Notes from Underground is a very dark comedy following a bitter, lonely man’s half-arsed attempt to reconnect with humanity.',
                            'Dostoevsky is an incredibly astute observer of human behaviour, thought, and motivation. Whereas most people see the world as they’d like it to be, Dostoevsky sees it as it actually is — or, to my mind, gets closer than almost anyone. The narrator in this book is such a loser, but he’s such a real loser. His resentful thought patterns are so realistic, and when you read this book you will laugh at yourself because you will definitely find echoes of some bitter and nonsensical thoughts you’ve had yourself in your less fine moments. The narrator seems like a caricature, like his characterisation is taken to an extreme, but then again I don’t know… we humans do get very resentful.',
                            'It’s a fantastic book, it’s not too long, it’s full of insight. A great introduction to Dostoevsky.'
                        ],
                        related: [
                            {
                                title: 'Less Than Zero',
                                author: 'Bret Easton Ellis',
                                image: <img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                author: 'Bret Easton Ellis',
                                image: <img alt="Logo" src="images/american-psycho.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Devils',
                                author: 'Dostoevsky',
                                image: <img alt="Logo" src="images/devils.jpg" height="30%" width="30%"/>
                            }
                        ]
                    },
                    {
                        title: 'American Psycho',
                        author: 'Bret Easton Ellis',
                        mainImage: <img src="images/american-psycho.jpg" alt="American Psycho" height='234' width='152.7' />,
                        paragraphs: [
                            'Disclaimer — not for the faint–hearted or easily–offended. This book deals with some dark shit. However, this doesn’t mean that it’s not shit that’s worth dealing with. In fact, my personal conviction is that the darkest shit is the shit we need to deal with the most. If you look straight at something that, not just makes you scared, but horrifies you, you’re stronger for it.',
                            'American Psycho is a fascinating reflection on the masks we wear in society, the nature of the modern capitalist social environment, the pain we hide within us, and the damage it is capable of causing if it escapes our attempts to contain it. Outside of that, American Psycho is a hilarious deadpan comedy, which might sound a little strange, but for the first half of the book it’s hard to call it anything other than a comedy. Bret Easton Ellis’s minimalism is stylistically perfect, and the wit it delivers is dynamite, Also, many of the narrative ideas of the book are comedy gold — the characters all looking so alike that they fail to tell each other apart, for example. Then the book plunges into the darkness.',
                            'I admire Ellis — having the courage and the daring to publish something like this is quite something. Humans are capable of some very dangerous stuff. Instead of ignoring and suppressing that, we need to investigate it, to figure our how this dark stuff comes about in the first place, and to ensure that we can stay on the best path possible ourselves.'
                        ],
                        related: [
                            {
                                title: 'Less Than Zero',
                                author: 'Bret Easton Ellis',
                                image: <img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Notes from Underground',
                                author: 'Dostoevsky',
                                image: <img alt="Logo" src="images/notes-from-underground.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                year: '(2000)',
                                author: 'directed by Mary Harron',
                                image: <img alt="Logo" src="images/american-psycho-2000.jpg" height="30%" width="30%"/>
                            }
                        ]
                    },
                    {
                        title: 'My Brilliant Friend',
                        author: 'Elena Ferrante',
                        mainImage: <img src="images/american-psycho.jpg" alt="American Psycho" height='234' width='152.7' />,
                        paragraphs: [
                            'Disclaimer — not for the faint–hearted or easily–offended. This book deals with some dark shit. However, this doesn’t mean that it’s not shit that’s worth dealing with. In fact, my personal conviction is that the darkest shit is the shit we need to deal with the most. If you look straight at something that, not just makes you scared, but horrifies you, you’re stronger for it.',
                            'American Psycho is a fascinating reflection on the masks we wear in society, the nature of the modern capitalist social environment, the pain we hide within us, and the damage it is capable of causing if it escapes our attempts to contain it. Outside of that, American Psycho is a hilarious deadpan comedy, which might sound a little strange, but for the first half of the book it’s hard to call it anything other than a comedy. Bret Easton Ellis’s minimalism is stylistically perfect, and the wit it delivers is dynamite, Also, many of the narrative ideas of the book are comedy gold — the characters all looking so alike that they fail to tell each other apart, for example. Then the book plunges into the darkness.',
                            'I admire Ellis — having the courage and the daring to publish something like this is quite something. Humans are capable of some very dangerous stuff. Instead of ignoring and suppressing that, we need to investigate it, to figure our how this dark stuff comes about in the first place, and to ensure that we can stay on the best path possible ourselves.'
                        ],
                        related: [
                            {
                                title: 'Less Than Zero',
                                author: 'Bret Easton Ellis',
                                image: <img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Notes from Underground',
                                author: 'Dostoevsky',
                                image: <img alt="Logo" src="images/notes-from-underground.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                year: '(2000)',
                                author: 'directed by Mary Harron',
                                image: <img alt="Logo" src="images/american-psycho-2000.jpg" height="30%" width="30%"/>
                            }
                        ]
                    },
                    {
                        title: 'Norwegian Wood',
                        author: 'Haruki Murakami',
                        mainImage: <img src="images/american-psycho.jpg" alt="American Psycho" height='234' width='152.7' />,
                        paragraphs: [
                            'There’s something about Murakami’s writing that is just so hypnotic. There are lots of books in the world which I can’t read because they’re just too damn boring, but Murakami never fails to hold my attention, to keep me wanting to come back for more. Norwegian Wood is probably the thing of his I’ve enjoyed the most. Most of his stories deal with love triangles alongside ambiguously supernatural occurrences… this book ditches the supernatural and just deals straight with the love triangle. It’s very touching, it’s poignant, it’s real, it feels important. You will find a lot to connect to in this book. I also really like how it’s named after a Beatles song, it’s cool how Murakami likes the Beatles. The Beatles are awesome.'
                        ],
                        related: [
                            {
                                title: 'Less Than Zero',
                                author: 'Bret Easton Ellis',
                                image: <img alt="Logo" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Notes from Underground',
                                author: 'Dostoevsky',
                                image: <img alt="Logo" src="images/notes-from-underground.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                year: '(2000)',
                                author: 'directed by Mary Harron',
                                image: <img alt="Logo" src="images/american-psycho-2000.jpg" height="30%" width="30%"/>
                            }
                        ]
                    }
                ]
            }

    render() {

        var pocketStyles = classNames({
            'book-pocket': true,
            'dostoevsky-pocket': this.props.title === 'Notes from Underground',
            'american-psycho-pocket': this.props.title === 'American Psycho',
            'ferrante-pocket': this.props.title === 'My Brilliant Friend',
            'murakami-pocket': this.props.title === 'Norwegian Wood'
          });

        var titleStyles = classNames({
            'book-title': true,
            'dostoevsky-second-color': this.props.title === 'Notes from Underground',
            'american-psycho-second-color': this.props.title === 'American Psycho',
            'ferrante-second-color': this.props.title === 'My Brilliant Friend',
            'murakami-second-color': this.props.title === 'Norwegian Wood'
          });

        var recommendationStyles = classNames({
            'book-recommendations': true,
            'dostoevsky-second-color': this.props.title === 'Notes from Underground',
            'american-psycho-second-color': this.props.title === 'American Psycho',
            'ferrante-second-color': this.props.title === 'My Brilliant Friend',
            'murakami-second-color': this.props.title === 'Norwegian Wood'
          });

        return this.state.books.map((book) => (
            this.props.title === book.title ?
            <div className={pocketStyles}>  
                <div>
                    <div className={titleStyles}>
                        <h2><i>{book.title}</i></h2>
                        <span>{book.author}</span>
                    </div>

                    <div className="book-blurb">
                        {book.mainImage}
                       {book.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
                    </div>
                    <div className={recommendationStyles}>
                    <p>Related</p>
                        <table>
                            <tbody>
                                <tr>
                                    {book.related.map((item) => <td><div>{item.image}</div></td>)}
                                </tr>
                                <tr>
                                    {book.related.map((item) => 
                                        'year' in item ? 
                                        <td><i>{item.title} <span>{item.year}</span></i><br /><span>{item.author}</span></td> :
                                        <td><i>{item.title}</i><br /><span>{item.author}</span></td>)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            : null
        ))   
    }
}

export default Book;