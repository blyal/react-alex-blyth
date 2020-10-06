import React from 'react';

class CoolStuff extends React.Component {    
    render() {
        return (
            <>
            <h2 style={{color: 'Cyan'}}>Cool Stuff</h2>
                <hr />
                <br />
            <div style={coolStuff}>
                <h3>Good Podcasts</h3>
                <ul className="cool-list" style={{color: 'Cyan'}}>
                    <li>The Tim Ferriss Show</li>
                    <li>The Joe Rogan Experience</li>
                    <li>The Happiness Lab with Dr Laurie Santos</li>
                </ul>
                <br />
                <h3>Good Books</h3>
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