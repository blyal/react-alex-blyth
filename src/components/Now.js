import React from 'react';
import PropTypes from 'prop-types';

class Now extends React.Component {
  render() {
    return (
      <>
        <h2 className="cyan long-title-now">What am I up to now?</h2>
        <img src={'/images/Lannisters-in-Dubrovnik.jpg'} alt="A bunch of Baratheons (not Lannisters!) at the Red Keep" height="55%" width="55%" className="now-pix" />
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10 Seconds</h3>
          <p>Travelling Europe, exploring job opportunities and possible cities in which to live.</p>
          <p>Learning new coding languages and frameworks.</p>
          <p>Creating awesome memories with people I love.</p>
          <br />
        </div>
        <img src={'/images/Ardeche-2020.jpg'} alt="Cousin time in France" height="55%" width="55%" className="now-pix" />
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10x10 Seconds</h3>
          <p>At the start of 2020, after more than 12 months of planning, I moved to Europe to complete my degree on exchange in The Netherlands and to get a new job in Spain.
              I arrived here precisely just before CoVid-19 struck, so feel extra lucky to be here at all — it feels like I arrived just in time!
              My exchange semester, the second I have done, was one of the most awesome times of my life, in spite of CoVid. I was living in a hall of residence for international students during the lockdown, so consider myself to have had one of the least boring lockdown experiences in the world.</p>
          <p>After the exchange semester finished, I went travelling to some very empty tourist destinations with a few friends from the residence, and also visited other friends from this and my previous time spent in Europe.
              Now my travel is winding down, and I'm beginning to focus on finding employment and settling in a new city. My goal for a long time has been to move to Spain, as I'm a fan of the spanish culture and want to become fluent in the language.
              Simultaneously to talking to companies and start-ups in Spain, I'm continuously coding. This website is the latest project I have been working on - I built it with react.js, using the construction of the website as a chance to learn the react library which I had previously never used.</p>
          <br />
        </div>
        <img src={'/images/Amsterdam-Surprise-Reunion.jpg'} alt="A Surprise Reunion in Amsterdam" height="50%" width="50%" className="now-pix" />
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
