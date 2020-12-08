import React from 'react';
import Blog from './Blog';
import MentalistReview from './blogs/MentalistReview';
import { v4 as uuid } from 'uuid';

class BlogPage extends React.Component {
    state = {
        blogEntries: [
            {
                id: uuid(),
                //apparently the italics tag below needs a key, because it's part of a list. Doesn't make any difference
                title: ['Review of ', <i key="mentalist-italics">The Mentalist</i>, ' (2008 – 2015)'],
                date: '21st October 2020',
                open: false,
                content: <MentalistReview />,
                img: <img src={'images/mentalist-poster.JPG'} alt="Poster for The Mentalist show" height='95%' width='95%' className='code-blog-img'/>
            }
        ]
    }

    toggleBlog = (id) => {
        this.setState({
            blogEntries: this.state.blogEntries.map(entry => {
                if (entry.id === id) {
                    entry.open = !entry.open
                } else {
                    entry.open = false;
                }
                return entry;
            })
        })
    }
    
    render() {
        return (
        <div>
            <div>
                <h2 className="cyan">The Cool, Interesting Blog</h2>
                <hr />
                <br />
                {/* <h2>Alex Blyth</h2> */}
            </div>
            <Blog entries={this.state.blogEntries} toggleBlog={this.toggleBlog} />
        </div>
        )
    }
}

export default BlogPage;