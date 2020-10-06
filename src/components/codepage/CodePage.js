import React from 'react';
import Code from './Code';
import LearningReact from './codingprojects/LearningReact';
import EssayMateApp from './codingprojects/EssayMateApp';
import TrackApplication from './codingprojects/TrackApplication';
import { v4 as uuid } from 'uuid';

class CodePage extends React.Component {
    state = {
        codeProjects: [
            {
                id: uuid(),
                title: 'Learning React.js by building my personal website',
                year: '2020',
                open: true,
                content: <LearningReact />,
                img: <img src={'images/react-screenshot.png'} alt="Screenshot of Coding for this page" height='438.9' width='674.8'/>
            },
            {
                id: uuid(),
                title: 'EssayMate Web App with AngularJS',
                year: '2019',
                open: false,
                content: <EssayMateApp />,
                img: <img src={'images/studytime-pic-1.png'} alt="Screenshot of EssayMate app" height='345.25' width='709.25'/>
            },
            {
                id: uuid(),
                title: 'Track Application: REST / HTTP methods',
                year: '2019',
                open: false,
                content: <TrackApplication />,
                img: <img src={'images/track-screenshot-1.png'} alt="Screenshot of Track App" height='332.25' width='679'/>
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
                <h2 style={{color: 'Cyan'}}>Coding Projects</h2>
                <hr style={{color: 'Cyan'}} />
                <br />
            </div>
            <Code projects={this.state.codeProjects} toggleProjects={this.toggleProjects} />
        </div>
        )
    }
}

export default CodePage;