import React from 'react';
import classNames from 'classnames';

interface IProps {
    open: boolean;
    type: string;
    close?: () => void; 
}

class Overlay extends React.Component<IProps> {

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