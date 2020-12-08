import React from 'react';
import classNames from 'classnames';

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

export default Overlay;