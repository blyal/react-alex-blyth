import React from 'react';
import PropTypes from 'prop-types';

class Now extends React.Component {
  render() {
    return (
      <>
        <h2 className="cyan long-title-now">What am I up to now?</h2>
        <img src={'images/Alex-Valencia-sign.JPG'} alt="Valencia, 2021" className="now-pix" height="60%" width="60%" />
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10 Seconds</h3>
          <p>Recently moved to Valencia in Spain, and started working as a developer at a software company here.</p>
          <p>Enjoying having my own home after living out of my suitcase for 7 months last year, and recovering all of the good habits that I lost while travelling, like proper exercise.</p>
          <p>Exploring my new region, and dreaming of seeing more of Europe when the restrictions end.</p>
          <br />
        </div>
        <img src={'images/Ardeche-2020.jpg'} alt="Cousin time in France" height="55%" width="55%" className="now-pix" />
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10x10 Seconds</h3>
          <p>I’m currently in my second year of living in Europe, a goal of mine for a very long time which finally became a reality in January 2020. I arrived here a month or so before CoVid did — this obviously didn’t give me the most ideal start to my new life, but I wasn’t going to let CoVid and the panic surrounding it get in the way of my dream, so I stuck it out here! In 2020 I finished my final semester on exchange in The Netherlands (which was super awesome), found a new job in Spain and sorted out my residency, and somehow managed to visit 11 different countries in this part of the world along the way. It was a pretty crazy, fun, and at times challenging year, but extremely fulfilling.</p>
          <div className="centered">
            <img src={'images/Korno2020.JPG'} alt="A pretty fun quarantine" height="100%" width="100%" className="now-pix" />
          </div>
          <p>In January 2021, I moved to Valencia, and started my new position as a developer, working for a German company, MaibornWolff, that has just opened a office here. We develop software for mostly German clients, some of which are household names such as BMW. At the moment I’m starting on a new project to develop something as part of a new technological initiative by a global company specialising in the production and worldwide distribution of cutting–edge medical equipment. It feels like an important project to be part of during these medically crazy times. Anyway, I’m very happy at my new company, and with my new city so far, which I chose out of several cities in Spain. It’s good that I like my new city, because I guess I’ll probably like it even more when we don’t have to be indoors before 10pm ;) That's right, Spain is awesome even without the nightlife.</p>
          <div className="centered">
            <img src={'images/Alex-contract-signing.JPG'} alt="Signing the contract" height="50%" width="50%" className="hvar-pic" />
          </div>
          <p>Outside of work, I’m visiting as much of Spain as I can, enjoying my new country, as well as feeling the pulse and atmosphere of my new city. I’ve lived in new cities before, but that doesn’t stop the exhilarating feeling of being in this totally new environment, which has both a historical aesthetic as well as a contemporary vibrancy to it, as well as some stunning nature. As I’m finally adapting to the new working hours, I’m also finding more energy to do other things outside of work, such as continuing to cultivate my personal website (that you’re currently looking at), and pursuing my other interests such as wellbeing and psychology.</p>
        </div>
        <img src={'images/Coding-Alex.jpg'} alt="A Travelling Coder" className="hvar-pic" height="33%" width="33%" />
        <br />
      </>
    );
  }
  componentDidMount() {
    this.props.toggle(true, 'now');
  }
  componentWillUnmount() {
    this.props.toggle(false, 'now');
  }
}

Now.propTypes = {
  toggle: PropTypes.func.isRequired
}

export default Now;
