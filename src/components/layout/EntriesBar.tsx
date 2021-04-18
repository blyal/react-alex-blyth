import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {
    entries: entry[];
}

type entry = {
    id: string;
    keyword: string;
    shortTitle: string;
}

export default function EntriesBar(props: IProps) {

    return (
        <div className="entries-bar">
            <p>Entries:</p>
            {props.entries.map(
                (entry: entry) => 
                    <p key={entry.id} className="cyan entries-bar-option"><Link to={`/blog/${entry.keyword}`}>{entry.shortTitle}</Link></p>
            )}
        </div>
    )
}