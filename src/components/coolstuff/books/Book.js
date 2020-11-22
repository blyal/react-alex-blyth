import React from 'react';
import classNames from 'classnames';

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
                                image: <img alt="Less Than Zero" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                author: 'Bret Easton Ellis',
                                image: <img alt="American Psycho" src="images/american-psycho.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Devils',
                                author: 'Dostoevsky',
                                image: <img alt="Devils" src="images/devils.jpg" height="30%" width="30%"/>
                            }
                        ]
                    },
                    {
                        title: 'My Brilliant Friend',
                        author: 'Elena Ferrante',
                        mainImage: <img src="images/my-brilliant-friend.jpg" alt="My Brilliant Friend" height='245' width='158' />,
                        paragraphs: [
                            'I didn’t expect to like this book based on what I’d heard about it, but apparently you shouldn’t judge a book by its cover. I’m very sure this is true now, because this is definitely one of the best books I’ve ever read. I’ve never read a book that so perfectly captures the experience of growing up, from both the personal perspective, as well as the perspective of someone embedded in a friend group, as well as embedded in a community. When you read My Brilliant Friend, you’ll surely have multiple “that’s so true!” moments, that maybe make you reflect on your own childhood from a new position. This is the effect of the story, told as it is from a retrospective narratorial position of an older woman reflecting and recalling her experience of growing up in 1950s Italy, alongside her best friend — the enigmatic, proud, dominant, and brilliant Lila.',
                            'Lila and Lenú, the main character, have a strange relationship — though I guess most relationships are probably stranger than they seem on the surface. This story covers the journey of their friendship from childhood to late adolescence, and in doing so uncovers the effect that our friends have on us as we develop, as well as the effect that the nature of our surrounding community has on us, as well as the fundamental biological changes that we undergo. Although this book isn’t exactly fun, its \'truth\' caused a lot of things to make sense to me in ways they previously hadn’t. A lot of tough things happen during childhood and adolescence! We are at the mercy of the structure of our community, we undergo disorienting physical and emotional changes, and the way people treat us and the way we feel about other people is constantly changing.',
                            'Lila and Lenú’s very competitive-yet-devoted friendship helps to get them through these tough times, but it also underscores the fact that underneath every friendship and every friend group are a set of dimensions among which we are constantly assessing ourselves and others relative to each other, and making evaluations of relative status. This book makes the case that these status evaluations are mediated by perception, and therefore are open to conscious interference — as when Lila downplays the importance of school, for example (when her family does not allow her to continue studying, where Lenú’s family does), and begins to emphasise the importance of her family’s shoemaking profession. However, the book also demonstrates that the fact that we do make these spontaneous evaluations of status means that our capacity and proclivity to make these judgements is built into the fundamental nature of our being, and is a primary motivating psychological force. Lila and Lenú are comparing and competing from the moment where they are young children, competing to see which of them will succumb to fear first, and their status–consciousness continues until the end of the book with Lenú’s scrutinising, along with the rest of their community, of Lila’s relationship with one of the neighbourhood’s very high-status men.',
                            'Although the book’s title may not be as simple as it appears, Lila is certainly Lenú’s brilliant friend. Their constant competing pushes them both to higher and higher achievement (as always, achievement relative to their peers and eventually to the wider community), and Lila’s hunger to constantly achieve and attain more catapults her to further and further attainment throughout her life, along with the difficulties that come along with attainment. It’s a fascinating and enlightening read, and there’s too much to say about it, so for now I’ll just say that you should put down whatever you’re currently reading and order a copy of this book.'
                        ],
                        related: [
                            {
                                title: 'The Secret History',
                                author: 'Donna Tartt',
                                image: <img alt="The Secret History" src="images/the-secret-history.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Persuasion',
                                author: 'Jane Austen',
                                image: <img alt="Persuasion" src="images/persuasion.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Boyhood',
                                year: '(2014)',
                                author: 'directed by Richard Linklater',
                                image: <img alt="Boyhood" src="images/boyhood.jpg" height="32.5%" width="32.5%"/>
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
                                image: <img alt="Less Than Zero" src="images/less-than-zero.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Notes from Underground',
                                author: 'Dostoevsky',
                                image: <img alt="Notes from Underground" src="images/notes-from-underground.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'American Psycho',
                                year: '(2000)',
                                author: 'directed by Mary Harron',
                                image: <img alt="American Psycho film" src="images/american-psycho-2000.jpg" height="30%" width="30%"/>
                            }
                        ]
                    },
                    {
                        title: 'Norwegian Wood',
                        author: 'Haruki Murakami',
                        mainImage: <img src="images/norwegian-wood.jpg" alt="Norwegian Wood" height='280' width='181.3' />,
                        paragraphs: [
                            'There’s something so hypnotic about Murakami’s writing. There are lots of books in the world which I can’t read because they’re just too damn boring, but Murakami never fails to hold my attention, to keep me wanting to come back for more. Norwegian Wood is probably the thing of his I’ve enjoyed the most. Most of his stories deal with love triangles alongside ambiguously supernatural occurrences… this book ditches the supernatural and just deals straight with the love triangle. It’s very touching, it’s poignant, it’s real, it feels important. You will find a lot to connect to in this book. I also really like how it’s named after a Beatles song, it’s cool how Murakami likes the Beatles. The Beatles are awesome.'
                        ],
                        related: [
                            {
                                title: 'The Wind–Up Bird Chronicle',
                                author: 'Haruki Murakami',
                                image: <img alt="The Wind-Up Bird Chronicle" src="images/wind-up-bird.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Lost in the Spanish Quarter',
                                author: 'Heddi Goodrich',
                                image: <img alt="Lost in the Spanish Quarter" src="images/spanish-quarter.jpg" height="30%" width="30%"/>
                            },
                            {
                                title: 'Burning',
                                year: '(2018)',
                                author: 'directed by Lee Chang-dong',
                                image: <img alt="Burning" src="images/burning.jpg" height="35%" width="35%"/>
                            }
                        ]
                    }
                ]
            }

    render() {

        let pocketStyles = classNames({
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
        var blurbStyles = classNames({
            'book-blurb': true,
            'murakami-blurb': this.props.title === 'Norwegian Wood'
          });


        return this.state.books.map((book) => (
            this.props.title === book.title ?
            <div className={pocketStyles}>  
                <div>
                    <div className={titleStyles}>
                        <h2><i>{book.title}</i></h2>
                        <span>{book.author}</span>
                    </div>

                    <div className={blurbStyles}>
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