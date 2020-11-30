import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';


const BlogItem = (props) => {
        const { id, img, content, title, open, date } = props.entry;
        const idJump = "#" + id.toString();

        return (
            <CSSTransition
                in={open}
                timeout={1000}
                classNames='expand'
            >
            <div>
                <div className="code-blog-entry" id={ id } onClick={props.toggleBlog.bind(this, id)}>
                    {open ? (
                    <div className="code-blog-no-padding-top">
                        <div>
                            { img }
                        </div>
                        <h3 style={{color: 'Cyan'}}>{ title }</h3>
                        <div className="code-blog-entry-content"> { content } </div>
                    </div>
                ) : (
                    <a style={{textDecorationLine: 'none'}} href={idJump}>
                        <h3 style={{margin: 0}}>{ title }</h3>
                        <hr style={{marginBottom: 0}} />
                        <p style={{margin: 0, fontSize: '1em'}}>{ date }</p>
                    </a>
                )}
                </div>
                <br />
            </div>
            </CSSTransition>
        )
}

// Prop-Types
BlogItem.propTypes = {
    entry: PropTypes.object.isRequired
}

export default BlogItem;