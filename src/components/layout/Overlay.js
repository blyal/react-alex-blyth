import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Overlay extends React.Component {

render() {

    const classes = classNames({
        'display-none': !this.props.open,
        'overlay-film': this.props.type === 'filmPopOut',
        'overlay-mobile': this.props.type === 'mobile'
    })

    return (
        <div id="overlay" className={classes} onClick={this.props.close}></div>
        )
    }
}

Overlay.propTypes = {
    open: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    close: PropTypes.func
}

export default Overlay;