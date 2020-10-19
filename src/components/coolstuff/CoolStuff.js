import React from 'react';
import SelectedContent from './SelectedContent';
import Ferriss from './podcasts/Ferriss';
import Rogan from './podcasts/Rogan';
import HappinessLab from './podcasts/HappinessLab';
import Harris from './podcasts/Harris';
import { v4 as uuid } from 'uuid';
var classNames = require('classnames');

class CoolStuff extends React.Component {
    
    state = {
        podcastList: true,
        podcasts: [
            {
                id: uuid(),
                selected: false,
                title: 'The Tim Ferriss Show',
                content: <Ferriss />
            },
            {
                id: uuid(),
                selected: false,
                title: 'The Joe Rogan Experience',
                content: <Rogan />
            },
            {
                id: uuid(),
                selected: false,
                title: 'The Happiness Lab with Dr Laurie Santos',
                content: <HappinessLab />
            },
            {
                id: uuid(),
                selected: false,
                title: 'Making Sense with Sam Harris',
                content: <Harris />
            }
        ],
        bookList: true,
        books: [
            {
                id: uuid(),
                selected: false,
                title: 'Notes from Underground by Fyodor Dostoevsky'
            },
            {
                id: uuid(),
                selected: false,
                title: 'American Psycho by Bret Easton Ellis'
            },
            {
                id: uuid(),
                selected: false,
                title: 'My Brilliant Friend by Elena Ferrante'
            },
            {
                id: uuid(),
                selected: false,
                title: 'Norwegian Wood by Haruki Murakami'
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

        var pocketView = classNames({
            'pocket-view': true,
            'pocket-view-changed': !this.state.podcastList
          });

        return (
            <>
            <h2 style={{color: 'Cyan'}}>Cool Stuff</h2>
                <hr />
                <br />
            
            <div className="page-flow">

                <div className="cover-container">
                    <div className="cover-main"></div>
                    <div className="cover-middle"></div>
                    <div className="cover-main cover-shadow"></div>
                </div>
        
            
                <div className={pocketView}>
                    <div class="content-pocket flex-50">
                        <h3>Favorite Podcasts</h3>
                        <ul className="cool-list" style={{color: 'Cyan'}}>
                            {
                                this.state.podcasts.map((podcast) => (
                                    <li onClick={() => this.togglePodcast(podcast.id)}>{podcast.title}</li>
                                ))
                            }
                        </ul>
                    </div>  
                    
                    <SelectedContent content={this.state.podcasts} backButton={this.togglePodcast} />
                </div>
                <br />

                <div className={pocketView}>
                    <div class="content-pocket flex-50">
                        <h3>Favorite Literature</h3>
                        <ul className="cool-list" style={{color: 'Cyan'}}>
                            {
                                this.state.books.map((book) => (
                                    <li onClick={() => this.toggleBook(book.id)}>{book.title}</li>
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