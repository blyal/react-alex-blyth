import React from 'react';

class EssayMateApp extends React.Component {
    render() {
        return (
            <div>
                <p>
                I built the EssayMate app as part of a software development team comprised of students from my university in New Zealand. For one of our final courses, we were sorted into groups and subcontracted out to local businesses. The company my team was assigned to was <a target="_blank" href="https://studytime.co.nz/" className="cyanLink">StudyTime NZ</a>, a tutoring and education company based in Wellington, and the project we were asked to do was to build a web app to assist students in writing essays. The premise of the project was that students often struggle to write essays, especially at the beginning of the process, and especially with regards to structure. At least in New Zealand, many students never received formal training in essay composition, and/or find themselves in situations in university of having to write essays when they are out of practice with the process. The intention of our app would be to make the process more smooth by guiding students through the construction of an essay’s first draft.
                </p>
                <p>
                For this project we assigned roles to each member of the team. I was given the role of co–Project Manager and Software Developer. Our project took three months and was conducted according to agile software development principles. We organised weekly sprints in which the most pressing tasks were prioritised and assigned to different members of the team. Weekly reports on our progress were delivered to our Project Sponsor at StudyTime, with whom we had regular meetings in-person. I also directed an advertising video which acted as a sales pitch for our product. By the end of our allotted three months, we delivered our final deliverable to StudyTime, for which we received very positive feedback in writing and after our final presentation. Our final deliverable was adopted by the company as an MVP (minimum viable product) for later commercialisation.
                </p>
                <div style={{textAlign: 'center', marginRight: '1em'}}>
                <img src={'images/studytime-pic-2a.png'} alt="Screenshot of EssayMate app" height='382.25' width='658.35'/>
                </div>
                <p>
                We used AngularJS to build the web app, for the reason that it was the programming tool that the majority of the team had knowledge of. I was quite pleased with this decision, because I saw it as an opportunity to consolidate my AngularJS knowledge. In regards to the software, I was primarily responsible for front–end development. We discussed the design of the app among the team, and I implemented the CSS based on those discussions, including the CSS for the transitions when users add and delete sections from their draft. I also designed the front–end architecture of the app with my team, which is pretty straightforward: a welcome page, followed sequentially by a context page, and finally the essay constructor. The essay constructor is a combination of different components: firstly, the menu allowing the user to add different essay sections (introduction, point, counter–point, evaluation, and conclusion) to the essay. Within each added section are subcomponents with specific prompts and examples — for example, within the Introduction section the subcomponents are 'general statement’, ‘explanation sentences', and ‘thesis’.
                </p>
                <div style={{textAlign: 'center', marginRight: '1em'}}>
                <img src={'images/studytime-pic-2b.png'} alt="Screenshot of EssayMate app" height='428.4' width='637'/>
                </div>
                <p>
                As a user adds sections, the progress bar on the left allows the user an easy view to keep track of the essay’s structure. The user can also click to jump easily between sections via this progress bar, as well as finally export their completed first draft to a pdf document. This final pdf document contains the compiled responses of the user to the prompts of the app, which they can then expand into a full essay.
                </p>
                <div style={{textAlign: 'center', marginRight: '1em'}}>
                <img src={'images/studytime-pic-3.png'} alt="Screenshot of EssayMate app" height='384.45' width='651.75'/>
                </div>
                <p>
                I learned a lot from this project. It was my first experience using agile principles, which I found to be very effective. I truly learned the meaning of the term 'sprint' on a couple of occasions, as we had to put in a lot of effort to meet our deadlines, and also learned a lot about negotiation and collaboration in a professional context. Overall it was a huge success, as we received praise from both our client and from the university, provided a functional MVP, and I was personally able to further my programming and management abilities.
                </p>
            </div>
        )
    }
}

export default EssayMateApp;