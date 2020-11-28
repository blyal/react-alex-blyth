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
                <a style={{textDecorationLine: 'none'}} href={idJump}>
                <div style={ itemStyle } id={ id } onClick={props.toggleBlog.bind(this, id)}>
                    {open ? (
                    <div>
                        <div>
                            { img }
                        </div>
                        <h3 style={{color: 'Cyan'}}>{ title }</h3>
                        <div style={contentStyle}> { content } </div>
                    </div>
                ) : (
                    <>
                    <h3 style={{margin: 0}}>{ title }</h3>
                    <hr style={{marginBottom: 0}} />
                    <p style={{margin: 0, fontSize: '1em'}}>{ date }</p>
                    </>
                )}
                </div>
                </a>
                <br />
            </div>
            </CSSTransition>
        )
}

const itemStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '0 auto',
    padding: '1em 1em 0.1em 1em',
    width: '50%',
    lineHeight: '1.75em',
    border: 'solid 0.125em grey',
    cursor: 'pointer'
}

const contentStyle = {
    textAlign: 'left',
    paddingLeft: '1em'
}

// Prop-Types
BlogItem.propTypes = {
    entry: PropTypes.object.isRequired
}

export default BlogItem;