import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';

class Blog extends React.Component {    
    render() {
        return this.props.entries.map((entry) => (
            <BlogItem key={entry.id} entry={entry} toggleBlog={this.props.toggleBlog} />
        ))
    }
}

// Prop-Types
Blog.propTypes = {
    entries: PropTypes.array.isRequired,
    toggleBlog: PropTypes.func.isRequired
}

export default Blog;