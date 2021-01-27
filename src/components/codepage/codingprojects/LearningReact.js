import React from 'react';

class LearningReact extends React.Component {
    render() {
        return (
            <div>
                <p>
                I became curious about React in late-2019, while I was interning at Virsae in Auckland. I had known about it for a lot longer, as I learned to program mainly using JavaScript and naturally gravitated towards Front–End Development. I therefore heard pretty soon about the advantages that Single Page Application libraries provide, and React is king of the SPAs in terms of usage. During my time at Virsae I was programming using Angular, which I found very satisfactory to use, but I had heard much talk from people who preferred React, including one of the guys I worked with. I knew enough about Angular by this stage to start wondering about the ways in which React was different, and I felt it could only benefit me in the long–term to diversify my knowledge of Front–End libraries rather than limit myself to one. A short time later, during the CoVid-19 lockdown and my months of job–searching, I finally had plenty of time to dedicate to learning React, and you’re looking at the result! I had wanted to build a personal website for a while, to share my coding projects, blog, and general things I’m interested in, as well as to display my interests and personality. As such, I decided to code the project using React, killing two birds with one stone by using this as a learning opportunity.
                </p>
                <p>
                My first port of call for learning React were the free tutorials on YouTube, including <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://www.youtube.com/watch?v=sBws8MSXN7A">this brilliant one</a> by Traversy Media, which covers all the fundamentals of React. From this course I first learnt about component structure, JSX, state, props, and React Routing. YouTube has some really helpful courses created by very talented programming teachers such as Brad Traversy. In coordination with such free content, there are lots of subscription–service websites which have programming courses on them. I like to use <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://www.codecademy.com/">codecademy</a> (which I also used to learn React) because all the learning is practical with their service, so as soon as you learn a concept you have to demonstrate that you can use it. However, codecademy’s model means that it takes them a long time to create each course, so they do not cover as much content as many other, video–based online tutorials, such as <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://www.pluralsight.com/">PluralSight</a>, which is a great online learning platform for programmers that I have used and recommend. I don’t mind paying to one or maybe two platforms though, as I’ve found them to be more than worthwhile investments. YouTube is also good, but often the courses are shorter, less structured, or of a lower quality than the courses offered by the other platforms I have mentioned.
                </p>
                <p>
                After some online tutorials, or perhaps during, it’s time to get coding! I rewatched Brad Traversy’s React tutorial and based the skeleton of my website on logic of the ToDo list he made in his tutorial. During this process I continuously consulted the official <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://reactjs.org/docs/getting-started.html">React documentation</a>, which is also very helpful, as are the copious amounts of articles online about using React (most of them anyway). To briefly describe the core architecture of my website, I have a main index.js component, into which my App component is rendered. All my other components are routed into my App component. These components include a Blog component, a Code component, a Now component, a Film component, a Cool Stuff component, and a homepage component — basically all the links you can see in the navigation menu, aside from the homepage component which is accessed by clicking my name at the top of the page. Some of these components also have subcomponents which can be accessed by clicking different elements of the component page — such as the different coding projects on this coding page component. And the great thing about React is that toggling between pages is near–instantaneous, which is the beauty of SPAs.
                </p>
                <div className="code-blog-entry-content-img">
                    <figure>
                        {/* <img src={'images/personal-website-trello.png'} alt="The scrum board for this project" height='100%' width='100%'/> */}
                        <figcaption>The scrum board for this project</figcaption>
                    </figure>
                </div>
               <p>
               Over time my project became more complex as I thought of new features to include on the website. I eventually decided to start treating it as if it were a professional commitment, so I started a scrum board, and began keeping track of all the features I had added, those I wanted to add, and those I was currently working on, using a service called <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://www.trello.com/">Trello</a>, which is fantastic for agile programming. I implemented Git versioning control probably far later than I should have, which allowed me to easily revert to a previous version of the website if necessary. I began to realise with some satisfaction that what had started as a side–project for learning and experimentation was becoming something much larger which I was beginning felt a bit proud of. I wanted to share the site with friends and colleagues on my social media pages, but beforehand I decided to conduct some user testing, which was probably the best idea I had. I got some really good advice, both from friends who are also programmers as well as those that aren’t, a lot of which I’m extremely relieved to be able to hear and do something about before publishing the site. I also don’t know if it’s just because I asked friends to do the user testing for me, but everyone I approached really liked the site, which increased my confidence and eagerness to publish it for a wider audience.
               </p>
               <p>
               As it stands in early–2021, the website is hosted on <a onClick={(event) => event.stopPropagation()} target="_blank" rel="noopener noreferrer" className="cyan" href="https://www.heroku.com/">Heroku</a>, and has the features I mentioned above as well as a Subscribe component, which allows users to sign up for email updates to the pages of the site that they are interested in, as well as many other smaller features and easter eggs which can be found by exploring around. I’m very satisfied with the result, which is a kind of hybrid personal–professional hub for me to share things with the world (not exactly a typical portfolio website exactly, but hey). I think it’s very interesting that I didn’t know what it would look like when I started, and that the project grew outwards over time in true agile programming fashion. With new professional commitments coming into my life in 2021, the website will no longer be my primary focus, but I am going to continue to add and curate content over time, and to post updates for anyone who is interested on my Instagram, as well as to my Email Subscriber List. I also have a lot of code improvements and updates to add — after my user testing, many of my programmer friends were kind enough to examine the source code (which anyone can view on my GitHub page, by clicking the GitHub icon below, or above for mobile), and to make a lot of suggestions and recommendations, and no doubt I will also think of new features to create and add to the website, so the work doesn’t stop now! I’m excited to continue with it into the future, and extremely glad with what has come out of a pet project which I used to learn React.
               </p>
            </div>
        )
    }
}

export default LearningReact;