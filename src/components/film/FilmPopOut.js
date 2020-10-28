import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
// var classNames = require('classnames');

class FilmPopOut extends React.Component {
    
    render() {
        return (
            <div className="filmPopOut" style={{display: this.props.open ? 'block' : 'none'}}>
                <FontAwesomeIcon icon={faTimesCircle} className="closeFilmPopOut" onClick={this.props.close} />

                <img src="images/ferriss.jpeg" alt="placeholder" height="30%" width="30%" />

            </div>
        )
    }
}

export default FilmPopOut;