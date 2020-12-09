import React from 'react';
import SelectedContent from './SelectedContent';
import Ferriss from './podcasts/Ferriss';
import Rogan from './podcasts/Rogan';
import HappinessLab from './podcasts/HappinessLab';
import Harris from './podcasts/Harris';
import Ellis from './podcasts/Ellis';
import Book from './books/Book';
import { v4 as uuid } from 'uuid';
var classNames = require('classnames');

class CoolStuff extends React.Component {
    
    state = {
        podcastList: true,
        podcasts: [
            {
                id: uuid(),
                type: 'podcast',
                selected: false,
                title: 'The Tim Ferriss Show',
                content: <Ferriss />
            },
            {
                id: uuid(),
                type: 'podcast',
                selected: false,
                title: 'The Joe Rogan Experience',
                content: <Rogan />
            },
            {
                id: uuid(),
                type: 'podcast',
                selected: false,
                title: 'The Happiness Lab with Dr Laurie Santos',
                content: <HappinessLab />
            },
            {
                id: uuid(),
                type: 'podcast',
                selected: false,
                title: 'Making Sense with Sam Harris',
                content: <Harris />
            },
            {
                id: uuid(),
                type: 'podcast',
                selected: false,
                title: 'The Bret Easton Ellis Podcast',
                content: <Ellis />
            }
        ],
        bookList: true,
        books: [
            {
                id: uuid(),
                type: 'book',
                selected: false,
                title: 'Notes from Underground by Fyodor Dostoevsky',
                content: <Book title={'Notes from Underground'} />
            },
            {
                id: uuid(),
                type: 'book',
                selected: false,
                title: 'My Brilliant Friend by Elena Ferrante',
                content: <Book title={'My Brilliant Friend'} />
            },
            {
                id: uuid(),
                type: 'book',
                selected: false,
                title: 'American Psycho by Bret Easton Ellis',
                content: <Book title={'American Psycho'} />
            },
            {
                id: uuid(),
                type: 'book',
                selected: false,
                title: 'Norwegian Wood by Haruki Murakami',
                content: <Book title={'Norwegian Wood'} />
            }
        ]
    }
    
    togglePodcast = (id) => {
        this.setState({
            podcastList: !this.state.podcastList,
            podcasts: this.state.podcasts.map(podcast => {
                if (podcast.id === id) {
                    podcast.selected = true;
                } else {
                    podcast.selected = false;
                }
                return podcast;
            })
        })
    }

    toggleBook = (id) => {
        this.setState({
            bookList: !this.state.bookList,
            books: this.state.books.map(book => {
                if (book.id === id) {
                    book.selected = true;
                } else {
                    book.selected = false;
                }
                return book;
            })
        })
    }

    render() {

        var podcastView = classNames({
            'pocket-view': true,
            'pocket-view-podcast': !this.state.podcastList
          });

        var bookView = classNames({
            'pocket-view': true,
            'pocket-view-book': !this.state.bookList
          });

        return (
            <>
            <h2 className="cyan">Cool Stuff</h2>
                <hr />
            
            <div className="page-flow">

                <div className="center-content cs-film-blurb">
                    <p>
                        The title says it all. More content to come.
                    </p>
                    <p>
                        Click on the <span className="cyan">colored</span> cool stuff on this page for further cool facts.
                    </p>
                </div>
                <br />

                <div className="cover-container">
                    <div className="cover-main"></div>
                    <div className="cover-middle"></div>
                    <div className="cover-main cover-shadow"></div>
                </div>
        
            
                <div className={podcastView}>
                    <div className="content-pocket flex-50">
                        <h3>Podcasts I Like</h3>
                        <ul className="cool-list cyan">
                            {
                                this.state.podcasts.map((podcast) => (
                                    <li key={podcast.id} onClick={() => this.togglePodcast(podcast.id)}>{podcast.title}</li>
                                ))
                            }
                        </ul>
                    </div>  
                    
                    <SelectedContent content={this.state.podcasts} backButton={this.togglePodcast} />
                </div>
                <br />

                <div className={bookView}>
                    <div className="content-pocket flex-50">
                        <h3>Books I Like</h3>
                        <ul className="cool-list cyan">
                            {
                                this.state.books.map((book) => (
                                    <li key={book.id} onClick={() => this.toggleBook(book.id)}>{book.title}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <SelectedContent content={this.state.books} backButton={this.toggleBook} />
                </div>
                <br />
            </div>

            </>
        );
    }
}

export default CoolStuff;