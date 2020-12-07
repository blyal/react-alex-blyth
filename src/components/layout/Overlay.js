import React from 'react';
import classNames from 'classnames';

class Overlay extends React.Component {

render() {

    const classes = classNames({
        'overlay-film': this.props.type === 'filmPopOut',
        'overlay-mobile': this.props.type === 'mobile'
    })

    return (
        <div id="overlay" className={classes} style={{display: this.props.open ? 'block' : 'none'}} onClick={this.props.close}></div>
        )
    }
}

export default Overlay;