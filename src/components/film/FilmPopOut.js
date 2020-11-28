import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

const FilmPopOut = (props) => {

        const {id, title, director, year, img, description, related, name, born, bio, recommendations} = props.selected;

        const bodyWords = classNames({
            'fpo-body': true,
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
                <FontAwesomeIcon icon={faTimesCircle} className="close-fpo" onClick={props.close} />
                {
                    props.type === 'film' ? <>
                    <div style={imgContainer}>
                        {img}
                    </div>
                    <div style={contents}>
                        <div className={bodyWords}>
                            <p className="fpo-words">{title.toUpperCase()}</p>
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
                </div>
                </> :
                <>
                    <div style={imgContainer}>
                        {img}
                    </div>
                <div style={contents}>
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
                </div><br />
                <div>
                    <p className="fpo-words fpo-bottom">Recommended Movies</p>
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
                </div>
                
                </>
                }
            </div>
            </CSSTransition>
        )
}

const imgContainer = {
    margin: '1em 0 0',
    textAlign: 'center',
    zIndex: '4',
    position: 'relative'
}

const contents = {
    textAlign: 'center',
    width: '85%',
    margin: '0 auto'
}

export default FilmPopOut;