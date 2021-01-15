import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
var classNames = require('classnames');

class SelectedContent extends React.Component {

    state = {
        backInBlack: [
            "The Happiness Lab with Dr Laurie Santos",
            "Notes from Underground by Fyodor Dostoevsky",
            "Norwegian Wood by Haruki Murakami"
        ]
    }
    
    render() {

        const { content } = this.props;

        let backBtn = classNames({
            'back-btn': true,
            'ferriss-back-btn': content[0].type === 'podcast' && content[0].selected,
            'rogan-back-btn': content[1].selected && content[1].type === 'podcast',
            'happiness-back-btn': content[2].selected && content[2].type === 'podcast',
            'harris-back-btn': content[3].selected && content[3].type === 'podcast',
            'ellis-back-btn': content[0].type === 'podcast' && content[4].selected,
            'dostoevsky-back-btn': content[0].selected && content[0].type === 'book',
            'ferrante-back-btn': content[1].selected && content[2].type === 'book',
            'american-psycho-back-btn': content[2].selected && content[1].type === 'book',
            'murakami-back-btn': content[3].selected && content[3].type === 'book'
          });

        return content.map((selected) => (
            selected.selected ? 
                <div key={selected.id} className="flex flex-50">
                    {
                        this.state.backInBlack.includes(selected.title) ?
                            <div className={backBtn} onClick={this.props.backButton.bind(this, selected.id)}><FontAwesomeIcon icon={faChevronLeft} className="back-icon back-in-black" /></div>
                        :   <div className={backBtn} onClick={this.props.backButton.bind(this, selected.id)}><FontAwesomeIcon icon={faChevronLeft} className="back-icon" /></div>
                        }
                    <div className="selected-content content-pocket flex-95">{selected.content}</div>
                </div> 
                : null
        ))
    }
}

SelectedContent.propTypes = {
    content: PropTypes.array.isRequired,
    backButton: PropTypes.func.isRequired
}

export default SelectedContent;