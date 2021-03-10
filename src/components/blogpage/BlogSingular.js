import React, { Component } from 'react'

export class BlogSingular extends Component {
    render() {

        const { img, title, content } = this.props.entry;

        return (
            <div className="code-blog-no-padding-top">
                <div>
                    { img }
                </div>
                <h3 className="cyan">{ title }</h3>
                <div className="code-blog-entry-content"> { content } </div>
            </div>
        )
    }
}

export default BlogSingular;