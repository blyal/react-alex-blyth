import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {

    useEffect(() => {
        props.toggle(true, 'home');
        return () => {
            props.toggle(false, 'home');
        }
    }, [props]
    );

    return (
        <>
        <br />
        <img src={'images/Hvar-sailing.JPG'} alt="Sailing in Hvar, Croatia" className="hvar-pic" height="33%" width="33%" />
        <div className="home-style">
            <h3 className="cyan">Me in 10 Seconds</h3>
            <p>Explorer, creator, programmer. Lover of cinema, good music, and good times.</p>
            <p>I've worked as a front-end web developer, a bartender, in early childcare (less different from bartending than you might expect), and on an orchard.</p>
            <p>I believe in taking care of my mind, body, and loved ones; in continuous learning; in building relationships; and in striving to be the best version of myself that I can.</p>
        </div><br />
        <img src={'images/Bike-Line-Brothers.JPG'} alt="A very symmetrical group of international brothers" className="now-pix" height="50%" width="50%" />
        <br /><div className="home-style">
            <h3 className="cyan">This website</h3>
            <p>This website is meant to be a place where I can express my personal and professional interests, write about things I find interesting and share work I’ve done for anyone who is interested to see.</p>
            <p>The project is the result of two related goals I had in 2020: to create a portfolio website to display my programming projects and abilities to potential employers, and to create a personal website where I could post about all kinds of things that I like and am fascinated by. As such, this website kind of blends the personal and the professional, which might seem a bit odd, but I don’t mind it — the personal and professional affect each other to a huge degree.</p>
            <p>I’m still experimenting with a lot of aspects of this website, and it will no doubt change over time as I add more content. Generally though I have quite a diverse set of interests, so whoever you are and whatever you like, hopefully there will be something for you on this website, even if it’s just that you know me and simply want to hear what I’m currently up to :)</p>
        </div><br />
        <img src={'images/Snow-Alex.JPG'} alt="Wintertime in Geneva" className="hvar-pic" height="33%" width="33%" />
        <br /><div className="home-style">
            <h3 className="cyan">Me in 10x10 Seconds</h3>
            <p>I’m Alex, 24 years old, originally from New Zealand, and currently living in Spain (this already sounds like a dating profile haha). I recently moved to Spain, which I’m super happy about, because it’s been a goal of mine to do so for a long time. I also recently graduated from University, where I studied Film, Literature, Psychology, Philosophy, and Information Systems. As you can probably guess from my studies, I'm interested in a lot of things, which is one of the reasons I decided to create this website. The website is supposed to be kind of a hub for my pursuits in my diverse areas of interest to coexist. I built it using the React.js library, so you can maybe also guess that programming is one of my larger interests, although a relatively new one in my life compared to, say, film, which I’ve been interested in since a very young age — from back in the days when I was creating homemade movies on a handheld camera and negotiating with my parents for how many DVDs and VHS tapes we could fit in our movie cabinet.</p>
            <p>To describe myself a bit, I would say that I am a positive and outgoing person who aims to be connected with the world and the people in it as much as possible. My view of life, put simply, is that it is an epic journey that we are all on together, which changes us as we go, just as we change it over time. I think it’s very important to therefore spend time thinking about which direction you want your journey to go in, why you want that, and then to make choices and decisions accordingly. My personal experience is that we have more power than we realise over the direction our lives take, and the more positive energy and dedication we put into our lives, the more positive outcomes manifest. However, I also think that life is full of difficulties and challenges, and that that is unlikely to change, which is why resilience and strength are extremely important, why it is important that we love each other wherever possible, and why it is important to enjoy the good times as much as possible when they arrive, and to put the energy into creating the conditions for good times to arise as frequently as possible.</p>
            {/* Too deep. Maybe I can do a blog about this */}
            {/* <p>To take this to another level of deep–ness, I also believe that our personal identity is largely constructed of stories we tell ourselves and repeat inside our head about what we’re like as people. So personal identity is in some sense an illusion, and in another sense inevitable because of the way our minds work. As such, I think it’s important to create the most awesome life you can for yourself, by your own standards, so that your story is as awesome as possible, and to remain open to new ideas and new experiences, so that you don’t limit or sabotage yourself from becoming the person you could become and from having the life you deserve :) my brief personal story is that I love travelling, I love meeting new people and forming positive relationships, I love challenging myself to try new things that I never thought I could do, and I love the feeling I get when I achieve something I’ve been working towards, especially if it involves creating something beautiful and awesome (whether it’s something artistic, something technical, or a connection with someone). What’s your story?</p> */}
        </div><br />
        <img src={'images/Alex-in-Taormina.jpg'} alt="Taormina, Sicily" className="now-pix" height="50%" width="50%" />
        <br /><div className="home-style">
            <h3 className="cyan">Get in Touch</h3>
            <p>Please don't hesitate to reach out and say hi. I welcome all feedback, suggestions, and thoughts about the site (especially if you spot a bug), and I also welcome all interesting banter and good chats in general (the more random the topic, the better).</p>
            <p>I can be most easily reached through whichever of Instagram or LinkedIn you prefer, or else you can shoot me an email to alexblyth@pm.me if social media isn't your thing. Links to all my social media are at the bottom of the page, or at the top on mobile.</p>
        </div><br />
        <img src={'images/Amsterdam-Surprise-Reunion.jpg'} alt="A Surprise Reunion in Amsterdam" height="50%" width="50%" className="now-pix" />
        </>
    )
}

Home.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default Home;