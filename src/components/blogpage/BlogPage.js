import React from 'react';
import { Route } from 'react-router-dom';
import EntriesBar from '../layout/EntriesBar';
import Blog from './Blog';
import BlogSingular from './BlogSingular';
import MentalistReview from './blogs/MentalistReview';
import HowToEmployment from './blogs/HowToEmployment';
import HowToInterview from './blogs/HowToInterview';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

class BlogPage extends React.Component {
    state = {
        blogEntries: [
            {
                id: "top-blog",
                keyword: 'interviews',
                title: 'How to Get Good at Job Interviews',
                shortTitle: "Job Interviews",
                date: '22nd March 2021',
                open: true,
                content: <HowToInterview />,
                img: <img src={'images/blog-interviews/views.jpg'} alt="Mountain Body" height='95%' width='95%' className='code-blog-img'/>
            },
            {
                id: uuid(),
                keyword: 'jobsearching',
                title: 'How to Get a Job during a Pandemic',
                shortTitle: 'Jobsearching Tips',
                date: '13th January 2021',
                open: false,
                content: <HowToEmployment />,
                img: <img src={'images/Alex-Empadronado-Spain.jpg'} alt="Getting a Job in Spain" height='95%' width='95%' className='code-blog-img'/>
            },
            {
                id: uuid(),
                keyword: 'mentalist',
                //apparently the italics tag below needs a key, because it's part of a list. Doesn't make any difference
                title: ['Review of ', <i key="mentalist-italics">The Mentalist</i>, ' (2008 – 2015)'],
                shortTitle: "Mentalist TV Show",
                date: '21st October 2020',
                open: false,
                content: <MentalistReview />,
                img: <img src={'images/mentalist-primary.jpg'} alt="Poster for The Mentalist show" height='95%' width='95%' className='code-blog-img'/>
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
                <h2 className="cyan long-title-blog">The Cool, Interesting Blog</h2>
                <hr className="blog-page-hr" />
                <Route exact path='/blog' render={(props) => <EntriesBar {...props} entries={this.state.blogEntries} />}/>
            </div>
            <Route exact path='/blog' render={(props) => <Blog {...props} entries={this.state.blogEntries} toggleBlog={this.toggleBlog} />} />
            <Route path='/blog/:id' render={(props) => 
                <React.Fragment>
                    {
                        this.state.blogEntries.map((entry) => (
                            entry.keyword === props.match.params.id ? 
                            <BlogSingular entry={entry} />
                            :
                            null
                        ))
                    }
                </React.Fragment>}/>
        </div>
        )
    }
    componentDidMount() {
        this.props.toggle(true, 'blog');
      }
    componentWillUnmount() {
        this.props.toggle(false, 'blog');
      }
}

BlogPage.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default BlogPage;