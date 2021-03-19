import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function EntriesBar(props) {

    return (
        <div className="entries-bar">
            <p>Entries:</p>
            {props.entries.map(
                (entry) => 
                    <p key={entry.id} className="cyan entries-bar-option"><Link to={`/blog/${entry.keyword}`}>{entry.shortTitle}</Link></p>
            )}
        </div>
    )
}

EntriesBar.propTypes = {
    entries: PropTypes.array.isRequired
}