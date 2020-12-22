import React from 'react';
import CodeItem from './CodeItem';
import PropTypes from 'prop-types';

class Code extends React.Component {    
    render() {
        return this.props.projects.map((project) => (
            <CodeItem key={project.id} project={project} toggleProjects={this.props.toggleProjects} />
        ))
    }
}

// Prop-Types
Code.propTypes = {
    projects: PropTypes.array.isRequired,
    toggleProjects: PropTypes.func.isRequired
}

export default Code;