import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
// var classNames = require('classnames');

class FilmPopOut extends React.Component {
    render() {
        const {id, director, year, img, description, related, name, born, bio, recommendations} = this.props.selected;
        return (
            <div className="filmPopOut" style={{display: this.props.open ? 'block' : 'none'}}>
                <FontAwesomeIcon icon={faTimesCircle} className="closeFilmPopOut" onClick={this.props.close} />
                {
                    this.props.type === 'film' ? <>
                    <div style={imgContainer}>
                        {img}
                    </div>
                    <div style={contents}>
                        {'titleWords' in this.props.selected ? this.props.selected.titleWords : null }
                        <div style={{textAlign: 'left'}}>
                            {description.map((item) => (
                                <p className="no-margin" key={id}>{item}</p>
                            ))}
                            <p style={context}>Directed by {director}, {year}.</p>
                        </div>
                    </div>
                </> :
                <>
                    <div style={imgContainer}>
                        {img}
                    </div>
                <div style={contents}>
                    <h3 style={head}>{name}</h3>
                    <hr />
                    <div style={{textAlign: 'left'}}>
                        {bio.map((item) => (
                            <p className="no-margin" key={id}>{item}</p>
                        ))}
                    </div>
                </div></>
                }
            </div>
        )
    }
}

const imgContainer = {
    margin: '1em 0 0',
    textAlign: 'center'
}

const contents = {
    textAlign: 'center',
    width: '85%',
    margin: '0 auto'
}

const head = {
    marginTop: '0.5em',
    marginBottom: '0.5em'
}

const context = {
    marginTop: '0.25em',
    marginBottom: '0.25em'
}

export default FilmPopOut;