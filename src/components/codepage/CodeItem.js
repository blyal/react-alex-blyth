import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';


class CodeItem extends React.Component {
    
    render() {
        const { id, img, content, title, open, year } = this.props.project;
        const idJump = id.toString();
        let entryClassName = classNames({
            "code-blog-entry": true,
            "code-blog-open": open
        });

        return (
            <CSSTransition
                in={open}
                timeout={1000}
                classNames='expand'
            >
            <div>
                <div className={entryClassName} id={ id } onClick={this.props.toggleProjects.bind(this, id)}>
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
                        to={"top-code"}
                        smooth={true}
                        spy={false}
                        duration={500}
                        onClick={this.props.toggleProjects.bind(this, id)}
                        >
                        <div className="code-blog-closed" href={idJump}>
                            <h3>{ title }</h3>
                            <hr />
                            <p>{ year }</p>
                        </div>
                    </Link>
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
    project: PropTypes.object.isRequired,
    toggleProjects: PropTypes.func.isRequired
}

export default CodeItem;