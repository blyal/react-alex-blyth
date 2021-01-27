import React from 'react';

class TrackApplication extends React.Component {
    render() {
        return (
            <div>
                <p>
                I built the Track Application with James Swinbank–Slack, a talented developer and friend from University. By funny coincidence, we had met for the first time at a party about a week before we met again in class, where we paired up together for the project. The application was built as part of our Information Systems major at Victoria University of Wellington. We were both already familiar with HTML, CSS, and JavaScript, and through building this web app we began learning AngularJS, and used Representational State Transfer HTTP methods for the first time.
                </p>
                <div className="code-blog-entry-content-img">
                    {/* <img src={'images/track-screenshot-2.png'} alt="Screenshot of Track app" height='100%' width='100%'/> */}
                </div>
                <p>
                The requirements of the project were to construct a web app using the aforementioned standard frontend tools, including AngularJS. AngularJS was already outdated by the time of this project, but as it is more simple than Angular 2 and its successors (see above screenshot), it was a good introduction into the world of programming libraries for Single Page Application development. The application was intended to allow the New Zealand Transport Agency (NZTA) to be able to keep track of its road repairs. We were required to create a login page, which would connect to a database supplied to us; to develop different menus available to different users, based on their job title (manager, inspector, contractor, subcontractor); and to allow high–ranking users to post new projects to the system, and to delete projects upon completion. The project details were posted to the backend as JSON data, and then displayed using an HTTP GET request.
                </p>
                <div className="code-blog-entry-content-img">
                    {/* <img src={'images/track-screenshot-3.png'} alt="Screenshot of Track app" height='100%' width='100%'/> */}
                </div>
                <p>
                Although the HTTP methods were only a few lines of code, they were the most challenging syntactically, and therefore the most satisfying to implement finally. AngularJS was a lot of fun to use — I liked exploring the library, finding and incorporating new features to improve the product, manipulating the software in interesting ways to achieve our requirements. There were even some features we added which our tutors were unfamiliar with, which is always a good way to impress them :P
                </p>
                <div className="code-blog-entry-content-img">
                    {/* <img src={'images/track-screenshot-4.png'} alt="Screenshot of Track app" height='100%' width='100%'/> */}
                </div>
                <p>
                As we were being monitored for this project, we conducted it in weekly sprints. Following each sprint, our progress was assessed by our university tutors. The learning curve was steep for the API interactions, and therefore also very rewarding as we learned a lot. James was very easy to work with, and we very quickly fell into a rhythm which worked well. We ended up both receiving an A+, and becoming good friends over the course of the project. I remember becoming inspired by impressive work he had done, and then was very stoked to hear that he felt the same way when I made some good progress — as such we were able to prompt each other forward, which I think is a very solid foundation for a successful coding team.
                </p>
            </div>
        )
    }
}

export default TrackApplication;