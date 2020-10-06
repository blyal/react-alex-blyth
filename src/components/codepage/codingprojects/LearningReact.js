import React from 'react';

class LearningReact extends React.Component {
    render() {
        return (
            <div>
                <p>
                I became curious about React in late-2019, while I was interning at Virsae in Auckland. I had known about it for a lot longer, as when I first learned JavaScript I had heard about the advances made by the teams behind Angular and React.js, and the advantages that Single Page Application (SPA) libraries provided generally. During my time at Virsae I was programming using Angular, which I found very satisfactory to use, but I heard at one point one of the guys on the team saying that he preferred React to Angular. I knew that Angular and React together were the most popularly–used JavaScript libraries, and by this stage I knew enough about Angular to start wondering about the ways in which React was different.
                </p>
                <p>
                During the CoVid-19 lockdown I finally had plenty of time to dedicate to learning React. The result? You’re looking at it :D I had wanted to build a personal website for a while, to share my coding projects, blog, and general things I’m interested in, as well as to display my interests and personality. As such, I decided to code this project using React, killing two birds with one stone.
                </p>
                <p>
                My first port of call for learning React were the free tutorials on YouTube, including <a target="_blank" className="cyanLink" href="https://www.youtube.com/watch?v=sBws8MSXN7A">this brilliant one</a> by Traversy Media, which covers all the fundamentals of React. From this course I learnt all about component structure, JSX, state, props, and React Routing. In general, when I start learning new a coding language, I start by looking for free courses on YouTube — there are some really helpful courses created by very talented programming teachers such as Brad Traversy. In coordination with such free courses, there are lots of websites which have programming courses on them. I like to use <a target="_blank" className="cyanLink" href="https://www.codecademy.com/">codecademy</a> (which I also used to learn React) because all the learning is practical with their service, so as soon as you learn a concept you have to demonstrate that you can use it. However, codecademy’s model means that it takes them a long time to create each course, so they do not cover as much content as many other, video–based online tutorials. PluralSight is a great online learning platform for programmers that I have used and recommend. I also have used Coursera, and heard good things about Udemy.
                </p>
                <p>
                These online platforms dedicated to learning coding languages cover a lot of content in a very structured way. YouTube is also good, but often the courses are shorter, less structured, or of a lower quality than the courses offered by the other platforms I have mentioned. The downside is that these coding platforms are often subscription services, and their free trials restrict your access to content. I don’t mind paying to one or maybe two platforms, though, at least on occasion as I’ve found them to be worthwhile investments.
                </p>
                <p>
                After the online tutorials (or perhaps during), it’s time to get coding! I rewatched Brad Traversy’s React tutorial and based the skeleton of my website on logic of the ToDo list he made in his tutorial. During this process I consulted the official <a target="_blank" className="cyanLink" href="https://reactjs.org/docs/getting-started.html">React documentation</a> many times, which is also very helpful. To briefly describe the architecture of my website, I have a main index.js component, into which my App component is rendered. All my other components are routed into my App component. These components include a Blog component, a Code component, a Now component, a Film component, a Cool Stuff component, and a homepage component — basically all the links you can see in the navigation bar, aside from the homepage component which is accessed by clicking my name at the top of the page. Some of these components also have subcomponents which can be accessed by clicking different elements of the component page — such as the different coding projects on this coding page component. And the great thing about React is that page loading is near–instantaneous, which is the beauty of SPAs.
                </p>
                <p>
                So — Angular or React?
                </p>
                <p>
                Difficult question. I have to say that I do find React.js very readable. I like the concept of the virtual DOM — it makes targeted page manipulation a lot quicker and easier, which makes React.js very satisfying to use. However, after being so immersed in React for so long, I’m now ironically a bit curious to use Angular again. Angular did seem more complex, which means there is a lot more I can learn from it.
                </p>

            </div>
        )
    }
}

export default LearningReact;