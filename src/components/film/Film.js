import React from 'react';
import FilmPopOut from './FilmPopOut';
import Overlay from '../layout/Overlay';
import { v4 as uuid } from 'uuid';

class FilmStuff extends React.Component {

    constructor(props){
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }

    state = {
        popOut: false,
        selected: {
            id: uuid(),
            name: 'Paul Thomas Anderson',
            born: '1970',
            img: <img alt="The Big Lebowski" src="images/pta.jpg" height="70%" width="70%"/>,
            bio: ['PTA is one of those rare film geniuses (probably the best there is), whose mind is just on another level. His films are so deep and so layered that it’s hard to believe that he was even consciously aware of all the implications his films seem to have — instead it’s as if he just taps into some deep resource of brilliance and insight into life. Anderson is fascinated with human behaviour, human relationships, and human emotion. His films often revolve around broken families, the human desire for power and dominance, the search for meaning in life, as well as suffering and redemption. Anderson fully recognises how difficult life can be, but also how fulfilling and funny it can be. It’s hard to tell whether his films are comedies, tragedies, or dramas. For all the messed up shit that happens in PTA movies, I somehow leave them feeling that life is more worthwhile rather than less worthwhile. Maybe his films are not for everyone, but if you want something different, something challenging, and something that’s likely to hit close to home on some level, give him a go.'],
            recommendations: [
                {
                    title: 'Boogie Nights',
                    year: '1997'
                },
                {
                    title: 'Magnolia',
                    year: '1999'
                },
                {
                    title: 'There Will Be Blood',
                    year: '2007'
                },
                {
                    title: 'Punch–Drunk Love',
                    year: '2002'
                }
            ]
        },
        selectedType: 'Initialvalue',
        favFilms: [
            {
                id: uuid(),
                title: 'Boogie Nights',
                director: 'Paul Thomas Anderson',
                year: '1997',
                img: <img alt="Boogie Nights" src="images/boogie-nights-wallpaper.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Boogie Nights" src="images/boogie-nights-small.jpg" height="95%" width="95%"/>,
                description: ['This movie is everything — it’s about families and communities, and also rugged individualism. About discrimination and acceptance. Commitment and abandonment. Success and failure. If I explain the concept (a movie about pornstars in LA in the late 1970s), it sounds like a dumb adult comedy. In reality, while this movie is extremely funny (and sad at the same time), it’s ANYTHING but dumb. I was struck by it when I first watched it, and it’s still just as entertaining, insightful, real, and tragic now as it ever was. Mark Wahlberg is an absolute star, and Paul Thomas Anderson is an absolute genius — I still can’t believe that someone in their 20s was capable of making a movie this good.'],
                related: [
                    {
                        title: 'Magnolia',
                        year: '1999',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Magnolia" src="images/magnolia-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'The Wolf of Wall Street',
                        year: '2013',
                        director: 'Martin Scorsese',
                        img: <img alt="The Wolf of Wall Street" src="images/wolf-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Network',
                        year: '1976',
                        director: 'Sidney Lumet',
                        img: <img alt="Network" src="images/network-small.webp" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'The Big Lebowski',
                director: 'Joel and Ethan Coen',
                year: '1998',
                img: <img alt="The Big Lebowski" src="images/big-lebowski.png" height="70%" width="70%"/>,
                imgPortrait: <img alt="The Big Lebowski" src="images/big-lebowski-small.jpeg" height="95%" width="95%"/>,
                description: ['It’s hard to put into words what makes The Big Lebowski one of the greatest (arguably the greatest) movie ever made. Many people have tried and failed. To describe the story is almost irrelevant, because it’s hard to know what the story is. Even the characters struggle to keep track of what their objectives are throughout the movie. Plans are made and forgotten. No one knows who the bad guy really is, if there even is one, or maybe everybody is the bad guy? Hard to tell. What I can tell you though is that this movie was so influential that it legitimately started a religion (seriously, look it up — there are ordained priests and everything). That’s really all the reason you need to watch it, along with the fact that it’s probably the most quotable movie ever, but there are more, lots more reasons than I can share here. At the end of the day, though, as The Dude would say, “that’s just, like, your opinion man.”'],
                related: [
                    {
                        title: 'Inherent Vice',
                        year: '2014',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Inherent Vice" src="images/inherent-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Burn After Reading',
                        year: '2008',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="Burn After Reading" src="images/burn-after-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'O Brother Where Art Thou?',
                        year: '2000',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="O Brother Where Art Thou" src="images/o-brother-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'The Lord of the Rings Trilogy',
                director: 'Peter Jackson',
                year: '2001-03',
                img: <img alt="Lord of the Rings" src="images/lotr.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Lord of the Rings" src="images/lotr-portrait.jpg" height="95%" width="95%"/>,
                description: ['What can I even say? What is there to say? Everyone knows how awesome, how epic The Lord of the Rings is. There’s nothing I could say that would even begin to encapsulate that. And it’s definitely not just because I’m from New Zealand (haha). By the way, I’m fully aware that they are technically three separate movies, but I put them together so I’d have more space for other movies on my top ten, so no need to complain about that. Anyway, true fans watch all three movies at once anyway (extended editions, of course).'],
                related: [
                    {
                        title: 'Star Wars',
                        year: '1977',
                        director: 'George Lucas',
                        img: <img alt="Star Wars" src="images/star-wars-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Harry Potter series',
                        year: '2001–11',
                        director: 'Created by J.K. Rowling',
                        img: <img alt="Harry Potter Film Series" src="images/hp-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Game of Thrones TV series',
                        year: '2011–19',
                        director: 'Created by George R.R. Martin',
                        img: <img alt="Game of Throne TV series" src="images/got-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Once Upon a Time in Hollywood',
                director: 'Quentin Tarantino',
                year: '2019',
                img: <img alt="Once Upon a Time in Hollywood" src="images/hollywood.jpg" height="90%" width="90%"/>,
                imgPortrait: <img alt="Once Upon a Time in Hollywood" src="images/hollywood-small.jpg" height="95%" width="95%"/>,
                description: ['I’m sometimes a tad nervous when one of my favourite directors comes out with a new movie, because there’s always the chance that they underwhelm me. Some directors I have to wait 4–5 years for them to come out with something new, as was the case with Quentin Tarantino when he made this movie (I’m not going to write the title over and over again). Luckily for me, he absolutely knocked this one out of the park. It’s not that hard when you have Leo DiCaprio and Brad Pitt together in front of the camera, as well as the likes of Al Pacino in the supporting cast. Goddammit, this movie rules! The writing is awesome, the soundtrack is great, and the final sequence just blows your mind it’s so awesome. I admit I may be a bit biased, because this movie is extra awesome if you’re a film geek and know a bit of the history behind the semi–true story being portrayed. In any case, though. Go watch it, now!'],
                related: [
                    {
                        title: 'Inglourious Basterds',
                        year: '2007',
                        director: 'Quentin Tarantino',
                        img: <img alt="Inglourious Basterds" src="images/inglourious-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Boogie Nights',
                        year: '1997',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Boogie Nights" src="images/boogie-nights-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Hail, Caesar!',
                        year: '2016',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="Hail, Caesar!" src="images/hail-caesar-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Magnolia',
                director: 'Paul Thomas Anderson',
                year: '1999',
                img: <img alt="Magnolia" src="images/magnolia-cruise.jpg" height="80%" width="80%"/>,
                imgPortrait: <img alt="Magnolia" src="images/magnolia-small.jpg" height="95%" width="95%"/>,
                description: ['This list is going to be dominated by Paul Thomas Anderson movies, but I don’t want to mislead you: PTA movies are not for the feint of heart, and I don’t want to callously recommend them. When I started watching his movies, it usually took me at least 1–2 months to recover from one before I could move onto the next one. They are very intense experiences, and reveal some stuff about human beings that can be a bit hard to process at times. However, this one does have a lot of surface–level amusing stuff in it as well, such as Tom Cruise playing a celebrity dating guru, and John C. Reilly trying to play a serious, non–comedic roles but failing to eliminate any comedy from his performance. However, this movie is both funny and just plain deeep. And long. I’m not even going to attempt to explain what it’s about, but it’s certainly epic. I think you should watch the first ten minutes (which involves a very interesting prologue, related to the rest of the movie only by theme), and you’ll immediately know whether it’s the movie for you. Then you’ll watch the rest, and never be the same.'],
                related: [
                    {
                        title: 'Boogie Nights',
                        year: '1997',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Boogie Nights" src="images/boogie-nights-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'There Will Be Blood',
                        year: '2007',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="There Will Be Blood" src="images/twbb-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Nashville',
                        year: '1975',
                        director: 'Robert Altman',
                        img: <img alt="Nashville" src="images/nashville-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'There Will Be Blood',
                director: 'Paul Thomas Anderson',
                year: '2007',
                img: <img alt="There Will Be Blood" src="images/therewillbeblood.webp" height="80%" width="80%"/>,
                imgPortrait: <img alt="There Will Be Blood" src="images/twbb-small.jpg" height="95%" width="95%"/>,
                description: ['Paul Thomas Anderson is back, and he’s back making more movies with family as a central theme, but this time he goes right to the heart of the matter by just focussing on one relationship — a father and a son. However, as usual, PTA is impossible to box in, because this movie seems to be about so much more than just family. That theme is enmeshed within so many other themes and references and analogies derived from other important films. The family element sneaks up on you, as this film focusses on the raw determination of one man and his capitalist drive to succeed and then dominate through the progress and value that he creates for others. And coupled with PTA’s ability to write and direct very deep and important material is an absolute tour-de-force acting performance from Daniel Day–Lewis. I don’t think I’ve ever personally seen a performance as compelling as this one. Although there is subtle (and not-so-subtle) humour, as with all PTA movies, don’t watch this one if you’re looking for something light and funny at the end of a hard day. This one hits some deep chords.'],
                related: [
                    {
                        title: 'Magnolia',
                        year: '1999',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Magnolia" src="images/magnolia-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'No Country for Old Men',
                        year: '2007',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="No Country for Old Men" src="images/no-country-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: '2001: A Space Odyssey',
                        year: '1968',
                        director: 'Stanley Kubrick',
                        img: <img alt="2001: A Spacy Odyssey" src="images/2001-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Boyhood',
                director: 'Richard Linklater',
                year: '2014',
                img: <img alt="Boyhood" src="images/boyhood-poster.jpeg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Boyhood" src="images/boyhood-small.jpg" height="95%" width="95%"/>,
                description: ['Another one where the concept doesn’t do credit to how incredible the content and effect of this movie is. If you haven’t seen this movie already you’ve probably heard of it — a movie filmed over twelve years as the main actor grew from the age of 6 until 18. Although that’s a really awesome cinematic experiment to do, just saying it like that makes it sound a bit gimmicky, and just hearing that makes it difficult to understand how well this movie actually turned out. I think a LOT of credit has to go to writer–director Richard Linklater, whose insane levels of empathy and human understanding, as well as understanding of early–2000s culture, have led to a story which feels very representative of what it means to grow up during this century. I love how there’s no ‘plot’ — the kid just grows up, and experiences some really awesome, some really troubling, and some really regular times along the way, all of which seem so real, no doubt because Linklater paid such attuned attention to the lives of the actors and of his own kids as he was creating the movie, as well as to his own upbringing. Growing up a generation or two earlier allowed him to both emphasise the universal aspects of growing up as well as the specific elements of being a kid in the early 21st Century.'],
                related: [
                    {
                        title: 'Dazed and Confused',
                        year: '1991',
                        director: 'Richard Linklater',
                        img: <img alt="Dazed and Confused" src="images/dazed-and-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Harry Potter film series',
                        year: '2001-11',
                        director: 'created by J.K. Rowling',
                        img: <img alt="Harry Potter Film Series" src="images/hp-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Magnolia',
                        year: '1999',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="Magnolia" src="images/magnolia-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Goodfellas',
                director: 'Martin Scorsese',
                year: '1990',
                img: <img alt="Goodfellas" src="images/Goodfellas-banner.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Goodfellas" src="images/goodfellas-small.jpg" height="95%" width="95%"/>,
                description: ['Ooooh, what a movie. This movie is so awesome on so many levels. Firstly, it’s such an adrenaline rush — it’s just funny scene after exciting scene after funny and/or exciting scene, over-and-over again. It’s over two hours but certainly doesn’t feel like it, because it’s so fast–paced. Also, the characters are really awesome. Robert De Niro and Joe Pesci are both in their absolute primes here, at their top of their games. Just thinking about this movie makes me want to go back and watch it again. So many iconic moments. When you talk about movies that dominate the gangster genre, this has so be at or veery near the top of the list. Finally, it says something really interesting about America, this movie. Martin Scorsese on top form.'],
                related: [
                    {
                        title: 'The Wolf of Wall Street',
                        year: '2013',
                        director: 'Martin Scorsese',
                        img: <img alt="The Wolf of Wall Street" src="images/wolf-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'The Godfather',
                        year: '1972',
                        director: 'Francis Ford Coppola',
                        img: <img alt="The Godfather" src="images/godfather-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Casino',
                        year: '1995',
                        director: 'Martin Scorsese',
                        img: <img alt="Casino" src="images/casino-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Labyrinth',
                director: 'Jim Henson',
                year: '1986',
                img: <img className='labyrinth-img' alt="Labyrinth" src="images/labyrinth.png" height="60%" width="60%"/>,
                imgPortrait: <img alt="Labyrinth" src="images/labyrinth-portrait.jpg" height="95%" width="95%"/>,
                description: ['With puppets that look like the Muppets, starring David Bowie, funded by George Lucas, written by a combination of a children’s book writer, a member of Monty Python, and the creator of The Muppets, this movie is unique to say the least. I had heard a lot about it before I saw it for the first time, and when I did it hit me hard. If you are at all interested in the idea of archetypes, then this movie is definitely for you, because I think it absolutely nails them. I really like movies that are entertaining on the surface level, but then have a lot going on under the hood. It’s basically the story of a teenager who has to rescue her infant sibling (for me, her child self), after she has become a surly teenager, and to do so she has to navigate a dream–like labyrinth filled with challenging tests and psychedelic puppet characters, with the ultimate enemy she has to confront being the malevolent dreamlike David Bowie, who has kidnapped her sibling. Only when she confronts him and what he represents can she reawaken the inner child, according to my analysis. Haha damn, I gave away the plot of the movie. Watch it anyway, it’s worth it just to see David hanging out with the muppets.'],
                related: [
                    {
                        title: 'The NeverEnding Story',
                        year: '1984',
                        director: 'Wolfgang Petersen',
                        img: <img alt="The NeverEnding Story" src="images/neverending-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Inside Out',
                        year: '2015',
                        director: 'Pete Docter',
                        img: <img alt="Inside Out" src="images/inside-out-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Spirited Away',
                        year: '2001',
                        director: 'Hayao Miyazaki',
                        img: <img alt="Spirited Away" src="images/spirited-away-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                title: 'No Country for Old Men',
                director: 'Joel and Ethan Coen',
                year: '2007',
                img: <img alt="No Country for Old Men" src="images/no-country.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="No Country for Old Men" src="images/no-country-small.jpg" height="95%" width="95%"/>,
                description: ['This movie is probably the darkest that the Coen Brothers have ever gone. It’s a Western for the 21st Century — a bunch of badasses (a ranger, a mysterious killer, and a sheriff) all after the same thing — a big suitcase of money. I have to say, The Coen Brothers often just make it easy for us that way. At least three of their most well–known movies that I can think of involve a bunch of people all after a big suitcase of money. Which is pretty interesting. It’s very easy for the audience to understand, and it’s also an interesting artistic choice, which says something very plainly about human motivation and where it can lead us. This movie is super exhilarating, and super strange. It breaks so many rules, and it’s an absolute triumph for this awesome brotherly filmmaking team.'],
                related: [
                    {
                        title: 'Fargo',
                        year: '1995',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="Fargo" src="images/fargo-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'There Will Be Blood',
                        year: '2007',
                        director: 'Paul Thomas Anderson',
                        img: <img alt="There Will Be Blood" src="images/twbb-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Blood Simple',
                        year: '1984',
                        director: 'Joel and Ethan Coen',
                        img: <img alt="Blood Simple" src="images/blood-simple-small.jpg" height="100%" width="100%" />
                    }
                ]
            }
        ],
        favDirectors: [
            {
                id: uuid(),
                name: 'Paul Thomas Anderson',
                born: '1970',
                img: <img alt="Paul Thomas Anderson" src="images/pta.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Paul Thomas Anderson" src="images/pta-portrait.png" height="90%" width="90%"/>,
                bio: ['PTA is one of those rare film geniuses (probably the best there is), whose mind is just on another level. His films are so deep and so layered that it’s hard to believe that he was even consciously aware of all the implications his films seem to have — instead it’s as if he just taps into some deep resource of brilliance and insight into life. Anderson is fascinated with human behaviour, human relationships, and human emotion. His films often revolve around broken families, the human desire for power and dominance, the search for meaning in life, as well as suffering and redemption. Anderson fully recognises how difficult life can be, but also how fulfilling and funny it can be. It’s hard to tell whether his films are comedies, tragedies, or dramas. For all the messed up shit that happens in PTA movies, I somehow leave them feeling that life is more worthwhile rather than less worthwhile. Maybe his films are not for everyone, but if you want something different, something challenging, and something that’s likely to hit close to home on some level, give him a go.'],
                recommendations: [
                    {
                        title: 'Boogie Nights',
                        year: '1997',
                        img: <img alt="Boogie Nights" src="images/boogie-nights-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Magnolia',
                        year: '1999',
                        img: <img alt="Magnolia" src="images/magnolia-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'There Will Be Blood',
                        year: '2007',
                        img: <img alt="There Will Be Blood" src="images/twbb-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Punch–Drunk Love',
                        year: '2002',
                        img: <img alt="Punch-Drunk Love" src="images/punch-drunk-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Joel and Ethan Coen',
                born: '1954, 1957',
                img: <img alt="The Coen Brothers" src="images/coenbros.jpeg" height="70%" width="70%"/>,
                imgPortrait: <img alt="The Coen Brothers" src="images/coen-bros-portrait.jpg" height="90%" width="90%"/>,
                bio: ['The Coen Brothers are such a gift to cinema, and I’m so glad that they managed to get to the position that they’re in, where they can pretty much get the required money to make any film they want, and then write, produce, and direct it themselves. Every actor wants to work with them, which is totally unsurprising. There’s not an aspect of filmmaking that they haven’t mastered. Their direction and editing is so perfect. If anyone can match Tarantino for writing engaging and entertaining dialogue, it’s The Coen Brothers. And their cinematography, photographed by the brilliant Roger Deakins, is unparalleled. The Coen Brothers are filmmakers who I will very easily nerd out about, as you can see. For me, they are responsible for some of the best films ever made.'],
                recommendations: [
                    {
                        title: 'The Big Lebowski',
                        year: '1998',
                        img: <img alt="The Big Lebowski" src="images/big-lebowski-small.jpeg" height="100%" width="100%" />
                    },
                    {
                        title: 'No Country for Old Men',
                        year: '2007',
                        img: <img alt="No Country for Old Men" src="images/no-country-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Burn After Reading',
                        year: '2008',
                        img: <img alt="Burn After Reading" src="images/burn-after-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Fargo',
                        year: '1995',
                        img: <img alt="Fargo" src="images/fargo-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Richard Linklater',
                born: '1960',
                img: <img alt="Richard Linklater" src="images/linklater-yolo.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Richard Linklater" src="images/linklater-portrait.jpg" height="90%" width="90%"/>,
                bio: [<span>I’ve actually known about Richard Linklater since I was a kid, funnily enough, even though he’s maybe not the most mainstream director out there. But as a kid I was a big Jack Black fan, and had the good fortune to have a DVD of <i>School of Rock</i> directed by none other than Richard Linklater. I saw him talking on the 'Making of’ documentary on the DVD, and so remembered him when I later started coming across his name as a film student at uni. At first I wasn’t that interested, as I associated him as just being a director of kids’ movies. How wrong I was, and I’m very stoked to have found that out. Richard Linklater is a director of movies with <i>heart</i>. He has made such a diverse range of films that he’s hard to categorise, but I would say he may be the most emotionally intelligent director there is. He’s able to bring his characters to life as social beings, and rather than have a plot, most often he likes to explore situations that characters find themselves in. Because his characters are so reminiscent of real life, rather than just being dramatic creations, his movies are very engaging on an emotional level. Time and again I’ve seen him hit the nail on the head regarding any situation a movie of his tackles, whether it’s a romance (the <i>Before</i> series), a high school party (<i>Dazed and Confused</i>, which I actually saw as a 15-year old, not knowing it was his movie), or even just people hanging out (<i>Slacker</i>). He’s also a director who likes to experiment and take risks, which somehow always seem to pay off — like shooting a film over 12 years as the protagonist’s actor was growing up (<i>Boyhood</i>), or creating a film that investigates the blurred difference between dreams and reality (<em>Waking Life</em>). Simply put, Richard Linklater is the man. Mucho respect.</span>],
                recommendations: [
                    {
                        title: 'Boyhood',
                        year: '2014',
                        img: <img alt="Boyhood" src="images/boyhood-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Dazed and Confused',
                        year: '1991',
                        img: <img alt="Dazed and Confused" src="images/dazed-and-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Waking Life',
                        year: '2001',
                        img: <img alt="Waking Life" src="images/waking-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Before Sunrise',
                        year: '1995',
                        img: <img alt="Before Sunrise" src="images/before-sunrise-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Quentin Tarantino',
                born: '1963',
                img: <img alt="Quentin Tarantino" src="images/tarantino-keitel.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Quentin Tarantino" src="images/tarantino-portrait.jpg" height="90%" width="90%"/>,
                bio: ['Quentin Tarantino needs no introduction. If you haven’t heard of him, I’m sure you’ve been living under a rock. He is probably the closest thing to a rock star director that we have working today. His films are a testament to testosterone — whether they revolve around a freed slave-turned-bounty hunter in 1850s antebellum American South seeking to free his wife from a cruel slaveowner, or a deadly female assassin looking to exact revenge on her former assassin team (kind of the reverse of Charlie’s Angels) who killed her husband and child when she tried to leave the squad. I really can’t praise Tarantino enough. He really opened my eyes to what cinema can achieve. I remember watching Pulp Fiction over and over again when I first discovered Tarantino. There’s a reason the only film Leonardo DiCaprio has appeared in in the last five years was written and directed by Tarantino. He’s a master. His films are exciting, epic, and totally politically incorrect, for which he makes no apologies.'],
                recommendations: [
                    {
                        title: 'Pulp Fiction',
                        year: '1994',
                        img: <img alt="Pulp Fiction" src="images/pulp-small.jpeg" height="100%" width="100%" />
                    },
                    {
                        title: 'Inglourious Basterds',
                        year: '2007',
                        img: <img alt="Inglourious Basterds" src="images/inglourious-small.jpg" height="98%" width="98%" />
                    },
                    {
                        title: 'Once Upon a Time in Hollywood',
                        year: '2019',
                        img: <img alt="Once Upon a Time in Hollywood" src="images/hollywood-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Django Unchained',
                        year: '2012',
                        img: <img alt="Django Unchained" src="images/django-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Martin Scorsese',
                born: '1942',
                img: <img alt="Martin Scorsese" style={{border: '#e0e7e7 solid 2px'}} src="images/scorsese.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Martin Scorsese" style={{border: '#e0e7e7 solid 2px'}} src="images/scorsese-portrait.jpg" height="95%" width="95%"/>,
                bio: ['What can I say? He’s the master! Every single director on my list would probably name Martin Scorsese as one of their inspirations. He just knows how to craft a really exciting and epic movie, A lot of them are testosterone-fests. However, I don’t say that pejoratively at all. Scorsese knows how to excite an audience, how to get their hearts pounding (you can definitely see a bit of where Tarantino got his inspiration). His films don’t really follow conventional narrative structures, but usually explore a person or group as their lives go on (whether it’s gangsters in New York, Taxi Drivers in New York, boxers in New York, Jesus Christ, stockbrokers in New York… it’s usually in New York). Scorsese films are modern American myths on the screen, and so are an important part of Western cultural heritage in the 20th Century. There’s so much to say about Scorsese… all I can say now is that I’m a Scorsese geek. His films always express something important, are very engaging, and actors always bring their A-game to the table when Scorsese is behind the camera.'],
                recommendations: [
                    {
                        title: 'Goodfellas',
                        year: '1991',
                        img: <img alt="Goodfellas" src="images/goodfellas-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'The Wolf of Wall Street',
                        year: '2013',
                        img: <img alt="The Wolf of Wall Street" src="images/wolf-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'The Departed',
                        year: '2006',
                        img: <img alt="The Departed" src="images/departed-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Raging Bull',
                        year: '1980',
                        img: <img alt="Raging Bull" src="images/raging-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Hayao Miyazaki',
                born: '1941',
                img: <img alt="Hayao Miyazaki" style={{border: '#47afd2 solid 2px'}} src="images/miyazaki.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Hayao Miyazaki" style={{border: '#47afd2 solid 2px'}} src="images/miyazaki-portrait.jpeg" height="90%" width="90%"/>,
                bio: ['Miyazaki is the man behind Studio Ghibli, which you may know, and has directed many of their most successful films. Studio Ghibli is a Japanese company that makes animated movies. They are ostensibly for children, but I actually know far more people who enjoy Studio Ghibli movies as an adult than I did as a kid. His movies are very beautiful. My other favourite directors are more in the realms of the macho, the emotional, and the strange, but if you prefer something sweet and heart–warming, but also really good quality, then go Miyazaki. The films are Japanese, but if you can’t stomach subtitles a lot of them has been dubbed in English by Disney, who saw such talent in Miyazaki that they bought the rights to dub and distribute his movies in the West. His films usually follow a female child, special in some way, who has to go through a fairytale–like hardship, and by connecting with those around her is able to do so. The films are very insightful for children’s movies — characters are often not what they first seem, the binary between good and evil is brought into question, and the beauty of innocence is contrasted with the inevitability and necessity of growing up, by overcoming hardships.'],
                recommendations: [
                    {
                        title: 'Spirited Away',
                        year: '2001',
                        img: <img alt="Spirited Away" src="images/spirited-away-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: "Howl's Moving Castle",
                        year: '2004',
                        img: <img alt="Howl's Moving Castle" src="images/howl's-moving-small.png" height="100%" width="100%" />
                    },
                    {
                        title: 'Laputa – Castle in the Sky',
                        year: '1986',
                        img: <img alt="Laputa — Castle in the Sky" src="images/laputa-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: "Kiki's Delivery Service",
                        year: '1989',
                        img: <img alt="Kiki's Delivery Service" src="images/kiki's-delivery-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'Wes Anderson',
                born: '1969',
                img: <img alt="Wes Anderson" src="images/wes-anderson-bill.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="Wes Anderson" src="images/wes-anderson-portrait.jpg" height="80%" width="80%"/>,
                bio: ['No relation to Paul Thomas, Wes is completely his own Anderson. Completely — there’s no director like Wes. His films are VERY unique. They have a very definite style, so much so that if you saw two or three of his movies, then you’d be able to pick his movies out of a crowd, even if you’re not a film enthusiast. Like PTA though, Wes is very interested in family dynamics and how they shape us as people. His films usually involve Owen Wilson and/or Bill Murray feeling a bit meaningless in life, working through a family– or career–related problem. Owen Wilson and Wes Anderson actually went to university together, and began their film careers together. Though he started writing with Wilson, and although he still closely collaborates with other writers, Wes has evolved into a auteur star director. The dialogue in his films is razor–sharp, the directing style is so unique that it’s worth the price of admission alone just to witness, and his actors always give amazing performances. Like Tarantino, Wes has become one of these directors that the most in–demand actors are desperate for the chance to work with. Although for me sometimes his films are a bit too cute, he mostly hits home runs.'],
                recommendations: [
                    {
                        title: 'The Grand Budapest Hotel',
                        year: '2014',
                        img: <img alt="The Grand Budapest Hotel" src="images/the-small-budapest-hotel.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Fantastic Mr Fox',
                        year: '2009',
                        img: <img alt="Fantastic Mr Fox" src="images/fantastic-mr-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Rushmore',
                        year: '1998',
                        img: <img alt="Rushmore" src="images/rushmore-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'The Royal Tenenbaums',
                        year: '2001',
                        img: <img alt="The Royal Tenenbaums" src="images/the-royal-small.jpg" height="100%" width="100%" />
                    }
                ]
            },
            {
                id: uuid(),
                name: 'David Lynch',
                born: '1946',
                img: <img alt="David Lynch" src="images/david-lynch.jpg" height="70%" width="70%"/>,
                imgPortrait: <img alt="David Lynch" src="images/lynch-portrait.jpeg" height="80%" width="80%"/>,
                bio: ['Ooooh, David Lynch. What fascinating director. He’s weird, he’s surreal. He doesn’t really direct movies, he directs dreams. His films follow their own logic — some are easy to follow, some are impossible, but there’s always something interesting going on. I’m a big David Lynch fan. I enjoy most of his films, and some I enjoy immensely. Actually though, the best thing he ever made is not a film but a TV Show called Twin Peaks from the early–90s, one of the first real TV dramas as far as I understand it, in the sense that TV Dramas are produced today. If you don’t mind something a bit weird, something a bit off the reservation, something that is perhaps a pathway into the unconscious (or at least tries to be), David Lynch is the guy. There’s some deep truth there, and a lot to explore.'],
                recommendations: [
                    {
                        title: 'Mulholland Drive',
                        year: '2001',
                        img: <img alt="Mulholland Drive" src="images/mulholland-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Wild at Heart',
                        year: '1990',
                        img: <img alt="Wild at Heart" src="images/wild-at-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Twin Peaks: Fire Walk with Me',
                        year: '1992',
                        img: <img alt="Twin Peaks: Fire Walk with Me" src="images/twin-peaks-small.jpg" height="100%" width="100%" />
                    },
                    {
                        title: 'Blue Velvet',
                        year: '1986',
                        img: <img alt="Blue Velvet" src="images/blue-velvet-small.jpg" height="100%" width="100%" />
                    }
                ]
            }
        ]
    }

    togglePopOut = e => {
        this.setState({
            popOut: !this.state.popOut
        });
    };

    selectItem = (item, type) => {
        this.setState({
            popOut: !this.state.popOut,
            selected: item,
            selectedType: type
        });
    };

    render() {
        return (
            <>
            <h2 className="cyan">Film</h2>
                <hr />
            <div className="page-flow">
                <div className="center-content cs-film-blurb">
                    <p>I really like cinema. I did my first degree in Film, have written and directed several short films, and enjoy talking and writing about films.
                    So although maybe this page could have been incorporated into the 'Cool Stuff' page, I have too much to say about film for that, and lets be honest, film deserves a page of its own.
                    </p>
                    <p>
                        More content to come.
                    </p>
                    <p>Please click the name of a movie or director for further information.</p>
                </div>
                <br />

                <div className="flex-center-content">
                    <div className="film-list">
                        <h3 className="cyan centered">My Top Ten Films of All Time</h3>
                        <ol className="cool-list">
                            {
                                this.state.favFilms.map((film) => (
                                    <li key={film.id} onClick={() => this.selectItem(film, 'film')}>{film.title}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <br />

                <div className="flex-center-content">
                    <div className="film-list">
                        <h3 className="cyan centered">Best Directors in the World*</h3>
                        <p className='disclaimer'>*as far as I know. There are lots of amazing directors I am yet to discover.</p>
                        <ol className="cool-list" id="director-list">
                            {
                                this.state.favDirectors.map((director) => (
                                    <li key={director.id} onClick={() => this.selectItem(director, 'director')}>{director.name}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <br />
                
                

            </div>

            <FilmPopOut popOut={this.state.popOut} type={this.state.selectedType} selected={this.state.selected} close={this.togglePopOut} />
            <Overlay open={this.state.popOut} type="filmPopOut" close={this.togglePopOut} />
            </>
        );
    }
    componentDidMount() {
        this.props.toggle(true, 'filmstuff');
      }
    componentDidUpdate(){
        if (this.state.popOut){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }
      componentWillUnmount() {
        this.props.toggle(false, 'filmstuff');
      }
}

export default FilmStuff;