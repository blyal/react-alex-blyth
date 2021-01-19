import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-scroll';


const BlogItem = (props) => {
        const { id, img, content, title, open, date } = props.entry;
        const idJump = id.toString();

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
                        <h3 className="cyan">{ title }</h3>
                        <div className="code-blog-entry-content"> { content } </div>
                    </div>
                ) : (
                    <Link
                        to={idJump}
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={props.toggleBlog.bind(this, id)}
                    >
                        <div className="code-blog-closed">
                            <h3>{ title }</h3>
                            <hr />
                            <p>{ date }</p>
                        </div>
                    </Link>
                )}
                </div>
                <br />
            </div>
            </CSSTransition>
        )
}

// Prop-Types
BlogItem.propTypes = {
    entry: PropTypes.object.isRequired,
    toggleBlog: PropTypes.func.isRequired
}

export default BlogItem;