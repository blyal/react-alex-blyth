import React from 'react';
import PropTypes from 'prop-types';

class SelectedPodcast extends React.Component {
    
    render() {
        // const { id, img, content, title, open } = this.props.podcast;
        return this.props.podcasts.map((podcast) => (
            podcast.selected ? 
                <><div style={{display: 'flex'}}>
                    <div className="selected-content-img-container" onClick={this.props.selectPodcast.bind(this, podcast.id)}><img src="images/back-in-black.png" height="12.5%" width="50%"/></div>
                    <div className="selected-content content-pocket" style={{flexBasis: '95%'}}>{podcast.content}</div>
                </div> 
                </>: null
        ))
    }
}

export default SelectedPodcast;