import React from 'react';
import Code from './Code';
import LearningReact from './codingprojects/LearningReact';
import EssayMateApp from './codingprojects/EssayMateApp';
import TrackApplication from './codingprojects/TrackApplication';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

class CodePage extends React.Component {
    state = {
        codeProjects: [
            {
                id: uuid(),
                title: 'Learning React.js by building my personal website',
                year: '2020–21',
                open: true,
                content: <LearningReact />,
                img: <img src={'images/react-screenshot.png'} alt="Screenshot of Coding for this page" height='100%' width='100%'/>
            },
            {
                id: uuid(),
                title: 'EssayMate Web App with AngularJS',
                year: '2019',
                open: false,
                content: <EssayMateApp />,
                img: <img src={'images/studytime-pic-1.png'} alt="Screenshot of EssayMate app" height='100%' width='100%'/>
            },
            {
                id: uuid(),
                title: 'Track Application: REST / HTTP methods',
                year: '2019',
                open: false,
                content: <TrackApplication />,
                img: <img src={'images/track-screenshot-1.png'} alt="Screenshot of Track App" height='100%' width='100%'/>
            }
        ]
    }

    toggleProjects = (id) => {
        this.setState({
            codeProjects: this.state.codeProjects.map(entry => {
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
                <h2 className="cyan">Coding Projects</h2>
                <hr />
                <br />
            </div>
            <Code projects={this.state.codeProjects} toggleProjects={this.toggleProjects} />
        </div>
        )
    }
    componentDidMount() {
        this.props.toggle(true, 'portfolio');
      }
    componentWillUnmount() {
        this.props.toggle(false, 'portfolio');
      }
}

CodePage.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default CodePage;