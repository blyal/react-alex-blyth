import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Home';
import BlogPage from './components/blogpage/BlogPage';
import CodePage from './components/codepage/CodePage';
import Now from './components/Now';
import CoolStuff from './components/coolstuff/CoolStuff';
import FilmStuff from './components/film/Film';
import Overlay from './components/layout/Overlay';
import AppLinks from './components/layout/AppLinks';
import './App.css';


function App() {

  const [openMobileMenu, toggleOpenMenu] = useState(false)
  const [firstTimeMobileMenu, notFirstTime] = useState(true)
  const [closeMobileMenu, toggleCloseMenu] = useState(true)

  const toggleMobileMenu = () => {
    toggleOpenMenu(value => !value)
    toggleCloseMenu(value => !value)
    notFirstTime(value => value = false)
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'scroll';
      } else {
        document.body.style.overflow = 'hidden';
      }
  }

  return (
    <Router>
      <div className="App">
        <Header openMenu={openMobileMenu} firstTime={firstTimeMobileMenu} closeMenu={closeMobileMenu} toggleOverlay={toggleMobileMenu} />
        <br />
        <div id="main">
            <Overlay open={openMobileMenu} type='mobile' />
            <AppLinks className="test" mobile={true} open={openMobileMenu} toggleOff={toggleMobileMenu} />
            <Route exact path="/" component={Home} />
            <Route path="/now" component={Now} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/portfolio" component={CodePage} />
            <Route path="/stuff" component={CoolStuff} />
            <Route path="/film" component={FilmStuff} />
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
