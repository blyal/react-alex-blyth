import React from 'react';
import PropTypes from 'prop-types';
var classNames = require('classnames');

class SelectedPodcast extends React.Component {
    
    render() {

        var backBtn = classNames({
            'back-btn': true,
            'ferriss-back-btn': this.props.content[0].selected,
            'rogan-back-btn': this.props.content[1].selected,
            'happiness-back-btn': this.props.content[2].selected,
            'harris-back-btn': this.props.content[3].selected
          });

        return this.props.content.map((selected) => (
            selected.selected ? 
                <><div className="flex flex-50">
                    {selected.title === "The Tim Ferriss Show" || selected.title === "The Happiness Lab with Dr Laurie Santos" || selected.title === "Making Sense with Sam Harris" ?
                        <div className={backBtn} onClick={this.props.backButton.bind(this, selected.id)}><img src="images/back-in-black.png" height="12.5%" width="50%"/></div>
                    : selected.title === "The Joe Rogan Experience" ?
                        <div className={backBtn} onClick={this.props.backButton.bind(this, selected.id)}><img src="images/back-in-white.png" height="12.5%" width="50%"/></div>
                    : null }
                    <div className="selected-content content-pocket flex-95">{selected.content}</div>
                </div> 
                </>: null
        ))
    }
}

export default SelectedPodcast;