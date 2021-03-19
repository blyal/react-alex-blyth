import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function BlogSingular(props) {

        const { img, title, content, date } = props.entry;
        return (
            <>
                <div>
                    <Link to="/blog"><FaArrowLeft className="fa-arrow" /></Link>
                    <p className="blog-singular-date">{date}</p>
                </div>
                <div className="code-blog-entry blog-singular">
                    <div>
                        { img }
                    </div>
                    <h3 className="cyan">{ title }</h3>
                    <div className="code-blog-entry-content"> { content } </div>
                </div>
            </>
        )
}

export default BlogSingular;