import React from 'react';
import FilmPopOut from './FilmPopOut';

class FilmStuff extends React.Component {    

    state = {
        popOut: false
    }

    togglePopOut = e => {
        this.setState({
            popOut: !this.state.popOut
        });
    };

    render() {
        return (
            <>
            <h2 style={{color: 'Cyan'}}>Film</h2>
                <hr />
            <div className="page-flow">
                <div className="center-content">
                    <p>I really like cinema. I have done my first degree in Film, have written and directed several short films, and enjoy talking and writing about films.
                    So although maybe this page could have been incorporated into the 'Cool Stuff' page, I have too much to say about film for that, and lets be honest, film deserves a page of its own.
                    </p>
                    <p>
                        More content to come.
                    </p>
                </div>
                <br />

                <FilmPopOut open={this.state.popOut} close={this.togglePopOut} />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3 style={{color: 'Cyan'}}>My Top Ten Films of All Time</h3>
                        <ol className="cool-list">
                                <li onClick={this.togglePopOut}>Boogie Nights</li>
                                <li>The Big Lebowski</li>
                                <li>The Lord of the Rings trilogy</li>
                                <li>Once Upon a Time in Hollywood</li>
                                <li>There Will Be Blood</li>
                                <li>Magnolia</li>
                                <li>Goodfellas</li>
                                <li>No Country for Old Men</li>
                                <li>Labyrinth</li>
                                <li>Boyhood</li>
                        </ol>
                    </div>
                </div>
                <br />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3 style={{color: 'Cyan', textAlign: 'center'}}>Best Directors in the World*</h3>
                        <p className='disclaimer'>*as far as I know. There are lots of amazing directors I am yet to discover.</p>
                        <ol className="cool-list" id="directorList">
                            <li>Paul Thomas Anderson</li>
                            <li>Joel and Ethan Coen</li>
                            <li>Quentin Tarantino</li>
                            <li>Richard Linklater</li>
                            <li>Martin Scorsese</li>
                            <li>Wes Anderson</li>
                            <li>David Lynch</li>
                            <li>Hayao Miyazaki</li>
                            <li>Michael Bay (just kidding)</li>
                        </ol>
                    </div>
                </div>
                <br />
                
                

            </div>
            </>
        );
    }
}

export default FilmStuff;