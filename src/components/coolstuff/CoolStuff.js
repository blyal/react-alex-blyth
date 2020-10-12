import React from 'react';
import SelectedPodcast from './SelectedPodcast';
import Ferriss from './Ferriss';
import { v4 as uuid } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class CoolStuff extends React.Component {
    
    state = {
        mainView: true,
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
                content: <Ferriss />
            },
            {
                id: uuid(),
                selected: false,
                title: 'The Happiness Lab with Dr Laurie Santos',
                content: <Ferriss />
            }
        ]
    }
    
    selectPodcast = (id) => {
        this.setState({
            mainView: !this.state.mainView,
            podcasts: this.state.podcasts.map(podcast => {
                if (podcast.id === id) {
                    podcast.selected = !podcast.selected
                }
                return podcast;
            })
        })
    }

    render() {
        return (
            <>
            <h2 style={{color: 'Cyan'}}>Cool Stuff</h2>
                <hr />
                <br />
            
            <div className="page-flow">
                <TransitionGroup>
            
                {
                    this.state.mainView ?
                    <CSSTransition
                        key="1"
                        in={this.state.mainView}
                        timeout={1000}
                        classNames="sliding"
                        >
                        <div class="content-pocket">
                            <h3>Favorite Podcasts</h3>
                            <ul className="cool-list" style={{color: 'Cyan'}}>
                                {
                                    this.state.podcasts.map((podcast) => (
                                        <li onClick={() => this.selectPodcast(podcast.id)}>{podcast.title}</li>
                                    ))
                                }
                            </ul>
                        </div>  
                        </CSSTransition>                     
                    : 
                    <CSSTransition
                        key="2"
                        in={!this.state.mainView}
                        timeout={1000}
                        classNames="other-sliding"
                        >
                    <SelectedPodcast podcasts={this.state.podcasts} selectPodcast={this.selectPodcast} /></CSSTransition>
                }
                
                </TransitionGroup>
                
                
                
                <br />
                <h3>Favorite Literature</h3>
                <ul className="cool-list" style={{color: 'Cyan'}}>
                    <li>Notes from Underground by Fyodor Dostoevsky</li>
                    <li>American Psycho by Bret Easton Ellis</li>
                    <li>My Brilliant Friend by Elena Ferrante</li>
                    <li>Norwegian Wood by Haruki Murakami</li>
                </ul>
                <br />
            </div>

            </>
        );
    }
}

export default CoolStuff;