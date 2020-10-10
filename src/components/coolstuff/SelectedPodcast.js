import React from 'react';
import PropTypes from 'prop-types';

class SelectedPodcast extends React.Component {
    
    render() {
        // const { id, img, content, title, open } = this.props.podcast;
        return this.props.podcasts.map((podcast) => (
            podcast.selected ? 
                <div style={{display: 'flex'}}>
                    <div style={{backgroundColor: 'grey', flexBasis: '100%'}}><img src="images/back-in-black.png" height="100%" width="100%"/></div>
                    <div className="selected-content content-pocket">{podcast.content}</div>
                </div> : null
        ))
    }
}

export default SelectedPodcast;