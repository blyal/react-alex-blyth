import React from 'react';
import PropTypes from 'prop-types';

class SelectedPodcast extends React.Component {
    
    render() {
        const { id, img, content, title, open } = this.props.podcast;
        return (
            <p>hi</p>
        )
    }
}

export default SelectedPodcast;