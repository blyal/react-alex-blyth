import React from 'react';
import SelectedPodcast from './SelectedPodcast';
import Ferriss from './podcasts/Ferriss';
import Rogan from './podcasts/Rogan';
import HappinessLab from './podcasts/HappinessLab';
import Harris from './podcasts/Harris';
import { v4 as uuid } from 'uuid';
var classNames = require('classnames');

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
        ]
    }
    
    togglePodcast = (id) => {
        this.setState({
            mainView: !this.state.mainView,
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

    render() {

        var pocketView = classNames({
            'pocket-view': true,
            'pocket-view-changed': !this.state.mainView
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
                    
                    <SelectedPodcast content={this.state.podcasts} backButton={this.togglePodcast} />
                </div>
                <br />

                <div className={{pocketView}}>
                    <div class="content-pocket flex-50">
                        <h3>Favorite Literature</h3>
                        <ul className="cool-list" style={{color: 'Cyan'}}>
                            <li>Notes from Underground by Fyodor Dostoevsky</li>
                            <li>American Psycho by Bret Easton Ellis</li>
                            <li>My Brilliant Friend by Elena Ferrante</li>
                            <li>Norwegian Wood by Haruki Murakami</li>
                        </ul>
                    </div>
                </div>
                <br />
            </div>

            </>
        );
    }
}

export default CoolStuff;