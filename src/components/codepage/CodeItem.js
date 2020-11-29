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
                <div style={ itemStyle } id={ id } onClick={this.props.toggleProjects.bind(this, id)}>
                    {open ? (
                    <div>
                        <div>
                            { img }
                        </div>
                        <h3 style={{color: 'Cyan'}}>{ title }</h3>
                        <div style={contentStyle}> { content } </div>
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
CodeItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default CodeItem;