import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTopRoute from './components/additional/ScrollToTopRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Home';
import BlogPage from './components/blogpage/BlogPage';
import CodePage from './components/codepage/CodePage';
import Now from './components/Now';
import CoolStuff from './components/coolstuff/CoolStuff';
import FilmStuff from './components/film/Film';
import Subscribe from './components/subscribe/Subscribe';
import SubscribeLink from './components/subscribe/SubscribeLink';
import Overlay from './components/layout/Overlay';
import AppLinks from './components/layout/AppLinks';
import './App.css';


function App() {

  const [openMobileMenu, toggleOpenMenu] = useState(false)
  const [firstTimeLoad, notFirstLoad] = useState(true)
  const [firstTimeMobileMenu, notFirstMob] = useState(true)
  const [closeMobileMenu, toggleCloseMenu] = useState(true)
  const [openHome, toggleHome] = useState(false)
  const [openNow, toggleNow] = useState(false)
  const [openBlog, toggleBlog] = useState(false)
  const [openCode, toggleCode] = useState(false)
  const [openCoolStuff, toggleCoolStuff] = useState(false)
  const [openFilmStuff, toggleFilmStuff] = useState(false)
  const [subscribeLinkOn, toggleSubscribeLinkOn] = useState(false)

  const toggleMobileMenu = () => {
    toggleOpenMenu(value => !value)
    toggleCloseMenu(value => !value)
    if (!firstTimeLoad) {
      notFirstMob(value => value = false)
    }
    notFirstLoad(value => value = false)
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'scroll';
      } else {
        document.body.style.overflow = 'hidden';
      }
  }

  const togglePage = (val, page) => {
    switch (page) {
      case 'home':
        toggleHome(value => value = val)
        toggleSubscribeLinkOn(value => value = false)
        break;
      case 'now':
        toggleNow(value => value = val)
        toggleSubscribeLinkOn(value => value = false)
        break;
      case 'blog':
        toggleBlog(value => value = val)
        toggleSubscribeLinkOn(value => value = true)
        break;
      case 'portfolio':
        toggleCode(value => value = val)
        toggleSubscribeLinkOn(value => value = true)
        break;
      case 'coolstuff':
        toggleCoolStuff(value => value = val)
        toggleSubscribeLinkOn(value => value = true)
        break;
      case 'filmstuff':
        toggleFilmStuff(value => value = val)
        toggleSubscribeLinkOn(value => value = true)
        break;
      case 'subscribe':
        toggleSubscribeLinkOn(value => value = false)
        break;
      default:
        console.log("There is an error with the TogglePage function in the App Component");
    }
  }

  return (
    <Router>
      <div className="App">
        <Header openMenu={openMobileMenu} firstTime={firstTimeMobileMenu} closeMenu={closeMobileMenu} toggleOverlay={toggleMobileMenu} cyanTitle={openHome} />
        <br />
        <div id="main">
            <Overlay open={openMobileMenu} type='mobile' />
            <AppLinks 
              className="test" mobile={true} open={openMobileMenu} toggleOff={toggleMobileMenu}
              openNow={openNow} openBlog={openBlog} openCode={openCode} openCoolStuff={openCoolStuff} openFilmStuff={openFilmStuff} />
            <Route exact path="/" render={(props) => <Home {...props} toggle={togglePage} />} />
            <Route path="/now" render={(props) => <Now {...props} toggle={togglePage} />} />
            <Route path="/blog" render={(props) => <BlogPage {...props} toggle={togglePage} />} />
            <Route path="/portfolio" render={(props) => <CodePage {...props} toggle={togglePage} />} />
            <Route path="/stuff" render={(props) => <CoolStuff {...props} toggle={togglePage} />} />
            <Route path="/film" render={(props) => <FilmStuff {...props} toggle={togglePage} />} />
            <ScrollToTopRoute path="/subscribe" toggle={togglePage} component={Subscribe} />
            {/* <Route path="/subscribe" render={(props) => <Subscribe {...props} toggle={togglePage} />} /> */}
            <SubscribeLink displayed={subscribeLinkOn} />
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
