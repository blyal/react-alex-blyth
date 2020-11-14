import React from 'react';

class Overlay extends React.Component {

render() {
    return (
        <div id="overlay" style={{display: this.props.open ? 'block' : 'none'}} onClick={this.props.close}></div>
        )
    }
}

export default Overlay;