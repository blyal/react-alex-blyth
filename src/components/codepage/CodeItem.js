import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';


class CodeItem extends React.Component {
    
    render() {
        const { id, img, content, title, open, year } = this.props.project;
        const idJump = "#" + id.toString();
        return (
            <CSSTransition
                in={open}
                timeout={1000}
                classNames='expand'
            >
            <div>
                <div className="code-blog-entry" id={ id } onClick={this.props.toggleProjects.bind(this, id)}>
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
                        <p style={{margin: 0}}>{ year }</p>
                    </a>
                )}
                </div>
                <br />
            </div>
            </CSSTransition>
        )
    }
}

// Prop-Types
CodeItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default CodeItem;