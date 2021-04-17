import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { IDirector, IFilm } from './Film';

type IProps = {
    popOut: boolean;
    type: string;
    selected: IDirector | IFilm;
}

const FilmPopOut = (props: IProps) => {

        const {selected} = props;

        const bodyWords = classNames({
            'fpo-body': true,
            'fpo-director': 'born' in selected,
            'boogie-nights': 'title' in selected && selected.title === 'Boogie Nights',
            'big-lebowski': 'title' in selected && selected.title === 'The Big Lebowski',
            'lotr': 'title' in selected && selected.title === 'The Lord of the Rings Trilogy',
            'ouatih': 'title' in selected && selected.title === 'Once Upon a Time in Hollywood',
            'magnolia': 'title' in selected && selected.title === 'Magnolia',
            'twbb': 'title' in selected && selected.title === 'There Will Be Blood',
            'boyhood': 'title' in selected && selected.title === 'Boyhood',
            'goodfellas': 'title' in selected && selected.title === 'Goodfellas',
            'labyrinth': 'title' in selected && selected.title === 'Labyrinth',
            'no-country': 'title' in selected && selected.title === 'No Country for Old Men'
        });

        const littleBox = classNames({
            'pta': 'name' in selected && selected.name === 'Paul Thomas Anderson',
            'coen-bros': 'name' in selected && selected.name === 'Joel and Ethan Coen',
            'linklater': 'name' in selected && selected.name === 'Richard Linklater',
            'tarantino': 'name' in selected && selected.name === 'Quentin Tarantino',
            'scorsese': 'name' in selected && selected.name === 'Martin Scorsese',
            'miyazaki': 'name' in selected && selected.name === 'Hayao Miyazaki',
            'w-anderson': 'name' in selected && selected.name === 'Wes Anderson',
            'lynch': 'name' in selected && selected.name === 'David Lynch'
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
                    'title' in selected ? <>
                    <div className="fpo-img portrait-hide">
                        { selected.img }
                    </div>
                    <div className="fpo-body-container fpo-film-body-container">
                        <div className={bodyWords}>
                            <p className="fpo-words portrait-hide">{ selected.title.toUpperCase() }</p>
                            <div className="fpo-img-portrait">{ selected.imgPortrait }</div>
                            { selected.description.map((item) => (
                                <p className="fpo-words" key={ selected.id }>{item}</p>
                            ))}
                            <p className="fpo-words">Directed by { selected.director }, { selected.year }.</p>
                        </div>
                    </div><br />
                    <div>
                    <p className="fpo-words fpo-bottom">Related</p>
                    <table className="film-table">
                        <tbody>
                            <tr>
                                { selected.related.map((recommendation, index) => <td key={index}><div>{ recommendation.img }</div></td>) }
                            </tr>
                            <tr>
                                { selected.related.map((recommendation, index) => 
                                    <td key={index}>{ recommendation.title } <br /><i><span>({ recommendation.director }, { recommendation.year })</span></i></td>)}
                            </tr>
                        </tbody>
                    </table>
                    <div className="recommendations-mobile">
                        { selected.related.map((recommendation, index) => (
                            <div key={index}>
                                <div>{ recommendation.img }</div>
                                <p className="recommendations-mobile-words">{ recommendation.title } <br /><i><span className="recommendations-mobile-words-details">({ recommendation.director }, { recommendation.year })</span></i></p>
                                </div>
                        ))}
                    </div>
                </div>
                </> :
                <>
                    <div className="fpo-img portrait-hide">
                        { selected.img }
                    </div>
                    <div className="fpo-img-portrait director-img">
                        { selected.imgPortrait }
                    </div>
                <div className="fpo-body-container">
                    <div className={littleBox}>
                        <h3 className="director-name">{ selected.name }</h3>
                        <hr />
                        <h4 className="no-margin">Born { selected.born }.</h4>
                    </div>
                    
                    <br />
                    <div className={bodyWords}>
                        { selected.bio.map((paragraph) => (
                            <p className="fpo-words" key={ selected.id }>{ paragraph }</p>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="fpo-words fpo-bottom fpo-bottom-director">Recommended Movies</p>
                    <table className="director-table">
                        <tbody>
                            <tr>
                                { selected.recommendations.map((recommendation, index) => <td key={index}><div>{ recommendation.img }</div></td>) }
                            </tr>
                            <tr>
                                { selected.recommendations.map((recommendation, index) => 
                                    <td key={index}>{ recommendation.title } <i><span>({ recommendation.year })</span></i></td>) }
                            </tr>
                        </tbody>
                    </table>
                    <div className="recommendations-mobile">
                        { selected.recommendations.map((recommendation, index) => <div key={index}>{ recommendation.img }</div>
                                )}
                    </div>
                </div>
                
                </>
                }
            </div>
            </CSSTransition>
        )
}

export default FilmPopOut;