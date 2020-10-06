import React from 'react';
import SelectedPodcast from './SelectedPodcast';
import Ferriss from './Ferriss';
import { v4 as uuid } from 'uuid';

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
    

    render() {
        return (
            <>
            <h2 style={{color: 'Cyan'}}>Cool Stuff</h2>
                <hr />
                <br />
            <div style={coolStuff}>
                {
                    this.state.mainView ?
                        <div>
                            <h3>Favorite Podcasts</h3>
                            <ul className="cool-list" style={{color: 'Cyan'}}>
                                {
                                    this.state.podcasts.map((podcast) => (
                                        <li>{podcast.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    : <SelectedPodcast podcast={this.state.podcasts} />
                }
                
                
                
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

const coolStuff = {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '50em',
    lineHeight: '1.75em'
}

export default CoolStuff;