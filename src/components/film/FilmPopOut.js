import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const FilmPopOut = (props) => {

        const {id, title, director, year, img, imgPortrait, description, related, name, born, bio, recommendations} = props.selected;

        const bodyWords = classNames({
            'fpo-body': true,
            'fpo-director': born !== undefined,
            'boogie-nights': title === 'Boogie Nights',
            'big-lebowski': title === 'The Big Lebowski',
            'lotr': title === 'The Lord of the Rings Trilogy',
            'ouatih': title === 'Once Upon a Time in Hollywood',
            'magnolia': title === 'Magnolia',
            'twbb': title === 'There Will Be Blood',
            'boyhood': title === 'Boyhood',
            'goodfellas': title === 'Goodfellas',
            'labyrinth': title === 'Labyrinth',
            'no-country': title === 'No Country for Old Men'
        });

        const littleBox = classNames({
            'pta': name === 'Paul Thomas Anderson',
            'coen-bros': name === 'Joel and Ethan Coen',
            'linklater': name === 'Richard Linklater',
            'tarantino': name === 'Quentin Tarantino',
            'scorsese': name === 'Martin Scorsese',
            'miyazaki': name === 'Hayao Miyazaki',
            'w-anderson': name === 'Wes Anderson',
            'lynch': name === 'David Lynch'
        });
        

        return (
            <CSSTransition
            in={props.popOut}
            timeout={800}
            classNames='open-fpo'
            unmountOnExit
                >
            <div className="film-popout">
                {
                    props.type === 'film' ? <>
                    <div className="fpo-img portrait-hide">
                        {img}
                    </div>
                    <div className="fpo-body-container fpo-film-body-container">
                        <div className={bodyWords}>
                            <p className="fpo-words portrait-hide">{title.toUpperCase()}</p>
                            <div className="fpo-img-portrait">{ imgPortrait }</div>
                            {description.map((item) => (
                                <p className="fpo-words" key={id}>{item}</p>
                            ))}
                            <p className="fpo-words">Directed by {director}, {year}.</p>
                        </div>
                    </div><br />
                    <div>
                    <p className="fpo-words fpo-bottom">Related</p>
                    <table className="film-table">
                        <tbody>
                            <tr>
                                {related.map((item, index) => <td key={index}><div>{item.img}</div></td>)}
                            </tr>
                            <tr>
                                {related.map((item, index) => 
                                    <td key={index}>{item.title} <br /><i><span>({item.director}, {item.year})</span></i></td>)}
                            </tr>
                        </tbody>
                    </table>
                    <div className="recommendations-mobile">
                        {related.map((item, index) => (
                            <div key={index}>
                                <div>{item.img}</div>
                                <p className="recommendations-mobile-words">{item.title} <br /><i><span className="recommendations-mobile-words-details">({item.director}, {item.year})</span></i></p>
                                </div>
                        ))}
                    </div>
                </div>
                </> :
                <>
                    <div className="fpo-img portrait-hide">
                        {img}
                    </div>
                    <div className="fpo-img-portrait director-img">
                        {imgPortrait}
                    </div>
                <div className="fpo-body-container">
                    <div className={littleBox}>
                        <h3 className="director-name">{name}</h3>
                        <hr />
                        <h4 className="no-margin">Born {born}.</h4>
                    </div>
                    
                    <br />
                    <div className={bodyWords}>
                        {bio.map((item) => (
                            <p className="fpo-words" key={id}>{item}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="fpo-words fpo-bottom fpo-bottom-director">Recommended Movies</p>
                    <table className="director-table">
                        <tbody>
                            <tr>
                                {recommendations.map((item, index) => <td key={index}><div>{item.img}</div></td>)}
                            </tr>
                            <tr>
                                {recommendations.map((item, index) => 
                                    <td key={index}>{item.title} <i><span>({item.year})</span></i></td>)}
                            </tr>
                        </tbody>
                    </table>
                    <div className="recommendations-mobile">
                        {recommendations.map((item, index) => <div key={index}>{item.img}</div>
                                )}
                    </div>
                </div>
                
                </>
                }
            </div>
            </CSSTransition>
        )
}

FilmPopOut.propTypes = {
    popOut: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    selected: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
}

export default FilmPopOut;