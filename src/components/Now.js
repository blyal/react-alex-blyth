import React from 'react';
import PropTypes from 'prop-types';

class Now extends React.Component {
  render() {
    return (
      <>
        <h2 className="cyan long-title-now">What am I up to now?</h2>
        {/* <img src={'/images/Llegando-Alex.JPG'} alt="Arriving in Valencia, 2021" className="now-pix" height="40%" width="40%" /> */}
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10 Seconds</h3>
          <p>Setting up my new life in Valencia. Waiting for the Spanish Government to process my residency application...</p>
          <p>Learning new coding languages and frameworks. Staying warm and finding ways to exercise under the CoVid regime.</p>
          <p>Creating awesome memories with people I love.</p>
          <br />
        </div>
        {/* <img src={'/images/Ardeche-2020.jpg'} alt="Cousin time in France" height="55%" width="55%" className="now-pix" /> */}
        <div className="home-style">
          <br />
          <h3 className="cyan">In 10x10 Seconds</h3>
          <p>In early 2020, after more than twelve months of preparations and planning, I moved to Europe to finish my diploma on exchange in The Netherlands, and to start a new life for myself after that. I arrived precisely before CoVid struck, so I feel extra lucky to be here at all. The exchange semester, my second overall, was one of the most awesome times in my life, a truly amazing experience, even in spite of the fact that much of it was spent in lockdown. Having been locked down in a residence with 100 other international students, I consider myself to have had one of the least boring lockdown experiences in the world.</p>
          <div className="centered">
            {/* <img src={'/images/Korno2020.JPG'} alt="A pretty fun quarantine" height="100%" width="100%" className="now-pix" /> */}
          </div>
          <p>After the semester came to an end, I went travelling with some friends from the residence to some beautiful and fairly empty tourist destinations in Europe (highlights were Dubrovnik in Croatia, Ios in Greece, and Calabria in Italy), before arriving in Spain, my intended final destination, to start applying for jobs. However, I may have slightly underestimated the situation of a recent graduate trying to find a job in foreign country during a pandemic. After a month of unsuccessful searching, I decided to go travelling again (which was perversely less expensive than living in Barcelona) while still applying for jobs. This time I went solo and visited friends in Malta, Sicily, Austria, Amsterdam, and Belgium. I had an amazing time (of course), despite it not being exactly a holiday and despite being a bit stressed by the employment situation. I settled with my cousin in France for October, and then moved back to Barcelona in November, this time to stay with friends, dedicating more and more time to not just finding a job, but improving my programming skills (and therefore my employability).</p>
          <div className="centered">
            {/* <img src={'/images/Coding-Alex.JPG'} alt="A Travelling Coder" height="33%" width="33%" className="hvar-pic" /> */}
          </div>
          <p>Finally though, my interview skills were improving after such a long time that things started to really come together. My interviews started going better and better, as did my stability in life after moving around less, so much that I eventually received four job offers in the space of two weeks. I can’t describe the feeling of relief that I got when I received the first offer, and then the feeling of pure joy when I received the second offer, which I accepted. I’m scheduled to start with my new company, MaibornWolff, in February. In the meantime, I closed 2020 in the most appropriate way possible — travelling once again (I now consider myself a master at getting from A to B in Europe in spite of CoVid restrictions). I had a Latino Christmas in Amsterdam with some friends and fellow immigrants, and visited friends in Geneva and France, before returning ONCE AGAIN to Spain in January. I’m currently in Valencia, my new city, setting up things for myself here before my February start date, as well as waiting with bated breath for the Spanish Government to process my residency application.</p>
          <br />
        </div>
        {/* <img src={'/images/Sunset-Alex.JPG'} alt="Sunset in Dubrovnik" className="now-pix" height="50%" width="50%" /> */}
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
