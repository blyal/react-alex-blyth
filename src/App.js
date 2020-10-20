import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Home';
import BlogPage from './components/blogpage/BlogPage';
import CodePage from './components/codepage/CodePage';
import Now from './components/Now';
import CoolStuff from './components/coolstuff/CoolStuff';
import FilmStuff from './components/film/Film';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <div id="main">
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/now" component={Now} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/code" component={CodePage} />
        <Route path="/stuff" component={CoolStuff} />
        <Route path="/film" component={FilmStuff} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
